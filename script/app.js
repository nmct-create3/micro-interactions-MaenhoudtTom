let email = {},
  password = {};

const handleFloatingLabel = function () {
  email.input = document.querySelector(".js-email-input");
  email.label = document.querySelector(".js-email-label");
  password.input = document.querySelector(".js-password-input");
  password.label = document.querySelector(".js-password-label");

  email.input.addEventListener('focusout', function () {
    if (!isEmpty(email.input.value)) {
      email.label.classList.add('is-floating');
    } else {
        email.label.classList.remove('is-floating');
    }
  });

  password.input.addEventListener('focusout', function () {
    if (!isEmpty(password.input.value)) {
      password.label.classList.add('is-floating');
    } else {
      password.label.classList.remove('is-floating');
    }
  });
};

const isEmpty = function (fieldValue) {
  return !fieldValue || !fieldValue.length;
};

const handlePasswordSwitcher = function () {
  const passwordInput = document.querySelector(".js-password-input");
  const passwordToggle = document.querySelector(".js-password-toggle");

  const passwordOptions = ["password", "text"];

  if (!passwordInput || !passwordToggle) {
    console.error("De classes werden niet gevonden.");
    return;
  }

  passwordToggle.addEventListener("change", function () {
    if (passwordInput.type == "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }

    // passwordInput.type
  });
};

document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded!");
  handleFloatingLabel();
  handlePasswordSwitcher();
});
