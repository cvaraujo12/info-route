"use client"

import { FC } from 'react'

export const IntroSection: FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nova Rota da Seda
          </h1>
          <p className="text-xl mb-8">
            A maior iniciativa de infraestrutura global do século XXI, conectando continentes e impulsionando o comércio internacional.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Saiba Mais
            </button>
            <button className="border-2 border-white text-white px-6 py-2 rounded-lg font-medium hover:bg-white/10 transition-colors">
              Ver Projetos
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 