document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const sideMenu = document.getElementById("sideMenu");
    const menuClose = document.getElementById("menuClose");

    // Ouvrir le menu
    menuToggle.addEventListener("click", function () {
        sideMenu.classList.add("open");
    });

    // Fermer le menu
    menuClose.addEventListener("click", function () {
        sideMenu.classList.remove("open");
    });

    // Fermer le menu si on clique en dehors
    document.addEventListener("click", function (event) {
        if (!sideMenu.contains(event.target) && event.target !== menuToggle) {
            sideMenu.classList.remove("open");
        }
    });
});

// Logique pour gérer l'ouverture et la fermeture de la modale
const projects = document.querySelectorAll('.project');
const modal = document.getElementById('projectModal');
const modalOverlay = document.querySelector('.modal-overlay');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalClose = document.querySelector('.modal-close');

projects.forEach(project => {
    project.addEventListener('click', () => {
        modalTitle.textContent = project.dataset.title;
        modalDescription.textContent = project.dataset.description;
        modal.style.display = 'block';
        modalOverlay.style.display = 'block';
    });
});

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
    modalOverlay.style.display = 'none';
});

modalOverlay.addEventListener('click', () => {
    modal.style.display = 'none';
    modalOverlay.style.display = 'none';
});
