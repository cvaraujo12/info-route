# Info Route

Plataforma de informações sobre a Nova Rota da Seda (Belt and Road Initiative), fornecendo dados atualizados sobre projetos, investimentos e impactos desta iniciativa global.

## Tecnologias

- Next.js 14
- TypeScript
- TailwindCSS
- Shadcn UI
- React Leaflet
- Recharts

## Funcionalidades

- 🗺️ Mapa interativo com projetos e rotas
- 📊 Visualização de dados e estatísticas
- 📱 Design responsivo
- 🌐 Informações em tempo real
- 📈 Gráficos e análises

## Pré-requisitos

- Node.js 18+ 
- npm ou yarn

## Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/info-route.git

# Entre no diretório
cd info-route

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## Estrutura do Projeto

```
info-route/
├── src/
│   ├── app/            # Páginas e layouts
│   ├── components/     # Componentes React
│   ├── contexts/       # Contextos React
│   ├── hooks/          # Hooks personalizados
│   ├── types/          # Tipos TypeScript
│   ├── utils/          # Funções utilitárias
│   └── data/          # Dados mockados
├── public/            # Arquivos estáticos
└── ...
```

## Deploy

O projeto está configurado para deploy automático na Vercel. Cada push na branch `main` aciona um novo deploy.

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
