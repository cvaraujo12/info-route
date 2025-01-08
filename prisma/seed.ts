import { PrismaClient } from '@prisma/client'
import { countries } from '../src/data/countries'
import { projects } from '../src/data/projects'
import { statistics } from '../src/data/statistics'
import { environmentalData } from '../src/data/environmental'
import type { CountryData, Project, EnvironmentalData } from '../src/types/data'

const prisma = new PrismaClient()

async function main() {
  // Seed countries
  for (const country of countries as CountryData[]) {
    await prisma.country.upsert({
      where: { id: country.id },
      update: {
        name: country.name,
        region: country.region,
        coordinates: country.coordinates,
        projects: country.projects,
        investment: country.investment,
        stats: {
          upsert: {
            create: {
              gdpImpact: country.stats.gdpImpact,
              jobsCreated: country.stats.jobsCreated,
              tradeVolume: country.stats.tradeVolume
            },
            update: {
              gdpImpact: country.stats.gdpImpact,
              jobsCreated: country.stats.jobsCreated,
              tradeVolume: country.stats.tradeVolume
            }
          }
        }
      },
      create: {
        id: country.id,
        name: country.name,
        region: country.region,
        coordinates: country.coordinates,
        projects: country.projects,
        investment: country.investment,
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

  // Seed projects
  for (const project of projects as Project[]) {
    await prisma.project.upsert({
      where: { id: project.id },
      update: {
        name: project.name,
        type: project.type,
        status: project.status,
        value: project.value,
        startDate: project.startDate,
        endDate: project.endDate,
        countryId: project.countryId
      },
      create: {
        id: project.id,
        name: project.name,
        type: project.type,
        status: project.status,
        value: project.value,
        startDate: project.startDate,
        endDate: project.endDate,
        countryId: project.countryId
      }
    })
  }

  // Seed statistics
  await prisma.statistics.upsert({
    where: { id: 'main' },
    update: {
      totalInvestment: statistics.totalInvestment,
      totalProjects: statistics.totalProjects,
      countriesInvolved: statistics.countriesInvolved,
      lastUpdated: statistics.lastUpdated
    },
    create: {
      totalInvestment: statistics.totalInvestment,
      totalProjects: statistics.totalProjects,
      countriesInvolved: statistics.countriesInvolved,
      lastUpdated: statistics.lastUpdated
    }
  })

  // Seed environmental data
  for (const data of environmentalData as EnvironmentalData[]) {
    const id = data.id || crypto.randomUUID()
    await prisma.environmentalData.upsert({
      where: { id },
      update: {
        year: data.year,
        type: data.type,
        value: data.value,
        description: data.description,
        region: data.region
      },
      create: {
        id,
        year: data.year,
        type: data.type,
        value: data.value,
        description: data.description,
        region: data.region
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