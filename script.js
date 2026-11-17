const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  navigation.classList.toggle('is-open', !expanded);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.focus();
  }
});
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  let count = 0;
  document.querySelectorAll('[data-project]').forEach(project => {
    const visible = filter === 'all' || project.dataset.category.split(' ').includes(filter);
    project.hidden = !visible;
    if (visible) count++;
  });
  document.querySelectorAll('[data-filter]').forEach(option => option.setAttribute('aria-pressed', String(option === button)));
  document.querySelector('.featured-grid').hidden = !Array.from(document.querySelectorAll('.project-card')).some(project => !project.hidden);
  document.querySelector('.project-list').hidden = !Array.from(document.querySelectorAll('.project-row')).some(project => !project.hidden);
  document.querySelector('#filter-status').textContent = `${count} ${count === 1 ? 'projeto' : 'projetos'}`;
}));
const projects = {
  courttime: {title:'CourtTime',category:'TCC em equipe / Agendamento institucional',description:'Sistema web desenvolvido em equipe para organizar o uso da quadra da ETEC. O processo passa por aluno, secretaria, administração e segurança, respeitando as regras institucionais de documentação e autorização.',features:['Consulta de horários e solicitação pelo aluno.','Lista de participantes e formulário oficial em PDF.','Conferência documental e registro da contribuição presencial.','Aprovação com revalidação de disponibilidade e controle de acesso.','Testes automatizados com PostgreSQL e integração contínua.'],status:'Projeto acadêmico. A assinatura é conferida pela secretaria; o pagamento permanece presencial. Imagem da baseline documentada 436b262.',repository:'CourtTime'},
  agenda: {title:'AgendaFácil Pro',category:'Em desenvolvimento / Agendamento de serviços',description:'Sistema para pequenos estabelecimentos e profissionais de serviços. O cliente pode agendar pela área pública sem criar uma conta; o estabelecimento administra os atendimentos no painel protegido.',features:['Página pública de agendamento.','Painel administrativo autenticado.','Regras de horários e persistência com PostgreSQL.','Migrations com Flyway e proteção com Spring Security.','Testes automatizados e documentação de implantação.'],status:'Projeto de portfólio em desenvolvimento. Java, Spring Boot, Thymeleaf e PostgreSQL.',repository:'AgendaFacil'},
  flowstock: {title:'FlowStock',category:'MVP em evolução / Gestão multiempresa',description:'Estudo de gestão para pequenos negócios, com API em Spring Boot e interface em React. Reúne estoque, produção e vendas em uma estrutura com separação por empresa.',features:['Cadastro de produtos e clientes.','Movimentações de estoque, produção e vendas.','Autenticação com JWT e Spring Security.','Área administrativa para empresas, planos e auditoria.','Frontend React com TypeScript e banco PostgreSQL.'],status:'MVP de estudo e portfólio, ainda em evolução. Cobrança de assinaturas e integração de pagamentos estão entre as próximas etapas.',repository:'ControleEstoque'},
  guia: {title:'Guia do Colaborador UB',category:'Em revisão interna / Documentação interativa',description:'Tutorial visual para orientar colaboradores da Universidade Brasil no uso do Portal de Suporte. O guia explica o caminho; os chamados continuam sendo registrados no portal oficial.',features:['Tutorial organizado em cinco etapas.','Capturas reais e sanitizadas do portal.','Marcações e legendas para identificar campos e ações.','Navegação por teclado e adaptação para celular.','React, TypeScript, CSS e conteúdo estruturado.'],status:'Em revisão interna. O repositório não confirma publicação ou aprovação institucional da versão atual.',repository:'Guia-Orienta-o-UB'},
  hospital: {title:'Hospital-ERP',category:'Estudo em revisão / Fluxos hospitalares',description:'Aplicação acadêmica para praticar cadastros e operações de um sistema hospitalar com Java e Spring Boot. O foco é aprendizado, com dados fictícios.',features:['Cadastros de pacientes, médicos, funcionários e usuários.','Consultas, agenda e atendimentos.','Internações, leitos e movimentação de medicamentos.','Autenticação e autorização por perfil.','Testes de acesso e documentação das limitações.'],status:'Estudo em revisão. Não preparado para operação hospitalar ou armazenamento de prontuários reais.',repository:'Hospital-ERP'}
};
const dialog = document.querySelector('#project-dialog');
let opener;
document.querySelectorAll('[data-details]').forEach(button => button.addEventListener('click', () => {
  const project = projects[button.dataset.details];
  if (!project) return;
  opener = button;
  document.querySelector('#dialog-title').textContent = project.title;
  document.querySelector('#dialog-category').textContent = project.category;
  document.querySelector('#dialog-description').textContent = project.description;
  const list = document.querySelector('#dialog-features');
  list.replaceChildren(...project.features.map(text => {
    const item = document.createElement('li');
    item.textContent = text;
    return item;
  }));
  document.querySelector('#dialog-status').textContent = project.status;
  document.querySelector('#dialog-repository').href = `https://github.com/arthur-amancio/${project.repository}`;
  dialog.showModal();
}));
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});
dialog.addEventListener('close', () => opener?.focus());
document.querySelector('#year').textContent = new Date().getFullYear();


// Capturas reais em tamanho ampliado, com retorno ao botão de origem.
const imageDialog = document.querySelector('#image-dialog');
let imageOpener;
const screenshots = {
  courttime: { title: 'CourtTime — consulta da quadra', src: 'assets/courttime.png', alt: 'Tela de consulta de horários da quadra no CourtTime', caption: 'Captura da baseline 436b262, documentada no repositório do CourtTime.' }
};
document.querySelectorAll('[data-image]').forEach(button => button.addEventListener('click', () => {
  const screenshot = screenshots[button.dataset.image];
  if (!screenshot) return;
  imageOpener = button;
  document.querySelector('#image-title').textContent = screenshot.title;
  const image = document.querySelector('#image-preview');
  image.src = screenshot.src;
  image.alt = screenshot.alt;
  document.querySelector('#image-caption').textContent = screenshot.caption;
  imageDialog.showModal();
}));
document.querySelector('#close-image').addEventListener('click', () => imageDialog.close());
imageDialog.addEventListener('click', event => {
  const bounds = imageDialog.getBoundingClientRect();
  if (event.target === imageDialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) imageDialog.close();
});
imageDialog.addEventListener('close', () => imageOpener?.focus());
