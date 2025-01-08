"use client"

import { FC, useMemo } from "react"
import { Card } from "../ui/Card"
import { totalInvestment, totalProjects, participatingCountries } from "@/data"
import { formatCurrency } from "@/utils/format"

export const StatisticsPanel: FC = () => {
  const formattedStats = useMemo(() => ({
    investment: formatCurrency(totalInvestment),
    projects: totalProjects.toLocaleString(),
    countries: participatingCountries.toLocaleString()
  }), [])

  if (!totalInvestment || !totalProjects || !participatingCountries) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} title="Carregando...">
              <div className="h-8 bg-gray-200 rounded animate-pulse" />
              <p className="text-sm text-gray-500">Aguarde...</p>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Total de Investimentos">
          <div className="text-3xl font-bold text-primary-900">
            {formattedStats.investment}
          </div>
          <p className="text-sm text-gray-500">Desde 2013</p>
        </Card>
        <Card title="Países Participantes">
          <div className="text-3xl font-bold text-primary-900">
            {formattedStats.countries}
          </div>
          <p className="text-sm text-gray-500">Em 6 continentes</p>
        </Card>
        <Card title="Projetos Ativos">
          <div className="text-3xl font-bold text-primary-900">
            {formattedStats.projects}
          </div>
          <p className="text-sm text-gray-500">Em desenvolvimento</p>
        </Card>
      </div>
    </div>
  )
} 