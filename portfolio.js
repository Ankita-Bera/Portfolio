document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('nav-toggle');
  const navmenu = document.getElementById('nav-menu');

  if (toggleButton && navmenu) {
    toggleButton.addEventListener('click', () => {
      navmenu.classList.toggle('active');
    });
  }
});

  const form = document.getElementById('contactForm');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch('http://localhost:3000/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    alert(result.message);
    if (response.ok) form.reset();
  });
