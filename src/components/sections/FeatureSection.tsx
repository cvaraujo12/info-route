"use client"

import { FC } from 'react'

export const FeatureSection: FC = () => {
  const features = [
    {
      title: "Infraestrutura Global",
      description: "Desenvolvimento de portos, ferrovias e rodovias conectando continentes",
      icon: "🌐"
    },
    {
      title: "Cooperação Internacional",
      description: "Parcerias entre países para impulsionar o comércio e desenvolvimento",
      icon: "🤝"
    },
    {
      title: "Desenvolvimento Sustentável",
      description: "Projetos com foco em energia limpa e preservação ambiental",
      icon: "🌱"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Principais Características
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map(feature => (
            <div 
              key={feature.title}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 