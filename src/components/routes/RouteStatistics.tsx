"use client"

import { FC } from 'react'
import { ChartCard } from '../charts/ChartCard'
import { landRoutes } from '@/data/landRoutes'
import { formatNumber } from '@/utils/format'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export const RouteStatistics: FC = () => {
  const routeStats = landRoutes.map(route => ({
    name: route.name.split('-')[0], // Pegar apenas a primeira parte do nome
    capacidade: route.statistics.annualCapacity / 1000, // Converter para milhares
    tempo: route.statistics.averageTransitTime,
    economia: route.statistics.costSavings,
    estacoes: route.infrastructure.railwayStations,
    centros: route.infrastructure.logisticsCenters
  }))

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <ChartCard
        title="Capacidade por Rota"
        subtitle="Em milhares de TEUs por ano"
      >
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={routeStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="name" 
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis />
              <Tooltip />
              <Bar 
                dataKey="capacidade" 
                fill="#0088FE"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>

      <ChartCard
        title="Infraestrutura por Rota"
        subtitle="Número de instalações"
      >
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={routeStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="name"
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis />
              <Tooltip />
              <Bar 
                dataKey="estacoes" 
                name="Estações" 
                fill="#00C49F"
                radius={[4, 4, 0, 0]}
              />
              <Bar 
                dataKey="centros" 
                name="Centros Logísticos" 
                fill="#FFBB28"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>

      <ChartCard
        title="Tempo de Trânsito"
        subtitle="Em dias"
      >
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={routeStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="name"
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis />
              <Tooltip />
              <Bar 
                dataKey="tempo" 
                fill="#8884d8"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>

      <ChartCard
        title="Economia de Custos"
        subtitle="Em percentual (%)"
      >
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={routeStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="name"
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis />
              <Tooltip />
              <Bar 
                dataKey="economia" 
                fill="#82ca9d"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>
    </div>
  )
} 