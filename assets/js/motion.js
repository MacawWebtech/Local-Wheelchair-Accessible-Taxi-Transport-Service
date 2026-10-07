(() => {
  const root = document.documentElement;
  const header = document.querySelector('body > header');
  const updateHeaderHeight = () => {
    if (header) root.style.setProperty('--sticky-header-height', `${Math.ceil(header.getBoundingClientRect().height)}px`);
  };
  updateHeaderHeight();
  if ('ResizeObserver' in window && header) new ResizeObserver(updateHeaderHeight).observe(header);
  else window.addEventListener('resize', updateHeaderHeight);

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const cards = '.dashboard-section,.dashboard-summary>div,.booking-help-wide>div,.service-card,.trust-grid article,.steps article,.testimonials figure,.h2-day-track article,.h2-equipment figure';
  const candidates = document.querySelectorAll(`main h1,main h2,main p,main img,${cards}`);
  const elements = [...candidates].filter(el => !el.parentElement.closest(cards));
  let observer;
  function configureMotion() {
    if (observer) observer.disconnect();
    elements.forEach(el => el.classList.remove('motion-item', 'is-visible'));
    if (reduced.matches || !('IntersectionObserver' in window)) return;
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        entry.target.addEventListener('animationend', () => entry.target.classList.remove('motion-item', 'is-visible'), {once:true});
        observer.unobserve(entry.target);
      });
    }, {threshold:0.08});
    elements.forEach(el => {el.classList.add('motion-item'); observer.observe(el);});
  }
  configureMotion();
  if (reduced.addEventListener) reduced.addEventListener('change', configureMotion);
})();
