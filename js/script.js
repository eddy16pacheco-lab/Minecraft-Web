// Zoom de galería
document.querySelectorAll('.galeria img').forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed; inset: 0;
      background: rgba(0,0,0,.85);
      display: flex; align-items: center; justify-content: center;
      z-index: 999; cursor: zoom-out;
    `;
    const grande = document.createElement('img');
    grande.src = img.src;
    grande.style.cssText = 'max-width:90%; max-height:90%; border:4px solid #7cff7c; border-radius:10px;';
    overlay.appendChild(grande);
    overlay.addEventListener('click', () => overlay.remove());
    document.body.appendChild(overlay);
  });
});

// Navegación suave
document.querySelectorAll('.menu a').forEach(enlace => {
  enlace.addEventListener('click', e => {
    const href = enlace.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

console.log('✅ Página cargada.');