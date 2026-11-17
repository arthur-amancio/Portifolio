# Arthur Amancio — portfólio

Site estático em português com apresentação pessoal, seis projetos reais, filtros de tecnologia, detalhes em diálogo, formação, experiência e contato pelo LinkedIn/GitHub.

HTML, CSS e JavaScript sem dependências de build. Os arquivos na raiz e na pasta `assets/` compõem o site. Para servir localmente, com Python 3 instalado, execute `python -m http.server 8000` e abra `http://localhost:8000`.

## Conteúdo

CourtTime e UpBox são os destaques visuais. AgendaFácil Pro, FlowStock, Guia do Colaborador UB e Hospital-ERP completam a seleção. Os estágios de desenvolvimento e a autoria em equipe são identificados. Não há formulário de contato, coleta de dados ou integração de contas.

As capturas vieram dos repositórios públicos do proprietário:

- CourtTime: `docs/evidencias/baseline-436b262/aluno-quadra-1440.png`, baseline 436b262.
- UpBox: `docs/evidencias/mysql/dashboard-1366x768.png`.

As imagens são evidências históricas e podem diferir das interfaces atuais. Fontes DM Sans e Manrope são carregadas do Google Fonts, com fallback para fontes do sistema.

## Manutenção

Textos e links principais ficam em `index.html`; detalhes dos projetos ficam em `script.js`; aparência em `style.css`. Ao atualizar funcionalidades, compare os READMEs e a branch principal dos projetos antes de alterar as descrições.

Recursos de acessibilidade: link para pular conteúdo, foco visível, menu com estado expandido, filtros com `aria-pressed`, anúncio de contagem, diálogo nativo e respeito à preferência por movimento reduzido.
