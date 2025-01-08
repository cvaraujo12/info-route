"use client"

import { FC } from "react"
import { useData } from "@/contexts/DataContext"
import { formatCurrency, formatNumber } from "@/utils/format"

export const StatisticsPanel: FC = () => {
  const { projects, countries, metadata, loading } = useData()

  const completedProjects = projects.filter(p => p.status === 'completed').length
  const ongoingProjects = projects.filter(p => p.status === 'ongoing').length
  const plannedProjects = projects.filter(p => p.status === 'planned').length

  const totalInvestment = projects.reduce((sum, p) => sum + p.investment, 0)
  const jobsCreated = countries.reduce((sum, c) => sum + c.stats.jobsCreated, 0)
  const totalTradeVolume = countries.reduce((sum, c) => sum + c.stats.tradeVolume, 0)

  const stats = [
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
      value: new Date(metadata.lastUpdated).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }),
      description: "Data da última atualização dos dados",
      change: "Atualizado automaticamente"
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          role="article"
          aria-label={stat.title}
        >
          <div className="flex flex-col">
            <dt className="text-sm font-medium text-gray-500 truncate">
              {stat.title}
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              {loading ? (
                <div className="h-8 bg-gray-200 rounded animate-pulse" />
              ) : (
                stat.value
              )}
            </dd>
            <dd className="mt-2 text-sm text-gray-600">
              {stat.description}
            </dd>
            <dd className="mt-1 text-sm text-green-600 font-medium">
              {stat.change}
            </dd>
          </div>
        </div>
      ))}
    </div>
  )
} 