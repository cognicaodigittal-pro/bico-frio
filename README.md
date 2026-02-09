# Landing Page - Bico Frio Ar Condicionado

Landing page otimizada para conversão de serviços de ar-condicionado em Goiânia-GO.
Foco total em direcionar o cliente para o WhatsApp.

## Estrutura
- `index.html`: Conteúdo e estrutura semântica.
- `styles.css`: Estilos e responsividade (Mobile-first).
- `script.js`: Lógica para capturar dados do formulário e abrir WhatsApp.

## Como Executar Localmente

1. Abra a pasta do projeto no VS Code.
2. Instale uma extensão como "Live Server" ou use Python:
   ```bash
   python -m http.server
   ```
3. Acesse `http://localhost:8000` no navegador.

## Como Fazer Deploy

### Opção 1: Netlify (Recomendado/Rápido)
1. Crie uma conta no [Netlify](https://www.netlify.com).
2. Arraste a pasta `landing-ar-goiania` para a área de deploy.
3. O site estará no ar em segundos.

### Opção 2: GitHub Pages
1. Crie um repositório no GitHub.
2. Suba os arquivos.
3. Vá em Settings > Pages e selecione a branch `main` como source.

## Personalização
- Para alterar o número do WhatsApp, edite a variável `phoneNumber` no arquivo `script.js` e os links `href` no `index.html`.
