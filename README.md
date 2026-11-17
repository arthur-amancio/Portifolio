# Arthur Amancio — portfólio

**[Acessar o portfólio público](https://arthur-amancio-portfolio.onrender.com/)** — abre sem login.

Site estático em português com apresentação pessoal, cinco projetos reais, filtros de tecnologia, detalhes em diálogo, formação, experiência e contato pelo LinkedIn/GitHub.

HTML, CSS e JavaScript sem dependências de build. Os arquivos na raiz e na pasta `assets/` compõem o site. Para servir localmente, com Python 3 instalado, execute `python -m http.server 8000` e abra `http://localhost:8000`.

## Conteúdo

CourtTime é o destaque visual. AgendaFácil Pro, FlowStock, Guia do Colaborador UB e Hospital-ERP completam a seleção. Os estágios de desenvolvimento e a autoria em equipe são identificados. Não há formulário de contato, coleta de dados ou integração de contas.

As capturas vieram dos repositórios públicos do proprietário:

- CourtTime: `docs/evidencias/baseline-436b262/aluno-quadra-1440.png`, baseline 436b262.

As imagens são evidências históricas e podem diferir das interfaces atuais. Fontes DM Sans e Manrope são carregadas do Google Fonts, com fallback para fontes do sistema.

## Manutenção

Textos e links principais ficam em `index.html`; detalhes dos projetos ficam em `script.js`; aparência em `style.css`. Ao atualizar funcionalidades, compare os READMEs e a branch principal dos projetos antes de alterar as descrições.

Recursos de acessibilidade: link para pular conteúdo, foco visível, menu com estado expandido, filtros com `aria-pressed`, anúncio de contagem, diálogos nativos para detalhes e ampliação das capturas, botões com alvos de toque maiores e respeito à preferência por movimento reduzido.

## Publicação no Render

- Repositório: `arthur-amancio/Portifolio`, branch `main`.
- Tipo: Static Site.
- Comando de build: `mkdir -p public && cp index.html style.css script.js public/ && cp -R assets public/assets`.
- Diretório publicado: `public`.
- Atualização automática habilitada para a branch principal.

O build publica somente HTML, CSS, JavaScript e assets. O site não depende de login do visitante.
