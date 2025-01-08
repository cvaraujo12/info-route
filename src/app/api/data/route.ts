import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import type { Project } from '@/types/data'

export async function GET() {
  try {
    const [projects, countries, tradeData, investmentData, environmentalData] = await Promise.all([
      prisma.project.findMany({
        include: {
          country: true,
          timeline: true,
          impacts: true
        }
      }),
      prisma.country.findMany({
        include: {
          stats: true
        }
      }),
      prisma.tradeData.findMany(),
      prisma.investmentData.findMany(),
      prisma.environmentalData.findMany()
    ])

    const metadata = {
      lastUpdated: new Date().toISOString(),
      totalProjects: projects.length,
      totalCountries: countries.length,
      totalInvestment: projects.reduce((sum: number, project: any) => sum + project.investment, 0)
    }

    return NextResponse.json({
      projects,
      countries,
      tradeData,
      investmentData,
      environmentalData,
      metadata
    })
  } catch (error) {
    console.error('Failed to fetch data:', error)
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    )
  }
} 