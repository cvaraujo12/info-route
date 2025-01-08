"use client"

import { FC, useMemo } from "react"
import { useData } from "@/contexts/DataContext"
import { formatCurrency, formatNumber } from "@/utils/format"
import { Project, CountryData } from "@/types/data"

type StatisticItem = {
  title: string
  value: string
  description: string
  change: string
}

type ProjectFilter = (project: Project) => boolean
type StatCalculator = (data: Project[] | CountryData[]) => number

export const StatisticsPanel: FC = () => {
  const { projects, countries, statistics, isLoading } = useData()

  const isCompleted: ProjectFilter = (p) => p.status === 'completed'
  const isOngoing: ProjectFilter = (p) => p.status === 'ongoing'
  const isPlanned: ProjectFilter = (p) => p.status === 'planned'

  const calculateTotalInvestment: StatCalculator = (projects) => 
    (projects as Project[]).reduce((sum, p) => sum + p.value, 0)

  const calculateJobsCreated: StatCalculator = (countries) => 
    (countries as CountryData[]).reduce((sum, c) => sum + c.stats.jobsCreated, 0)

  const calculateTradeVolume: StatCalculator = (countries) => 
    (countries as CountryData[]).reduce((sum, c) => sum + c.stats.tradeVolume, 0)

  const stats: StatisticItem[] = useMemo(() => {
    const completedProjects = projects.filter(isCompleted).length
    const ongoingProjects = projects.filter(isOngoing).length
    const plannedProjects = projects.filter(isPlanned).length

    const totalInvestment = calculateTotalInvestment(projects)
    const jobsCreated = calculateJobsCreated(countries)
    const totalTradeVolume = calculateTradeVolume(countries)

    return [
      {
        title: "Total de Investimentos",
        value: formatCurrency(totalInvestment),
        description: "Valor total investido em projetos",
        change: "+12.5% em relação ao ano anterior"
      },
      {
        title: "Projetos",
        value: formatNumber(projects.length),
        description: `${completedProjects} concluídos, ${ongoingProjects} em andamento, ${plannedProjects} planejados`,
        change: `${formatNumber(completedProjects / projects.length * 100)}% de taxa de conclusão`
      },
      {
        title: "Países Participantes",
        value: formatNumber(countries.length),
        description: "Países envolvidos na iniciativa",
        change: "+5 países nos últimos 12 meses"
      },
      {
        title: "Empregos Gerados",
        value: formatNumber(jobsCreated),
        description: "Empregos diretos e indiretos",
        change: "+15% em relação ao ano anterior"
      },
      {
        title: "Volume de Comércio",
        value: formatCurrency(totalTradeVolume),
        description: "Volume total de comércio entre países",
        change: "+8.3% em relação ao ano anterior"
      },
      {
        title: "Última Atualização",
        value: new Date(statistics.lastUpdated).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        }),
        description: "Data da última atualização dos dados",
        change: "Atualizado automaticamente"
      }
    ]
  }, [projects, countries, statistics])

  if (!projects.length || !countries.length) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="text-center text-gray-500">
            Nenhum dado disponível
          </div>
        </div>
      </div>
    )
  }

  return (
    <div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      role="region"
      aria-label="Painel de estatísticas"
    >
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          role="article"
          aria-label={stat.title}
        >
          <div className="flex flex-col">
            <dt 
              className="text-sm font-medium text-gray-500 truncate"
              aria-label={`Título: ${stat.title}`}
            >
              {stat.title}
            </dt>
            <dd 
              className="mt-1 text-3xl font-semibold text-gray-900"
              aria-label={`Valor: ${stat.value}`}
            >
              {isLoading ? (
                <div 
                  className="h-8 bg-gray-200 rounded animate-pulse"
                  role="progressbar"
                  aria-label="Carregando..."
                />
              ) : (
                stat.value
              )}
            </dd>
            <dd 
              className="mt-2 text-sm text-gray-600"
              aria-label={`Descrição: ${stat.description}`}
            >
              {stat.description}
            </dd>
            <dd 
              className="mt-1 text-sm text-green-600 font-medium"
              aria-label={`Variação: ${stat.change}`}
            >
              {stat.change}
            </dd>
          </div>
        </div>
      ))}
    </div>
  )
} 