"use client"

import { FC } from "react"
import { CountryData } from "@/types/data"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { formatCurrency } from "@/utils/format"

interface MapProps {
  countries?: CountryData[]
}

const Map: FC<MapProps> = ({ countries = [] }) => {
  return (
    <div 
      className="h-[400px] relative"
      role="region"
      aria-label="Mapa interativo dos países participantes"
    >
      <MapContainer
        center={[20, 0]}
        zoom={2}
        className="h-full w-full rounded-lg"
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        {countries.map((country) => (
          <Marker
            key={country.id}
            position={country.coordinates}
          >
            <Popup>
              <div 
                className="p-2"
                role="article"
                aria-label={`Informações sobre ${country.name}`}
              >
                <h3 className="font-semibold">{country.name}</h3>
                <p className="text-sm text-gray-600">{country.region}</p>
                <p className="text-xs text-gray-500">
                  {country.projects} projetos - {formatCurrency(country.investment)} em investimentos
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Impacto no PIB: {(country.stats.gdpImpact * 100).toFixed(1)}%
                </p>
                <p className="text-xs text-gray-500">
                  Empregos gerados: {country.stats.jobsCreated.toLocaleString()}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default Map 