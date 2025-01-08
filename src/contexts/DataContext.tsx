"use client"

import { createContext, useContext, ReactNode } from 'react'
import { useAsyncData } from '@/hooks/useAsyncData'
import { CountryData, Project, TradeData, InvestmentData } from '@/types/data'
import { Statistics } from '@/data/types'
import { countries, projects, statistics, tradeData, investmentData, DATA_VERSION } from '@/data'

interface DataContextType {
  countries: CountryData[]
  projects: Project[]
  statistics: Statistics
  tradeData: TradeData[]
  investmentData: InvestmentData[]
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
      timestamp: new Date().toISOString()
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
      timestamp: new Date().toISOString()
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
      timestamp: new Date().toISOString()
    }
  })

  const {
    data: tradeDataResult,
    isLoading: isLoadingTrade,
    error: tradeError
  } = useAsyncData({
    fetchFn: async () => tradeData,
    validation: {
      isValid: true,
      timestamp: new Date().toISOString()
    }
  })

  const {
    data: investmentDataResult,
    isLoading: isLoadingInvestment,
    error: investmentError
  } = useAsyncData({
    fetchFn: async () => investmentData,
    validation: {
      isValid: true,
      timestamp: new Date().toISOString()
    }
  })

  const isLoading = isLoadingCountries || isLoadingProjects || isLoadingStats || isLoadingTrade || isLoadingInvestment
  const error = countriesError || projectsError || statsError || tradeError || investmentError

  const value = {
    countries: countryData || [],
    projects: projectData || [],
    statistics: statsData || {
      totalInvestment: 0,
      totalProjects: 0,
      countriesInvolved: 0,
      lastUpdated: new Date().toISOString()
    },
    tradeData: tradeDataResult || [],
    investmentData: investmentDataResult || [],
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