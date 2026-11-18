# Arthur Amancio — portfólio

[Visitar portfólio](https://arthur-amancio-portfolio.onrender.com/) · [Currículo em PDF](https://arthur-amancio-portfolio.onrender.com/assets/Arthur-Amancio-Curriculo.pdf)

Site estático em português com cinco projetos, formação, experiência e contato. A apresentação começa com Court Time e AgendaFácil Pro. Os detalhes de cada projeto têm links diretos, como `#detalhes-agenda`. O estudo de caso do TCC abre em `#estudo-courttime`.

## Rodar localmente

Execute `python3 -m http.server 8000` na raiz e abra `http://localhost:8000`.

- `index.html` contém o conteúdo, os links, os detalhes expansíveis e os metadados de compartilhamento.
- `style.css` contém o layout responsivo, o foco visível e as animações. O movimento acompanha a preferência do sistema.
- `script.js` controla menu, filtros, links para detalhes, ampliação de imagens e entradas animadas. O conteúdo principal e as seções expansíveis usam HTML nativo.
- `assets/` contém as imagens, o currículo web e o PDF.

As capturas do Court Time são da versão documentada `436b262`, em `docs/evidencias/baseline-436b262/` do repositório do TCC. O cartão do AgendaFácil usa um fluxo ilustrativo.

## Publicação no Render

- Repositório `arthur-amancio/Portifolio`, branch `main`, como Static Site.
- Comando de build `mkdir -p public && cp index.html style.css script.js public/ && cp -R assets public/assets`.
- O diretório publicado é `public`. Atualizações em `main` iniciam a publicação automaticamente.
