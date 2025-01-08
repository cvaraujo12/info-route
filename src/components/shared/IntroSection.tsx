import type { FC } from "react"
import Link from "next/link"

export const IntroSection: FC = () => {
  return (
    <section className="py-16 px-4 text-center bg-white">
      <h1 className="text-4xl font-bold mb-6">
        Explore as Rotas e Conexões da Nova Rota da Seda
      </h1>
      <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
        O Info Route é uma plataforma digital que documenta e analisa a maior iniciativa 
        de infraestrutura global da história moderna.
      </p>
      <div className="flex justify-center gap-4">
        <Link 
          href="/intro-video"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
        >
          Assistir Vídeo Introdutório
        </Link>
        <Link 
          href="/explore"
          className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-900"
        >
          Explorar Dados
        </Link>
      </div>
    </section>
  )
} 