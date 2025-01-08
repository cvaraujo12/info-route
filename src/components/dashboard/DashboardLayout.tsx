"use client"

import { FC } from "react"
import { MapComponent } from "../maps/MapComponent"
import { StatisticsPanel } from "./StatisticsPanel"
import { ProjectsTable } from "./ProjectsTable"
import { DetailedStats } from "./DetailedStats"
import { KeyProjects } from "./KeyProjects"
import { TrendAnalysis } from "./TrendAnalysis"
import { useData } from "@/contexts/DataContext"
import { LoadingSpinner } from "../ui/LoadingSpinner"
import { ErrorMessage } from "../ui/ErrorMessage"
import { ChartCard } from "../charts/ChartCard"

export const DashboardLayout: FC = () => {
  const { loading, error, refetchData, countries } = useData()

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <ErrorMessage
          message={error.message}
          onRetry={refetchData}
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <StatisticsPanel />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ChartCard 
              title="Mapa Interativo"
              subtitle="Distribuição global dos projetos"
            >
              <MapComponent countries={countries} />
            </ChartCard>
            <KeyProjects />
          </div>

          <DetailedStats />
          
          <TrendAnalysis />

          <ProjectsTable />
        </div>
      </div>
    </div>
  )
} 