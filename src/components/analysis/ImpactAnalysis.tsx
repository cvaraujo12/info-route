"use client"

import { FC } from "react"
import { Project } from "@/types/data"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts"

interface ImpactAnalysisProps {
  project: Project
}

export const ImpactAnalysis: FC<ImpactAnalysisProps> = ({ project }) => {
  const impactData = [
    { name: "Economic", value: project.value },
    { name: "Social", value: project.value * 0.3 }, // Estimativa de impacto social
    { name: "Environmental", value: project.value * 0.2 }, // Estimativa de impacto ambiental
  ]

  return (
    <div className="w-full h-[300px] mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={impactData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
} 