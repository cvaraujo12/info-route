"use client"

import { FC } from "react"
import { CountryData } from "@/types/data"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

interface MapProps {
  countries?: CountryData[]
}

const Map: FC<MapProps> = ({ countries = [] }) => {
  return (
    <div className="h-[400px] relative">
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
              <div className="p-2">
                <h3 className="font-semibold">{country.name}</h3>
                <p className="text-sm text-gray-600">{country.region}</p>
                <p className="text-xs text-gray-500">
                  {country.projectCount} projetos - ${country.totalInvestment.toLocaleString()} em investimentos
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