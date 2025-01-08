"use client"

import { FC, useState, useMemo } from "react"
import { Card } from "../ui/Card"
import { useData } from "@/contexts/DataContext"
import { formatCurrency } from "@/utils/format"

export const ProjectsTable: FC = () => {
  const { projects } = useData()
  const [page, setPage] = useState(1)
  const itemsPerPage = 10

  const paginatedProjects = useMemo(() => {
    const start = (page - 1) * itemsPerPage
    return projects.slice(start, start + itemsPerPage)
  }, [projects, page])

  return (
    <Card title="Projetos em Destaque">
      <div className="overflow-auto max-h-[500px]">
        <table className="w-full">
          <thead className="sticky top-0 bg-white z-10">
            <tr className="border-b">
              <th className="px-4 py-2 text-left">Nome</th>
              <th className="px-4 py-2 text-left">Tipo</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Investimento</th>
              <th className="px-4 py-2 text-left">País</th>
            </tr>
          </thead>
          <tbody>
            {paginatedProjects.map(project => (
              <tr
                key={project.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="px-4 py-2">{project.name}</td>
                <td className="px-4 py-2 capitalize">{project.type}</td>
                <td className="px-4 py-2">
                  <span className={`
                    px-2 py-1 rounded-full text-xs
                    ${project.status === 'completed' ? 'bg-green-100 text-green-800' : ''}
                    ${project.status === 'ongoing' ? 'bg-blue-100 text-blue-800' : ''}
                    ${project.status === 'planned' ? 'bg-yellow-100 text-yellow-800' : ''}
                  `}>
                    {project.status}
                  </span>
                </td>
                <td className="px-4 py-2">{formatCurrency(project.investment)}</td>
                <td className="px-4 py-2">{project.location.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-end gap-2">
        <button
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
        >
          Anterior
        </button>
        <button
          onClick={() => setPage(p => p + 1)}
          disabled={page * itemsPerPage >= projects.length}
          className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
        >
          Próxima
        </button>
      </div>
    </Card>
  )
} 