"use client"

import { FC } from "react"
import { motion } from "framer-motion"
import { Project } from "@/types/data"

interface ProjectTimelineProps {
  projects: Project[]
}

export const ProjectTimeline: FC<ProjectTimelineProps> = ({ projects }) => {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200" />
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`relative ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'} w-1/2 mb-8`}
        >
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Investimento: ${project.investment.toLocaleString()}</span>
              <span>Status: {project.status}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
} 