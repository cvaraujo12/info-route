import type { FC } from "react"
import Link from "next/link"

export const NewsSection: FC = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Últimas Atualizações</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Exemplo de notícia */}
          <article className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">
              <Link href="/news/1" className="hover:text-blue-600">
                Novo Porto Inaugurado na Rota Marítima
              </Link>
            </h3>
            <p className="text-gray-600 mb-4">
              Expansão significativa da capacidade portuária no Sudeste Asiático.
            </p>
            <span className="text-sm text-gray-500">12 Janeiro 2024</span>
          </article>
        </div>
      </div>
    </section>
  )
} 