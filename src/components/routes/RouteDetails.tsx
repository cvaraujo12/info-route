"use client"

import { FC } from 'react'
import { LandRoute } from '@/types/data'
import { ChartCard } from '../charts/ChartCard'
import { formatNumber } from '@/utils/format'

interface RouteDetailsProps {
  route: LandRoute
}

export const RouteDetails: FC<RouteDetailsProps> = ({ route }) => {
  return (
    <ChartCard
      title="Detalhes da Rota"
      subtitle={`Iniciada em ${route.yearStarted}`}
    >
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Países</h3>
            <ul className="mt-2 space-y-1">
              {route.countries.map(country => (
                <li 
                  key={country}
                  className="text-sm text-gray-700"
                >
                  {country}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Tipos de Transporte</h3>
            <div className="mt-2 flex gap-2">
              {route.transportTypes.map(type => (
                <span
                  key={type}
                  className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500">Infraestrutura</h3>
          <dl className="mt-2 grid grid-cols-3 gap-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <dt className="text-xs text-gray-500">Estações Ferroviárias</dt>
              <dd className="mt-1 text-lg font-semibold text-gray-900">
                {route.infrastructure.railwayStations}
              </dd>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <dt className="text-xs text-gray-500">Centros Logísticos</dt>
              <dd className="mt-1 text-lg font-semibold text-gray-900">
                {route.infrastructure.logisticsCenters}
              </dd>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <dt className="text-xs text-gray-500">Postos Aduaneiros</dt>
              <dd className="mt-1 text-lg font-semibold text-gray-900">
                {route.infrastructure.customsPosts}
              </dd>
            </div>
          </dl>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500">Pontos-Chave</h3>
          <div className="mt-2 space-y-2">
            {route.keyPoints.map(point => (
              <div
                key={point.name}
                className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-900">{point.name}</p>
                  <p className="text-sm text-gray-500">{point.country}</p>
                </div>
                <span className="text-xs text-gray-500 capitalize">
                  {point.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ChartCard>
  )
} 