"use client"

import { FC } from "react"
import { Card } from "../ui/Card"
import { Project } from "@/types/data"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"

interface ImpactAnalysisProps {
  project: Project
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"]

export const ImpactAnalysis: FC<ImpactAnalysisProps> = ({ project }) => {
  const impactData = [
    { name: "Econômico", value: project.impacts.economic.length },
    { name: "Social", value: project.impacts.social.length },
    { name: "Ambiental", value: project.impacts.environmental.length },
  ]

  return (
    <Card title="Análise de Impacto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={impactData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {impactData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-blue-600">Impactos Econômicos</h4>
            <ul className="list-disc list-inside">
              {project.impacts.economic.map((impact, index) => (
                <li key={index} className="text-sm text-gray-600">{impact}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-600">Impactos Sociais</h4>
            <ul className="list-disc list-inside">
              {project.impacts.social.map((impact, index) => (
                <li key={index} className="text-sm text-gray-600">{impact}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-yellow-600">Impactos Ambientais</h4>
            <ul className="list-disc list-inside">
              {project.impacts.environmental.map((impact, index) => (
                <li key={index} className="text-sm text-gray-600">{impact}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Card>
  )
} 