const cards = [...document.querySelectorAll('.course-card')];
const buttons = [...document.querySelectorAll('[data-filter]')];
const search = document.querySelector('#course-search');
const emptyState = document.querySelector('#empty-state');
let activeFilter = 'all';

function updateCatalog() {
  const query = search.value.trim().toLowerCase();
  let visible = 0;
  for (const card of cards) {
    const semesterMatch = activeFilter === 'all' || card.dataset.semester === activeFilter;
    const searchMatch = !query || card.dataset.search.includes(query);
    card.hidden = !(semesterMatch && searchMatch);
    if (!card.hidden) visible += 1;
  }
  emptyState.hidden = visible !== 0;
}

for (const button of buttons) {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    for (const item of buttons) item.classList.toggle('active', item === button);
    updateCatalog();
  });
}

search.addEventListener('input', updateCatalog);
