import { useMemo } from 'react'
import { Project, CountryData, TradeData, InvestmentData } from '@/types/data'

interface DataVisualizationResult {
  projectsByRegion: { name: string; value: number }[]
  investmentByYear: { year: number; value: number }[]
  topCountries: CountryData[]
  completionRate: number
  totalInvestment: number
  activeProjects: number
}

export function useDataVisualization(
  projects: Project[],
  countries: CountryData[],
  tradeData: TradeData[],
  investmentData: InvestmentData[]
): DataVisualizationResult {
  const projectsByRegion = useMemo(() => {
    const regions = new Map<string, number>()
    countries.forEach(country => {
      const current = regions.get(country.region) || 0
      regions.set(country.region, current + country.projectCount)
    })
    return Array.from(regions.entries()).map(([name, value]) => ({ name, value }))
  }, [countries])

  const investmentByYear = useMemo(() => {
    return investmentData
      .map(data => ({ year: data.year, value: data.total }))
      .sort((a, b) => a.year - b.year)
  }, [investmentData])

  const topCountries = useMemo(() => {
    return [...countries]
      .sort((a, b) => b.totalInvestment - a.totalInvestment)
      .slice(0, 5)
  }, [countries])

  const completionRate = useMemo(() => {
    const completed = projects.filter(p => p.status === 'completed').length
    return (completed / projects.length) * 100
  }, [projects])

  const totalInvestment = useMemo(() => {
    return projects.reduce((sum, project) => sum + project.investment, 0)
  }, [projects])

  const activeProjects = useMemo(() => {
    return projects.filter(p => p.status === 'ongoing').length
  }, [projects])

  return {
    projectsByRegion,
    investmentByYear,
    topCountries,
    completionRate,
    totalInvestment,
    activeProjects
  }
} 