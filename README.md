# Info Route

Plataforma de informações sobre a Nova Rota da Seda, apresentando dados sobre projetos, investimentos e impactos em diferentes países.

## Tecnologias

- Next.js 14
- TypeScript
- Prisma
- PostgreSQL
- TailwindCSS
- Leaflet
- Recharts

## Pré-requisitos

- Node.js 18+
- PostgreSQL 14+
- npm ou yarn

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/info-route.git
cd info-route
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```
Edite o arquivo `.env` com suas configurações.

4. Configure o banco de dados:
```bash
# Crie o banco de dados
createdb info_route

# Execute as migrações
npm run db:push

# Popule o banco com dados iniciais
npm run db:seed
```

5. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

O site estará disponível em `http://localhost:3000`.

## Deploy

### Vercel

1. Faça fork do repositório
2. Conecte o repositório ao Vercel
3. Configure as variáveis de ambiente no Vercel:
   - `DATABASE_URL`: URL do seu banco de dados PostgreSQL
   - `NEXT_PUBLIC_API_URL`: URL da sua API em produção

### Railway/Heroku (Banco de dados)

1. Crie um novo banco PostgreSQL
2. Copie a URL de conexão
3. Configure a variável `DATABASE_URL` no Vercel com a URL do banco
4. Execute as migrações:
```bash
npm run db:push
```
5. Popule o banco com dados iniciais:
```bash
npm run db:seed
```

## Estrutura do Projeto

```
info-route/
├── prisma/              # Configuração e schema do Prisma
├── public/              # Arquivos estáticos
├── src/
│   ├── app/            # Rotas e API
│   ├── components/     # Componentes React
│   ├── data/          # Dados mockados e tipos
│   ├── lib/           # Utilitários e configurações
│   └── types/         # Definições de tipos TypeScript
├── .env.example        # Exemplo de variáveis de ambiente
├── .gitignore         # Arquivos ignorados pelo Git
└── package.json       # Dependências e scripts
```

## Scripts

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Gera a build de produção
- `npm start`: Inicia o servidor de produção
- `npm run lint`: Executa o linter
- `npm run db:push`: Atualiza o schema do banco de dados
- `npm run db:seed`: Popula o banco com dados iniciais

## Contribuindo

1. Faça fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nome-da-feature`)
3. Faça commit das alterações (`git commit -m 'feat: Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nome-da-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
