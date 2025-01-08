export interface NewsItem {
  id: number
  title: string
  summary: string
  date: string
  url: string
}

export interface ProjectData {
  id: number
  name: string
  country: string
  type: 'maritime' | 'land'
  investment: number
  status: 'planned' | 'ongoing' | 'completed'
  description: string
}

export interface RouteData {
  id: number
  name: string
  type: 'maritime' | 'land'
  countries: string[]
  length: number
  status: 'operational' | 'under-construction' | 'planned'
} 