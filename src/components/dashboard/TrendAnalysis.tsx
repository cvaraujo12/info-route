"use client"

import { FC, useMemo } from "react"
import { ChartCard } from "../charts/ChartCard"
import { useData } from "@/contexts/DataContext"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { TradeData } from "@/types/data"

type ChartData = {
  year: number
  volume: number
}

type DataFormatter = (data: TradeData) => ChartData
type ValueFormatter = (value: number) => string

export const TrendAnalysis: FC = () => {
  const { tradeData } = useData()

  const formatChartData: DataFormatter = (data) => ({
    year: data.year,
    volume: data.values.total / 1000000000, // Converter para bilhões
  })

  const formatTooltipValue: ValueFormatter = (value) => `$${value.toFixed(1)}B`

  const formattedData = useMemo(() => 
    tradeData.map(formatChartData)
  , [tradeData])

  if (!tradeData.length) {
    return (
      <ChartCard 
        title="Análise de Tendências"
        subtitle="Volume de comércio ao longo do tempo (em bilhões)"
      >
        <div className="h-[300px] flex items-center justify-center">
          <p className="text-gray-500">Nenhum dado disponível</p>
        </div>
      </ChartCard>
    )
  }

  return (
    <ChartCard 
      title="Análise de Tendências"
      subtitle="Volume de comércio ao longo do tempo (em bilhões)"
    >
      <div 
        className="h-[300px]"
        role="region"
        aria-label="Gráfico de tendências de volume de comércio"
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart 
            data={formattedData}
            role="img"
            aria-label="Gráfico de linha mostrando tendências de volume de comércio"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="year"
              aria-label="Anos"
            />
            <YAxis 
              aria-label="Volume em bilhões de dólares"
            />
            <Tooltip 
              formatter={formatTooltipValue}
              cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
            />
            <Line 
              type="monotone" 
              dataKey="volume" 
              stroke="#8884d8" 
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              name="Volume de Comércio"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
} 