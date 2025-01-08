"use client"

import { FC } from "react"
import { CountryData } from "@/types/data"
import dynamic from "next/dynamic"

interface DynamicMapProps {
  countries?: CountryData[]
}

// Importar o componente do mapa dinamicamente
const Map = dynamic(
  () => import('./MapClient'),
  { 
    ssr: false,
    loading: () => (
      <div className="h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
      </div>
    )
  }
)

const DynamicMap: FC<DynamicMapProps> = ({ countries = [] }) => {
  return <Map countries={countries} />
}

export default DynamicMap 