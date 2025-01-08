"use client"

import { createContext, useContext, ReactNode, FC } from 'react'
import { useAsyncData } from '@/hooks/useAsyncData'
import { projects, countries, tradeData, investmentData } from '@/data'
import type { Project, CountryData, TradeData, InvestmentData } from '@/types/data'

interface DataContextType {
  projects: Project[]
  countries: CountryData[]
  tradeData: TradeData[]
  investmentData: InvestmentData[]
  loading: boolean
  error: Error | null
  refetchData: () => void
}

const DataContext = createContext<DataContextType | null>(null)

export const useData = () => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useData must be used within a DataProvider')
  }
  return context
}

interface DataProviderProps {
  children: ReactNode
}

export const DataProvider: FC<DataProviderProps> = ({ children }) => {
  const {
    data: projectsData,
    loading: projectsLoading,
    error: projectsError,
    refetch: refetchProjects
  } = useAsyncData(() => Promise.resolve(projects))

  const {
    data: countriesData,
    loading: countriesLoading,
    error: countriesError,
    refetch: refetchCountries
  } = useAsyncData(() => Promise.resolve(countries))

  const {
    data: tradeDataData,
    loading: tradeDataLoading,
    error: tradeDataError,
    refetch: refetchTradeData
  } = useAsyncData(() => Promise.resolve(tradeData))

  const {
    data: investmentDataData,
    loading: investmentDataLoading,
    error: investmentDataError,
    refetch: refetchInvestmentData
  } = useAsyncData(() => Promise.resolve(investmentData))

  const loading = projectsLoading || countriesLoading || tradeDataLoading || investmentDataLoading
  const error = projectsError || countriesError || tradeDataError || investmentDataError

  const refetchData = () => {
    refetchProjects()
    refetchCountries()
    refetchTradeData()
    refetchInvestmentData()
  }

  return (
    <DataContext.Provider
      value={{
        projects: projectsData || [],
        countries: countriesData || [],
        tradeData: tradeDataData || [],
        investmentData: investmentDataData || [],
        loading,
        error,
        refetchData
      }}
    >
      {children}
    </DataContext.Provider>
  )
} 