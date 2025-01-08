"use client"

import { FC } from "react"
import { useInView } from "react-intersection-observer"
import { ChartCard } from "../charts/ChartCard"
import { useData } from "@/contexts/DataContext"
import { formatCurrency } from "@/utils/format"
import { motion } from "framer-motion"
import { Project } from "@/types/data"

type ProjectSorter = (a: Project, b: Project) => number

export const KeyProjects: FC = () => {
  const { projects, isLoading } = useData()
  const { ref, inView } = useInView({ threshold: 0.1 })

  const sortByValue: ProjectSorter = (a, b) => b.value - a.value

  if (!projects.length) {
    return (
      <ChartCard
        title="Principais Projetos"
        subtitle="Por valor de investimento"
        loading={isLoading}
      >
        <div className="p-4 text-center text-gray-500">
          Nenhum projeto encontrado
        </div>
      </ChartCard>
    )
  }

  const topProjects = projects
    .sort(sortByValue)
    .slice(0, 5)

  return (
    <ChartCard
      title="Principais Projetos"
      subtitle="Por valor de investimento"
      loading={isLoading}
    >
      <div 
        ref={ref} 
        className="space-y-4"
        role="list"
        aria-label="Lista dos 5 principais projetos"
      >
        {topProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            role="listitem"
            aria-label={`Projeto: ${project.name}`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900">{project.name}</h3>
                <p className="text-sm text-gray-500">{project.type}</p>
              </div>
              <span 
                className="text-sm font-medium text-gray-900"
                aria-label={`Valor: ${formatCurrency(project.value)}`}
              >
                {formatCurrency(project.value)}
              </span>
            </div>
            <div className="mt-2 flex justify-between items-center">
              <span 
                className="text-xs text-gray-500"
                aria-label={`Status: ${project.status}`}
              >
                Status: {project.status}
              </span>
              <span 
                className="text-xs text-gray-500"
                aria-label={`Data de início: ${new Date(project.startDate).toLocaleDateString()}`}
              >
                Início: {new Date(project.startDate).toLocaleDateString()}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </ChartCard>
  )
} 