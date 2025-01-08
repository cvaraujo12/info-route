"use client"

import * as React from "react"
import Link from "next/link"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cn } from "@/lib/utils"

const NavigationMenu = () => {
  return (
    <NavigationMenuPrimitive.Root className="relative z-10 flex w-full items-center justify-center bg-slate-900 p-4">
      <NavigationMenuPrimitive.List className="group flex flex-1 list-none items-center justify-center space-x-4">
        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Trigger className="text-white hover:text-gray-300">
            Rota Terrestre
          </NavigationMenuPrimitive.Trigger>
          <NavigationMenuPrimitive.Content className="absolute top-full">
            <div className="w-[400px] p-4 bg-white shadow-lg rounded-md">
              <ul>
                <li><Link href="/database/land">Entendendo a Base de Dados</Link></li>
                <li><Link href="/database/land/estimates">Estimativas</Link></li>
                <li><Link href="/database/land/essays">Artigos</Link></li>
                <li><Link href="/database/land/downloads">Downloads</Link></li>
                <li><Link href="/database/land/maps">Mapas Introdutórios</Link></li>
              </ul>
            </div>
          </NavigationMenuPrimitive.Content>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Trigger className="text-white hover:text-gray-300">
            Rota Marítima
          </NavigationMenuPrimitive.Trigger>
          <NavigationMenuPrimitive.Content className="absolute top-full">
            <div className="w-[400px] p-4 bg-white shadow-lg rounded-md">
              <ul>
                <li><Link href="/database/maritime">Entendendo a Base de Dados</Link></li>
                <li><Link href="/database/maritime/database">Base de Dados</Link></li>
                <li><Link href="/database/maritime/essays">Artigos</Link></li>
                <li><Link href="/database/maritime/downloads">Downloads</Link></li>
              </ul>
            </div>
          </NavigationMenuPrimitive.Content>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Trigger className="text-white hover:text-gray-300">
            Projetos e Investimentos
          </NavigationMenuPrimitive.Trigger>
          <NavigationMenuPrimitive.Content className="absolute top-full">
            <div className="w-[400px] p-4 bg-white shadow-lg rounded-md">
              <ul>
                <li><Link href="/projects/overview">Visão Geral</Link></li>
                <li><Link href="/projects/database">Base de Dados</Link></li>
                <li><Link href="/projects/countries">Países Participantes</Link></li>
                <li><Link href="/projects/investments">Investimentos</Link></li>
              </ul>
            </div>
          </NavigationMenuPrimitive.Content>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Trigger className="text-white hover:text-gray-300">
            Recursos
          </NavigationMenuPrimitive.Trigger>
          <NavigationMenuPrimitive.Content className="absolute top-full">
            <div className="w-[400px] p-4 bg-white shadow-lg rounded-md">
              <ul>
                <li><Link href="/resources/gallery">Galeria de Imagens</Link></li>
                <li><Link href="/resources/lessons">Material Educativo</Link></li>
                <li><Link href="/resources/links">Links Externos</Link></li>
              </ul>
            </div>
          </NavigationMenuPrimitive.Content>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item>
          <Link href="/about" className="text-white hover:text-gray-300">
            Sobre
          </Link>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item>
          <Link href="/blog" className="text-white hover:text-gray-300">
            Blog
          </Link>
        </NavigationMenuPrimitive.Item>
      </NavigationMenuPrimitive.List>
    </NavigationMenuPrimitive.Root>
  )
}

export { NavigationMenu } 