"use client"

import { FC } from 'react'

export const NewsSection: FC = () => {
  const news = [
    {
      title: "Novo Porto Inaugurado na Grécia",
      date: "15 Jan 2024",
      category: "Infraestrutura",
      description: "O Porto de Pireu expande suas operações com novo terminal de contêineres."
    },
    {
      title: "Acordo Ferroviário China-Europa",
      date: "12 Jan 2024",
      category: "Transporte",
      description: "Nova rota ferroviária conectará diretamente cidades chinesas e europeias."
    },
    {
      title: "Investimentos em Energia Verde",
      date: "10 Jan 2024",
      category: "Energia",
      description: "Projetos de energia renovável recebem financiamento significativo."
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">
          Últimas Notícias
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {news.map(item => (
            <article 
              key={item.title}
              className="border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm text-gray-500">{item.date}</span>
                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                  {item.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
              <button className="mt-4 text-blue-600 font-medium hover:text-blue-700">
                Ler mais →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
} 