document.addEventListener('DOMContentLoaded', function () {
  function showPage(pageId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.remove('active');
    });
    const target = document.getElementById(pageId);
    if (target) {
      target.classList.add('active');
    }
  }

  showPage('home');

  window.showPage = showPage;
});

document.addEventListener('DOMContentLoaded', function () {
  function showPage(pageId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.remove('active');
    });
    const target = document.getElementById(pageId);
    if (target) {
      target.classList.add('active');
    }
  }

  // Show home page by default
  showPage('home');

  // Attach to global scope
  window.showPage = showPage;

  // Add contact links
  const emailButton = document.querySelector('.btn-outline-primary');
  const fbButton = document.querySelector('.btn-outline-dark');
  const igButton = document.querySelector('.btn-outline-danger');

  if (emailButton) emailButton.setAttribute('href', 'mailto:yourname@example.com');
  if (fbButton) fbButton.setAttribute('href', 'https://www.facebook.com/y.eiraa.m?mibextid=ZbWKwL');
  if (igButton) igButton.setAttribute('href', 'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fy.eira_%3Figsh%3DMmd5Zzh3ZnVkN3Q5%26fbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExYldBbnhVZGZwTUM1S1h3OQEe-tUwB8zfYr_loN8Wlcf6EnDL3XYTNxF03uE9zusrbn1nj4FwfZhvrGhRBfY_aem_2e3-aStgg2CHAjV9VArBiQ&h=AT1qlO08d6sCLnNdZxXAgbfUMlZrGoOVR5WyTWYDkl5i809JhMa2vI7rqUsZVenbV4QUjnjgg99PCd1nG4oL3JuYYTMsKPNFqRIfhnD32vQst2djQeGXNTgf45xd_NYYjcrBXA');
});
