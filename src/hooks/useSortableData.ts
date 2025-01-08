import { useState, useMemo } from 'react'

type SortConfig<T> = {
  key: keyof T
  direction: 'asc' | 'desc'
}

export function useSortableData<T extends Record<string, any>>(
  items: T[],
  config: SortConfig<T> | null = null
) {
  const [sortConfig, setSortConfig] = useState<SortConfig<T> | null>(config)

  const sortedItems = useMemo(() => {
    const sortableItems = [...items]
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1
        }
        return 0
      })
    }
    return sortableItems
  }, [items, sortConfig])

  const requestSort = (key: keyof T) => {
    let direction: 'asc' | 'desc' = 'asc'
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'asc'
    ) {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  return { items: sortedItems, requestSort, sortConfig }
} 