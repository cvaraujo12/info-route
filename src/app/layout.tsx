import { NavigationMenu } from "@/components/navigation/NavigationMenu"
import { DataProvider } from "@/contexts/DataContext"
import "./globals.css"
import "leaflet/dist/leaflet.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Info Route - Nova Rota da Seda',
  description: 'Plataforma de informações sobre a Nova Rota da Seda (Belt and Road Initiative)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <DataProvider>
          <NavigationMenu />
          <main>{children}</main>
        </DataProvider>
      </body>
    </html>
  )
} 