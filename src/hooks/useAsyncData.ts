import { useState, useEffect } from 'react'
import { DataValidation } from '@/data'

interface UseAsyncDataProps<T> {
  fetchFn: () => Promise<T>
  initialData?: T
  validation?: DataValidation
}

export const useAsyncData = <T>({ 
  fetchFn, 
  initialData,
  validation 
}: UseAsyncDataProps<T>) => {
  const [data, setData] = useState<T | undefined>(initialData)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true)
        const result = await fetchFn()
        setData(result)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch data'))
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [fetchFn])

  return { data, isLoading, error }
} 