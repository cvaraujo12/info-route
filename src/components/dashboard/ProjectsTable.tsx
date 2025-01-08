"use client"

import { FC, useState, useMemo } from "react"
import { Card } from "../ui/Card"
import { useData } from "@/contexts/DataContext"
import { formatCurrency } from "@/utils/format"
import { Project } from "@/types/data"

type CountryNameGetter = (countryId: string) => string
type PageSetter = (page: number) => void

export const ProjectsTable: FC = () => {
  const { projects, countries } = useData()
  const [page, setPage] = useState(1)
  const itemsPerPage = 10

  const getCountryName: CountryNameGetter = (countryId) => {
    const country = countries.find(c => c.id === countryId)
    return country?.name || countryId
  }

  const handlePreviousPage = () => setPage(p => Math.max(1, p - 1))
  const handleNextPage = () => setPage(p => p + 1)

  const paginatedProjects = useMemo(() => {
    const start = (page - 1) * itemsPerPage
    return projects.slice(start, start + itemsPerPage)
  }, [projects, page])

  if (!projects.length) {
    return (
      <Card title="Projetos em Destaque">
        <div className="p-4 text-center text-gray-500">
          Nenhum projeto encontrado
        </div>
      </Card>
    )
  }

  return (
    <Card title="Projetos em Destaque">
      <div 
        className="overflow-auto max-h-[500px]"
        role="region"
        aria-label="Lista de projetos"
      >
        <table 
          className="w-full"
          role="table"
          aria-label="Tabela de projetos"
        >
          <thead className="sticky top-0 bg-white z-10">
            <tr className="border-b">
              <th className="px-4 py-2 text-left" scope="col">Nome</th>
              <th className="px-4 py-2 text-left" scope="col">Tipo</th>
              <th className="px-4 py-2 text-left" scope="col">Status</th>
              <th className="px-4 py-2 text-left" scope="col">Investimento</th>
              <th className="px-4 py-2 text-left" scope="col">País</th>
            </tr>
          </thead>
          <tbody>
            {paginatedProjects.map(project => (
              <tr
                key={project.id}
                className="border-b hover:bg-gray-50"
                role="row"
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
                <td className="px-4 py-2">{formatCurrency(project.value)}</td>
                <td className="px-4 py-2">{getCountryName(project.countryId)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-end gap-2">
        <button
          onClick={handlePreviousPage}
          disabled={page === 1}
          className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
          aria-label="Página anterior"
        >
          Anterior
        </button>
        <button
          onClick={handleNextPage}
          disabled={page * itemsPerPage >= projects.length}
          className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
          aria-label="Próxima página"
        >
          Próxima
        </button>
      </div>
    </Card>
  )
} 