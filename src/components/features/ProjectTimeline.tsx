"use client"

import { FC, useMemo } from "react"
import { motion } from "framer-motion"
import { Project } from "@/types/data"
import { formatCurrency } from "@/utils/format"
import { useData } from "@/contexts/DataContext"

interface ProjectTimelineProps {
  projects: Project[]
}

type CountryNameGetter = (countryId: string) => string
type AnimationConfig = {
  initial: { opacity: number; y: number }
  animate: { opacity: number; y: number }
  transition: { delay: number }
}

export const ProjectTimeline: FC<ProjectTimelineProps> = ({ projects }) => {
  const { countries } = useData()

  const getCountryName: CountryNameGetter = (countryId) => {
    const country = countries.find(c => c.id === countryId)
    return country?.name || countryId
  }

  const getAnimationConfig = (index: number): AnimationConfig => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: index * 0.1 }
  })

  const timelineProjects = useMemo(() => 
    projects.map((project, index) => ({
      ...project,
      animation: getAnimationConfig(index),
      position: index % 2 === 0 ? 'mr-auto' : 'ml-auto'
    }))
  , [projects])

  if (!projects.length) {
    return (
      <div className="relative p-4 text-center text-gray-500">
        Nenhum projeto encontrado
      </div>
    )
  }

  return (
    <div 
      className="relative"
      role="region"
      aria-label="Linha do tempo dos projetos"
    >
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200"
        role="presentation"
        aria-hidden="true"
      />
      {timelineProjects.map((project) => (
        <motion.div
          key={project.id}
          {...project.animation}
          className={`relative ${project.position} w-1/2 mb-8`}
          role="article"
          aria-label={`Projeto: ${project.name}`}
        >
          <div 
            className="bg-white rounded-lg shadow-sm p-6"
            tabIndex={0}
          >
            <h3 
              className="text-xl font-bold mb-2"
              aria-label={`Nome do projeto: ${project.name}`}
            >
              {project.name}
            </h3>
            <p 
              className="text-gray-600 mb-4"
              aria-label={`Tipo e país: ${project.type} em ${getCountryName(project.countryId)}`}
            >
              {project.type} - {getCountryName(project.countryId)}
            </p>
            <div 
              className="flex justify-between text-sm text-gray-500"
              aria-label={`Detalhes do projeto: Investimento de ${formatCurrency(project.value)} e status ${project.status}`}
            >
              <span>Investimento: {formatCurrency(project.value)}</span>
              <span>Status: {project.status}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
} 