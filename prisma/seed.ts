import { PrismaClient } from '@prisma/client'
import { countries } from '../src/data/countries'
import { projects } from '../src/data/projects'
import { tradeData, investmentData } from '../src/data/statistics'
import { environmentalData } from '../src/data/environmental'

const prisma = new PrismaClient()

async function main() {
  // Limpar dados existentes
  await prisma.$transaction([
    prisma.impact.deleteMany(),
    prisma.timeline.deleteMany(),
    prisma.stats.deleteMany(),
    prisma.project.deleteMany(),
    prisma.country.deleteMany(),
    prisma.tradeData.deleteMany(),
    prisma.investmentData.deleteMany(),
    prisma.environmentalData.deleteMany(),
  ])

  // Inserir países
  for (const country of countries) {
    await prisma.country.create({
      data: {
        id: country.id,
        name: country.name,
        region: country.region,
        projectCount: country.projectCount,
        totalInvestment: country.totalInvestment,
        coordinates: country.coordinates,
        stats: {
          create: {
            gdpImpact: country.stats.gdpImpact,
            jobsCreated: country.stats.jobsCreated,
            tradeVolume: country.stats.tradeVolume
          }
        }
      }
    })
  }

  // Inserir projetos
  for (const project of projects) {
    await prisma.project.create({
      data: {
        id: project.id,
        name: project.name,
        type: project.type,
        status: project.status,
        investment: project.investment,
        startYear: project.startYear,
        completionYear: project.completionYear || project.startYear + 5,
        description: project.description,
        countryId: project.location.country,
        timeline: {
          create: project.timeline.map(t => ({
            year: t.year,
            event: t.event
          }))
        },
        impacts: {
          create: [
            {
              type: 'economic',
              value: typeof project.impacts.economic === 'number' ? project.impacts.economic : 0,
              description: 'Impacto econômico do projeto'
            },
            {
              type: 'social',
              value: typeof project.impacts.social === 'number' ? project.impacts.social : 0,
              description: 'Impacto social do projeto'
            },
            {
              type: 'environmental',
              value: typeof project.impacts.environmental === 'number' ? project.impacts.environmental : 0,
              description: 'Impacto ambiental do projeto'
            }
          ]
        }
      }
    })
  }

  // Inserir dados de comércio
  for (const trade of tradeData) {
    await prisma.tradeData.create({
      data: {
        year: trade.year,
        value: trade.values.total,
        type: trade.type || 'export',
        region: trade.regions.asia
      }
    })
  }

  // Inserir dados de investimento
  for (const investment of investmentData) {
    await prisma.investmentData.create({
      data: {
        year: investment.year,
        value: investment.values.total,
        sector: Object.keys(investment.sectors)[0],
        region: Object.keys(investment.regions)[0]
      }
    })
  }

  // Inserir dados ambientais
  for (const env of environmentalData) {
    await prisma.environmentalData.create({
      data: {
        year: env.year,
        type: 'emissions',
        value: env.emissions.total,
        description: 'Emissões totais de CO2',
        region: env.regions.asia
      }
    })
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 