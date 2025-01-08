"use client"

import { useState, useEffect } from 'react'

interface CacheData<T> {
  data: T
  timestamp: number
}

export function useDataCache<T>(
  key: string,
  fetchData: () => Promise<T>,
  ttl: number = 1000 * 60 * 5 // 5 minutes default
) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const refetchData = async () => {
    try {
      setLoading(true)
      const newData = await fetchData()
      setData(newData)
      localStorage.setItem(key, JSON.stringify({
        data: newData,
        timestamp: Date.now()
      }))
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch data'))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        // Check cache first
        const storageStr = localStorage.getItem(key)
        const storage: CacheData<T> | null = storageStr ? JSON.parse(storageStr) : null

        if (storage?.data && storage?.timestamp) {
          const isExpired = Date.now() - storage.timestamp > ttl
          if (!isExpired) {
            setData(storage.data)
            setError(null)
            setLoading(false)
            return
          }
        }

        // Fetch fresh data if cache is expired or missing
        await refetchData()
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load data'))
        setLoading(false)
      }
    }

    loadData()
  }, [key, ttl])

  return { data, loading, error, refetchData }
} 