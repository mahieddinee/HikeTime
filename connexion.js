// Sélectionner le formulaire et les éléments d'entrée
const form = document.querySelector(".form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Fonction pour afficher les messages d'erreur
const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
}

// Fonction pour gérer la soumission du formulaire
const handleFormData = (e) => {
    e.preventDefault();

    // Obtenir les valeurs des champs
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Supprimer les messages d'erreur précédents
    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

    // Effectuer des vérifications de validation
    if (email === "") {
        showError(emailInput, "Entrez votre adresse e-mail");
    }
    if (password === "") {
        showError(passwordInput, "Entrez votre mot de passe");
    }

    // Vérifier s'il reste des erreurs avant de soumettre le formulaire
    const errorInputs = document.querySelectorAll(".form-group .error");
    if (errorInputs.length > 0) return;

    // Soumettre le formulaire si tout est valide
    form.submit();
}

// Gérer l'événement de soumission du formulaire
form.addEventListener("submit", handleFormData);
