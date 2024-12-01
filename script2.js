
    // Fonction pour masquer les éléments non "Accueil" en fonction de la taille de l'écran
    function handleMediaQueryChange(event) {
        const navItems = document.querySelectorAll("ul li");

        // Vérifie si l'écran correspond à la condition
        if (event.matches) { // Si max-width: 906px
            navItems.forEach((item) => {
                const linkText = item.textContent.trim();
                if (linkText !== "Accueil") {
                    item.style.display = "none";
                }
            });
        } else {
            // Restaure tous les éléments pour les tailles d'écran plus grandes
            navItems.forEach((item) => {
                item.style.display = "list-item";
            });
        }
    }

    // Création d'une MediaQueryList
    const mediaQuery = window.matchMedia("(max-width: 906px)");

    // Ajoute un écouteur pour surveiller les changements de taille d'écran
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Exécute une première vérification à l'initialisation
    handleMediaQueryChange(mediaQuery);
