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
