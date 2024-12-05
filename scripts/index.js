// Seleccionamos todos los enlaces con la clase 'open-in-new-tab'
const links = document.querySelectorAll("#openWindowButton");

// Añadimos un event listener a cada enlace
links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    window.open(this.href, "_blank"); // Abrir el enlace en una nueva pestaña
  });
});
//-----------------------------------------------
// Validación del formulario
// Inicializa EmailJS con tu public key
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");

  form.addEventListener("submit", function (event) {
    let valid = true;

    // Clear previous error messages
    clearErrorMessages();

    // Validate Name
    if (nameInput.value.trim() === "") {
      valid = false;
      showError(nameInput, "Please enter your name.");
    }

    // Validate Email
    if (emailInput.value.trim() === "" || !validateEmail(emailInput.value)) {
      valid = false;
      showError(emailInput, "Please enter a valid email address.");
    }

    // Validate Subject
    if (subjectInput.value.trim() === "") {
      valid = false;
      showError(subjectInput, "Please enter a subject.");
    }

    // Validate Message
    if (messageInput.value.trim() === "") {
      valid = false;
      showError(messageInput, "Please enter a message.");
    }

    if (!valid) {
      event.preventDefault(); // Prevent form submission if not valid
    }
  });

  function clearErrorMessages() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((message) => {
      message.textContent = "";
    });
  }

  function showError(input, message) {
    const errorElement = input.nextElementSibling;
    errorElement.textContent = message;
  }

  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }
});

//----------------------------------------------------------
document
  .getElementById("moreAboutMeLink")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevenir que el enlace recargue la página

    // Obtener el párrafo con el texto adicional
    const moreText = document.querySelector(".about__more-text");

    // Verificar si el texto está oculto o visible
    if (moreText.classList.contains("hidden")) {
      moreText.classList.remove("hidden"); // Mostrar el texto adicional
      this.textContent = "Less about me"; // Cambiar el texto del enlace
    } else {
      moreText.classList.add("hidden"); // Ocultar el texto adicional
      this.textContent = "More about me"; // Cambiar el texto del enlace de nuevo
    }
  });
