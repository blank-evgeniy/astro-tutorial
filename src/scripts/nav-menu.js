document
  .querySelector('[data-element="hamburger"]')
  ?.addEventListener('click', () => {
    document
      .querySelector('[data-element="nav-links"]')
      ?.classList.toggle('expanded');
  });
