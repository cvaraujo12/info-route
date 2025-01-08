"use client"

import { FC, useMemo } from 'react'
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet'
import { LandRoute } from '@/types/data'
import { ChartCard } from '../charts/ChartCard'
import { formatNumber } from '@/utils/format'

interface LandRouteMapProps {
  route: LandRoute
}

export const LandRouteMap: FC<LandRouteMapProps> = ({ route }) => {
  const bounds = useMemo(() => {
    const coordinates = route.keyPoints.map(point => point.coordinates)
    return coordinates
  }, [route])

  const pathOptions = {
    color: '#0088FE',
    weight: 3,
    opacity: 0.8
  }

  return (
    <ChartCard 
      title={route.name}
      subtitle={`${formatNumber(route.length)}km através de ${route.countries.length} países`}
    >
      <div className="h-[400px] relative">
        <MapContainer
          bounds={bounds}
          className="h-full w-full rounded-lg"
          zoom={4}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          <Polyline positions={bounds} pathOptions={pathOptions} />
          {route.keyPoints.map((point) => (
            <Marker 
              key={point.name}
              position={point.coordinates}
            >
              <Popup>
                <div className="p-2">
                  <h3 className="font-semibold">{point.name}</h3>
                  <p className="text-sm text-gray-600">{point.country}</p>
                  <p className="text-xs text-gray-500 capitalize">{point.type}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-sm text-gray-600">Capacidade Anual</p>
          <p className="font-bold text-blue-600">
            {formatNumber(route.statistics.annualCapacity)} TEUs
          </p>
        </div>
        <div className="bg-green-50 p-3 rounded-lg">
          <p className="text-sm text-gray-600">Tempo Médio</p>
          <p className="font-bold text-green-600">
            {route.statistics.averageTransitTime} dias
          </p>
        </div>
        <div className="bg-purple-50 p-3 rounded-lg">
          <p className="text-sm text-gray-600">Economia</p>
          <p className="font-bold text-purple-600">
            {route.statistics.costSavings}%
          </p>
        </div>
      </div>
    </ChartCard>
  )
} 