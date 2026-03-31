document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const sideMenu = document.getElementById("sideMenu");

    if (menuToggle && sideMenu) {
        // ouverture / fermeture du menu
        menuToggle.addEventListener("click", () => {
            sideMenu.classList.toggle("show");
        });

        // refermer le menu quand on clique sur un lien
        sideMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                sideMenu.classList.remove("show");
            });
        });
    }
});

const observerOptions = {

    root: null,

    rootMargin: '0px',

    threshold: 0.15 // Se déclenche quand 15% de l'élément est visible

};
 

const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            // Ajoute une classe 'fade-in-visible' quand l'élément apparaît

            entry.target.classList.add('fade-in-visible');

            observer.unobserve(entry.target); // On arrête d'observer une fois affiché

        }

    });

}, observerOptions);
 

// On sélectionne toutes les boîtes, articles et rubriques à animer

const elementsToAnimate = document.querySelectorAll('.box, .box-competence, .box-centre-interet, .rubrique p');

elementsToAnimate.forEach(el => {

    // On ajoute la classe de base cachée

    el.classList.add('fade-in-hidden');

    observer.observe(el);

});
