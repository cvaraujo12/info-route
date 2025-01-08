import type { FC } from "react"

export const FeatureSection: FC = () => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Base de Dados</h3>
          <p className="text-gray-600">
            Acesse dados detalhados sobre projetos, investimentos e parcerias ao longo da Nova Rota da Seda.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Mapas Interativos</h3>
          <p className="text-gray-600">
            Explore rotas terrestres e marítimas através de visualizações interativas.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Recursos Educacionais</h3>
          <p className="text-gray-600">
            Material didático e recursos para pesquisadores e educadores.
          </p>
        </div>
      </div>
    </section>
  )
} 