function toggleTheme() {
  document.body.classList.toggle('dark');
}

function copyEmail() {
  const email = document.getElementById('email').textContent.trim();
  navigator.clipboard.writeText(email)
    .then(() => alert('E-mail copiado: ' + email))
    .catch(() => alert('Não foi possível copiar. Copie manualmente.'));
}
