const navOptions = document.querySelectorAll(".nav__options");

navOptions.forEach((option) => {
  option.addEventListener("click", () => {
    // Elimina la clase 'active' de todos los enlaces
    navOptions.forEach((nav) => nav.classList.remove("active"));
    // Añade la clase 'active' al enlace seleccionado
    option.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".registration-form__form");
  const inputs = document.querySelectorAll(
    ".registration-form__input, .registration-form__select"
  );
  const emailInput = document.querySelector(
    ".registration-form__input[type='email']"
  );
  const dniInput = document.querySelector(
    ".registration-form__input[placeholder='DNI']"
  );
  const celularInput = document.querySelector(
    ".registration-form__input[placeholder='Celular']"
  );

  form.addEventListener("submit", function (event) {
    let isValid = true;

    // Validar que todos los campos estén llenos
    inputs.forEach((input) => {
      if (!input.value.trim()) {
        isValid = false;
        input.style.border = "2px solid red"; // Resaltar el campo vacío
      } else {
        input.style.border = "1px solid #ddd"; // Restaurar el borde si está lleno
      }
    });

    // Validar formato de correo electrónico
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      isValid = false;
      emailInput.style.border = "2px solid red"; // Resaltar si el correo es inválido
      alert("Por favor, introduce un correo electrónico válido.");
    }

    // Validar que DNI solo contenga números
    if (!/^\d+$/.test(dniInput.value.trim())) {
      isValid = false;
      dniInput.style.border = "2px solid red"; // Resaltar si contiene caracteres no numéricos
      alert("El DNI solo debe contener números.");
    }

    // Validar que Celular solo contenga números
    if (!/^\d+$/.test(celularInput.value.trim())) {
      isValid = false;
      celularInput.style.border = "2px solid red"; // Resaltar si contiene caracteres no numéricos
      alert("El número de celular solo debe contener números.");
    }

    if (!isValid) {
      event.preventDefault(); // Evitar que el formulario se envíe si no es válido
    }
  });

  // Prevenir que se escriban letras en los campos de DNI y Celular
  dniInput.addEventListener("keypress", function (event) {
    if (!/^\d$/.test(event.key)) {
      event.preventDefault(); // Evita la inserción de caracteres no numéricos
    }
  });

  celularInput.addEventListener("keypress", function (event) {
    if (!/^\d$/.test(event.key)) {
      event.preventDefault(); // Evita la inserción de caracteres no numéricos
    }
  });
});
