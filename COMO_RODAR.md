# Como Rodar o Projeto Amaé

Este guia explica como executar o projeto localmente e fazer o deploy no GitHub Pages.

## 📋 Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **npm** (geralmente vem com Node.js)
- **Git** (para fazer deploy)

## 🚀 Instalação e Execução Local

### 1. Instalar Dependências

Abra o PowerShell na pasta do projeto (`Amae`) e execute:

```powershell
npm install
```

Este comando irá instalar todas as dependências necessárias listadas no `package.json`.

### 2. Executar o Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento com hot-reload:

```powershell
npm run dev
```

O servidor será iniciado em `http://localhost:8080` (conforme configurado no `vite.config.ts`).

Você verá algo como:
```
  VITE v7.2.4  ready in XXX ms

  ➜  Local:   http://localhost:8080/
  ➜  Network: http://[::]:8080/
```

### 3. Build para Produção

Para criar uma versão otimizada para produção:

```powershell
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

### 4. Preview da Build de Produção

Para testar a build de produção localmente:

```powershell
npm run preview
```

## 📦 Deploy no GitHub Pages

### ✅ Deploy Automático (Recomendado)

O projeto está configurado com **GitHub Actions** para fazer deploy automático:

1. **Faça commit e push na branch `main`:**
```powershell
git add .
git commit -m "Sua mensagem"
git push origin main
```

2. **O GitHub Actions fará o deploy automaticamente!**
   - Detecta o push na branch `main`
   - Faz o build do projeto
   - Faz deploy para GitHub Pages
   - Site fica disponível em alguns minutos

3. **Configure o GitHub Pages:**
   - Vá em **Settings** > **Pages**
   - Em **Source**, selecione **GitHub Actions** (não "Deploy from a branch")
   - Salve as alterações

### ⚠️ Deploy Manual (Método Antigo - Não Recomendado)

1. **Faça o build:**

```powershell
npm run build
```

2. **Instale o gh-pages globalmente (opcional):**

```powershell
npm install -g gh-pages
```

3. **Publique manualmente:**

```powershell
npx gh-pages -d dist
```

### Configuração do GitHub Pages

1. Acesse o repositório no GitHub
2. Vá em **Settings** > **Pages**
3. Em **Source**, selecione a branch `gh-pages` e a pasta `/ (root)`
4. Salve as alterações

O site estará disponível em: `https://[seu-usuario].github.io/[nome-do-repositorio]/`

### ✅ Como Funciona no GitHub Pages

O projeto está configurado para funcionar corretamente no GitHub Pages com React Router:

- **Arquivo 404.html**: Quando alguém acessa uma rota diretamente (ex: `/pecas`), o GitHub Pages redireciona para `404.html`, que então redireciona para `index.html` com a rota correta
- **Script no index.html**: Processa o redirecionamento e restaura a URL correta para o React Router
- **Todas as rotas funcionam**: Você pode acessar qualquer página diretamente pelo URL, compartilhar links, e usar o botão "voltar" do navegador normalmente

**Exemplos de URLs que funcionarão:**
- `https://usuario.github.io/repositorio/` (página inicial)
- `https://usuario.github.io/repositorio/pecas` (página de peças)
- `https://usuario.github.io/repositorio/peca/vestido-sol-poente` (detalhe da peça)
- `https://usuario.github.io/repositorio/sobre` (página sobre)
- Todas as outras rotas configuradas

### ⚠️ Importante: Configurar Base Path (se necessário)

O Vite agora detecta automaticamente o nome do repositório quando o build roda dentro do GitHub Actions (variável `GITHUB_REPOSITORY`) e ajusta o `base` para `/<nome-do-repo>/`. Ou seja, na maioria dos casos você **não precisa mais** mexer em nada para que os assets sejam servidos corretamente no GitHub Pages.

Cenários em que ainda é preciso forçar um base path manualmente (por exemplo, build local para publicar via `gh-pages` ou uso de um subdiretório personalizado):

1. Crie um arquivo `.env.production` na raiz do projeto:

```env
VITE_BASE_PATH=/seu-caminho-personalizado/
```

2. Faça o build novamente:

```powershell
npm run build
npm run deploy
```

## 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run build:dev` - Cria a build em modo desenvolvimento
- `npm run preview` - Preview da build de produção
- `npm run lint` - Executa o linter ESLint
- `npm run deploy` - Faz o build e publica no GitHub Pages

## 🐛 Solução de Problemas

### Erro: "npm error canceled"

Se você receber este erro ao tentar usar `npx gh-pages`, tente:

1. Instalar o gh-pages localmente:
```powershell
npm install --save-dev gh-pages
```

2. Depois execute:
```powershell
npm run deploy
```

### Erro: "Cannot find module"

Execute novamente:
```powershell
npm install
```

### Porta 8080 já está em uso

Edite o arquivo `vite.config.ts` e altere a porta:

```typescript
server: {
  host: "::",
  port: 3000, // ou outra porta disponível
},
```

## 📝 Estrutura do Projeto

```
Amae/
├── src/
│   ├── components/     # Componentes React
│   ├── pages/         # Páginas da aplicação
│   ├── data/          # Dados estáticos (coleções, processos)
│   ├── assets/        # Imagens e recursos
│   ├── hooks/         # Custom hooks
│   ├── lib/           # Utilitários
│   └── types/         # Definições TypeScript
├── dist/              # Build de produção (gerado)
├── public/            # Arquivos públicos
└── package.json       # Dependências e scripts
```

## 🎨 Tecnologias Utilizadas

- **Vite** - Build tool e dev server
- **React** - Framework JavaScript
- **TypeScript** - Tipagem estática
- **React Router** - Roteamento
- **Framer Motion** - Animações
- **Tailwind CSS** - Estilização
- **shadcn/ui** - Componentes UI

## 📞 Suporte

Se encontrar problemas, verifique:
1. Versão do Node.js (`node --version` - deve ser 18+)
2. Se todas as dependências foram instaladas
3. Se o repositório Git está configurado corretamente
4. Logs de erro no console do PowerShell

