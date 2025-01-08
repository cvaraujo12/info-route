"use client"

import { FC, useEffect } from "react"
import { CountryData } from "@/types/data"
import dynamic from "next/dynamic"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

const Map = dynamic(
  () => import('./Map'),
  { 
    ssr: false,
    loading: () => (
      <div className="h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
      </div>
    )
  }
)

interface MapClientProps {
  countries?: CountryData[]
}

const MapClient: FC<MapClientProps> = ({ countries = [] }) => {
  useEffect(() => {
    // Fix for default marker icons
    delete (L.Icon.Default.prototype as any)._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'leaflet/dist/images/marker-icon-2x.png',
      iconUrl: 'leaflet/dist/images/marker-icon.png',
      shadowUrl: 'leaflet/dist/images/marker-shadow.png',
    })
  }, [])

  return <Map countries={countries} />
}

export default MapClient 