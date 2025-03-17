const formOpenBtn = document.querySelector("#form-open"),
      home = document.querySelector(".home"),
      loginForm = document.querySelector(".login_form"),
      signUpForm = document.querySelector(".sign_up_form"),
      signupLink = document.querySelector("#login"),
      redirectSignupBtn = document.querySelector("#redirect_signup"),
      closeButtons = document.querySelectorAll(".close_btn");

// Open the form container and show login form
formOpenBtn.addEventListener("click", () => {
  home.classList.add("show");
  loginForm.style.display = "block";
  signUpForm.style.display = "none";
});

// Redirect from login to sign up form using the new button
redirectSignupBtn.addEventListener("click", () => {
  loginForm.style.display = "none";
  signUpForm.style.display = "block";
});

// Also allow redirection using the text link in the sign-up form
signupLink.addEventListener("click", (e) => {
  e.preventDefault();
  signUpForm.style.display = "none";
  loginForm.style.display = "block";
});

// Close the form container when clicking the close button
closeButtons.forEach(button => {
  button.addEventListener("click", () => {
    home.classList.remove("show");
  });
});

// Toggle password visibility remains unchanged
const pwToggles = document.querySelectorAll(".pw_toggle");
pwToggles.forEach(toggle => {
  toggle.addEventListener("click", () => {
    const inputGroup = toggle.closest(".input_group");
    const passwordInput = inputGroup.querySelector("input[type='password']");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggle.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      passwordInput.type = "password";
      toggle.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});