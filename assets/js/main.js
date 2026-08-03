const themeButton = document.getElementById('switch-theme-button');
const body = document.body;
const music = document.getElementById('music');
const signupForm = document.getElementById('signup-form');

function updateTheme() {
  const isDark = body.classList.toggle('dark-theme');
  body.classList.toggle('light-theme', !isDark);
  themeButton.textContent = isDark ? 'Voltar para Mundo Normal' : 'Mudar para Mundo Invertido';
  body.setAttribute('aria-label', isDark ? 'O site está utilizando o tema Mundo Invertido' : 'O site está utilizando o tema Mundo Normal');
  music.querySelector('source').src = isDark ? 'assets/musics/inverted-world.mpeg' : 'assets/musics/normal-world.mpeg';
  music.load();
  music.play().catch(() => {});
}

themeButton.addEventListener('click', updateTheme);

if (signupForm) {
  signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Inscrição enviada com sucesso!');
    signupForm.reset();
  });
}
