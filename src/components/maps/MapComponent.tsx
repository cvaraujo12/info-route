"use client"

import { FC } from "react"
import dynamic from "next/dynamic"
import { CountryData } from "@/types/data"

interface MapComponentProps {
  countries?: CountryData[]
}

const Map = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
    </div>
  )
})

export const MapComponent: FC<MapComponentProps> = ({ countries = [] }) => {
  return <Map countries={countries} />
} 