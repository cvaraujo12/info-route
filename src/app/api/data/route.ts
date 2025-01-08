import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      include: {
        country: true
      }
    })

    const countries = await prisma.country.findMany({
      include: {
        stats: true,
        projectsList: true
      }
    })

    const stats = await prisma.statistics.findFirst({
      where: {
        id: 'main'
      }
    })

    const environmentalData = await prisma.environmentalData.findMany()

    return NextResponse.json({
      projects,
      countries,
      stats,
      environmentalData
    })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
} 