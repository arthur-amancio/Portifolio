document.documentElement.classList.add('js');
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
  document.querySelector('.case-study').hidden = document.querySelector('[data-project="courttime"]').hidden;
  document.querySelector('#filter-status').textContent = `${count} ${count === 1 ? 'projeto' : 'projetos'}`;
}));
document.querySelector('#year').textContent = new Date().getFullYear();


// Capturas reais em tamanho ampliado, com retorno ao botão de origem.
const imageDialog = document.querySelector('#image-dialog');
let imageOpener;
const screenshots = {
  courttime: { title: 'Court Time — consulta da quadra', src: 'assets/courttime.png', alt: 'Tela de consulta de horários da quadra no Court Time', caption: 'Captura da baseline 436b262, documentada no repositório do Court Time.' },
  'court-mobile': { title: 'Court Time — interface no celular', src: 'assets/courttime-mobile.png', alt: 'Consulta da quadra em tela de 390 pixels', caption: 'Captura da baseline 436b262. A interface atual pode apresentar diferenças.' }
};
document.querySelectorAll('[data-image]').forEach(button => button.addEventListener('click', event => {
  if (!imageDialog.showModal || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
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



// Shared fragments reveal native details and reset a filter hiding the target.
function revealFragment() {
  const id = location.hash.slice(1);
  const target = document.getElementById(id);
  if (!target) return;
  if (target.matches('details')) target.open = true;
  const project = target.closest('[data-project]');
  if ((project && project.hidden) || target.hidden) {
    document.querySelector('[data-filter="all"]').click();
    target.scrollIntoView();
  }
}
window.addEventListener('hashchange', revealFragment);
revealFragment();

// A repeated click on the same fragment can reopen a closed native detail.
document.querySelectorAll('a[href^="#detalhes-"], a[href="#estudo-courttime"]').forEach(link => {
  link.addEventListener('click', () => {
    const target = document.getElementById(link.hash.slice(1));
    if (target) target.open = true;
  });
});

if ('IntersectionObserver' in window && matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('entered');
      observer.unobserve(entry.target);
    }
  }, { threshold: .15 });
  document.querySelectorAll('.project-card, .about-grid, .toolbox-grid').forEach(element => observer.observe(element));
}
