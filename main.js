function stage(id) {
    const pages = document.querySelector('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(id).classList.add('active')

    const label = document.getElementById('portfolio-label');
    if (pageId === 'home') {
        label.textContent = "STUDENT PORTFOLIO";
    } else {
        label.textContent = "PORTFOLIO // " + pageId.toUpperCase();
    }
}