"use client"

import { FC } from "react"
import { ChartCard } from "../charts/ChartCard"
import { useData } from "@/contexts/DataContext"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export const TrendAnalysis: FC = () => {
  const { tradeData } = useData()

  const formattedData = tradeData.map(data => ({
    year: data.year,
    volume: data.volume / 1000000000, // Converter para bilhões
  }))

  return (
    <ChartCard 
      title="Análise de Tendências"
      subtitle="Volume de comércio ao longo do tempo (em bilhões)"
    >
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={formattedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip 
              formatter={(value: number) => `$${value.toFixed(1)}B`}
            />
            <Line 
              type="monotone" 
              dataKey="volume" 
              stroke="#8884d8" 
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
} 