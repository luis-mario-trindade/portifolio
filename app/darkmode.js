const btnescuro = document.getElementById('btnDark');

btnescuro.addEventListener('click', () => {
    document.body.classList.toggle('modo-escuro')


  if (document.body.classList.contains('modo-escuro')) {
    btnescuro.textContent = '☀️';
  } else {
    btnescuro.textContent = '🌙';
  }
});