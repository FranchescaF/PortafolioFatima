// Seleccionamos todos los enlaces con la clase 'open-in-new-tab'
const links = document.querySelectorAll("#openWindowButton");

// Añadimos un event listener a cada enlace
links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    window.open(this.href, "_blank"); // Abrir el enlace en una nueva pestaña
  });
});

// Validación del formulario
document.querySelector(".form").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  let valid = true;

  // Validación del campo Name
  if (name.value.trim() === "") {
    valid = false;
    alert("Please enter your name.");
  }

  // Validación del campo Email
  if (email.value.trim() === "" || !validateEmail(email.value)) {
    valid = false;
    alert("Please enter a valid email address.");
  }

  // Validación del campo Subject
  if (subject.value.trim() === "") {
    valid = false;
    alert("Please enter a subject.");
  }

  // Validación del campo Message
  if (message.value.trim() === "") {
    valid = false;
    alert("Please enter a message.");
  }

  // Si todo es válido, enviar el formulario
  if (valid) {
    sendFormDataToEmailJS(
      name.value,
      email.value,
      subject.value,
      message.value
    );
  }
});

// Función para validar el formato del email
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

// Inicializa EmailJS con tu public key
emailjs.init("1iz-Lg9v8of12oSjg");

// Función para enviar los datos del formulario usando EmailJS
function sendFormDataToEmailJS(name, email, subject, message) {
  emailjs
    .send(
      "service_t4pakeg", // Tu ID de servicio
      "template_aggq1dn", // Tu ID de plantilla
      {
        user_name: name,
        user_email: email,
        subject: subject,
        message: message,
      }
    )
    .then(
      function (response) {
        alert("Tu mensaje se ha enviado!");
        console.log("SUCCESS!", response);
      },
      function (error) {
        alert("Fallo en enviar mensaje, intentalo de nuevo.");
        console.log("FAILED...", error);
      }
    );
}

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
