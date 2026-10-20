document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const message = document.getElementById("message");
    const characterCount = document.getElementById("character-count");
    const status = document.getElementById("form-status");
    const year = document.getElementById("current-year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    if (message && characterCount) {
        const updateCounter = () => {
            characterCount.textContent =
                `${message.value.length} / 3000 caractères`;
        };

        message.addEventListener("input", updateCounter);
        updateCounter();
    }

    if (!form || !status) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const nom = document.getElementById("nom").value.trim();
        const email = document.getElementById("email").value.trim();
        const sujet = document.getElementById("sujet").value;
        const contenu = message.value.trim();

        if (!nom || !email || !sujet || !contenu) {
            status.textContent =
                "Veuillez remplir tous les champs obligatoires.";
            status.className = "form-status error";
            return;
        }

        const adresseCETASSO = "adoumoumarmoussa47@gmail.com";

        if (adresseCETASSO != "adoumoumarmoussa47@gmail.com") {
            status.textContent =
                "L'adresse e-mail du CETASSO doit encore être configurée.";
            status.className = "form-status error";
            return;
        }

        const objet = `[CETASSO] ${sujet}`;

        const corps =
            `Nom : ${nom}\n` +
            `E-mail : ${email}\n\n` +
            `Message :\n${contenu}`;

        const lienMail =
            `mailto:${adresseCETASSO}` +
            `?subject=${encodeURIComponent(objet)}` +
            `&body=${encodeURIComponent(corps)}`;

        status.textContent =
            "Ouverture de votre application de messagerie...";
        status.className = "form-status success";

        window.location.href = lienMail;
    });
});
