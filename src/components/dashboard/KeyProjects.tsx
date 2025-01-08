"use client"

import { FC } from "react"
import { ChartCard } from "../charts/ChartCard"
import { useData } from "@/contexts/DataContext"
import { formatCurrency } from "@/utils/format"
import { useInView } from "@/hooks/useInView"
import { cn } from "@/utils/cn"

export const KeyProjects: FC = () => {
  const { projects, loading, refetchData } = useData()
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const topProjects = projects
    .sort((a, b) => b.investment - a.investment)
    .slice(0, 5)

  return (
    <ChartCard 
      title="Principais Projetos"
      subtitle="Por valor de investimento"
      loading={loading}
      onRefresh={refetchData}
      expandable
    >
      <div 
        ref={ref}
        className="space-y-4"
      >
        {topProjects.map((project, index) => (
          <div 
            key={project.id}
            className={cn(
              "bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-all",
              "transform opacity-0",
              isInView && "animate-fade-in opacity-100"
            )}
            style={{ 
              animationDelay: `${index * 100}ms`,
              transitionDelay: `${index * 50}ms`
            }}
            role="article"
            aria-label={`Projeto: ${project.name}`}
            tabIndex={0}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{project.name}</h3>
                <p className="text-sm text-gray-600">{project.location.country}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {project.startYear} - {project.completionYear || 'Em andamento'}
                </p>
              </div>
              <div className="text-right">
                <div className="font-bold text-primary-900">
                  {formatCurrency(project.investment)}
                </div>
                <span className={cn(
                  'px-2 py-1 rounded-full text-xs',
                  {
                    'bg-green-100 text-green-800': project.status === 'completed',
                    'bg-blue-100 text-blue-800': project.status === 'ongoing',
                    'bg-yellow-100 text-yellow-800': project.status === 'planned'
                  }
                )}>
                  {project.status}
                </span>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-600 line-clamp-2">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </ChartCard>
  )
} 