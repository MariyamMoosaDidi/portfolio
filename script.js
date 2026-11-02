document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const successMessage = form.querySelector(".form-success");
      if (successMessage) {
        successMessage.classList.add("show");
      }

      form.reset();
    });
  });
});// JavaScript Document