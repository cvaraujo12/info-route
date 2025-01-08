"use client"

import { createContext, useContext, ReactNode } from 'react'
import { useAsyncData } from '@/hooks/useAsyncData'
import { Country, Project, Statistics } from '@/data/types'
import { countries, projects, statistics, DATA_VERSION } from '@/data'

interface DataContextType {
  countries: Array<{
    id: string
    name: string
    region: string
    coordinates: [number, number]
    projects: number
    investment: number
  }>
  projects: Project[]
  statistics: Statistics
  isLoading: boolean
  error: Error | null
  version: string
}

const DataContext = createContext<DataContextType | undefined>(undefined)

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const { 
    data: countryData, 
    isLoading: isLoadingCountries,
    error: countriesError 
  } = useAsyncData({
    fetchFn: async () => countries,
    validation: {
      isValid: true,
      timestamp: Date.now(),
      version: DATA_VERSION
    }
  })

  const {
    data: projectData,
    isLoading: isLoadingProjects,
    error: projectsError
  } = useAsyncData({
    fetchFn: async () => projects,
    validation: {
      isValid: true,
      timestamp: Date.now(),
      version: DATA_VERSION
    }
  })

  const {
    data: statsData,
    isLoading: isLoadingStats,
    error: statsError
  } = useAsyncData({
    fetchFn: async () => statistics,
    validation: {
      isValid: true,
      timestamp: Date.now(),
      version: DATA_VERSION
    }
  })

  const isLoading = isLoadingCountries || isLoadingProjects || isLoadingStats
  const error = countriesError || projectsError || statsError

  const value = {
    countries: countryData || [],
    projects: projectData || [],
    statistics: statsData || {
      totalInvestment: 0,
      totalProjects: 0,
      countriesInvolved: 0,
      lastUpdated: new Date().toISOString()
    },
    isLoading,
    error,
    version: DATA_VERSION
  }

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => {
  const context = useContext(DataContext)
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider')
  }
  return context
} 