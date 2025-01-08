"use client"

import { FC } from "react"
import { ChartCard } from "../charts/ChartCard"
import { useData } from "@/contexts/DataContext"
import { formatCurrency } from "@/utils/format"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export const DetailedStats: FC = () => {
  const { tradeData, investmentData, loading, error } = useData()

  if (!investmentData?.[0]) {
    return null
  }

  const regionData = investmentData[0].regions.map(region => ({
    name: region.name,
    investimento: region.value / 1000000000
  }))

  const sectorData = investmentData[0].sectors.map(sector => ({
    name: sector.name,
    valor: sector.value / 1000000000
  }))

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <ChartCard 
        title="Investimentos por Região"
        subtitle="Em bilhões de dólares"
        loading={loading}
      >
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={regionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="name"
                tick={{ fontSize: 12 }}
                interval={0}
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis />
              <Tooltip 
                formatter={(value: number) => `$${value.toFixed(1)}B`}
                cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
              />
              <Bar 
                dataKey="investimento" 
                fill="#0088FE" 
                radius={[4, 4, 0, 0]}
                animationDuration={1000}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>

      <ChartCard 
        title="Investimentos por Setor"
        subtitle="Em bilhões de dólares"
        loading={loading}
      >
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={sectorData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="name"
                tick={{ fontSize: 12 }}
                interval={0}
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis />
              <Tooltip 
                formatter={(value: number) => `$${value.toFixed(1)}B`}
                cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
              />
              <Bar 
                dataKey="valor" 
                fill="#00C49F" 
                radius={[4, 4, 0, 0]}
                animationDuration={1000}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>
    </div>
  )
} 