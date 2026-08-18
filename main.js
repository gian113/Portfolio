function stage(id) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(id).classList.add('active');

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => link.classList.remove('current'));
    const activeLink = document.querySelector(`nav a[data-page="${id}"]`);
    if (activeLink) activeLink.classList.add('current');

    const label = document.getElementById('portfolio-label');
    if (id === 'home') {
        label.textContent = "STUDENT PORTFOLIO";
    } else {
        label.textContent = "PORTFOLIO // " + id.toUpperCase();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a[data-page]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            stage(link.dataset.page);
        });
    });
});