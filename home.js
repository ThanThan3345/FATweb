function redirectToLogin() {
    window.location.href = "./FatLoginForm/login.html";
  }
  

  function redirectToRegister() {
    window.location.href = "./FatRegisForm/regis.html";
  }
  
  
  document.addEventListener("DOMContentLoaded", function () {
    
    const loginButton = document.querySelector(".login-button");
    const registerButton = document.querySelector(".register-button");
    const ctaButton = document.querySelector(".cta-button");
  
    //add click event 
    if (loginButton) {
      loginButton.addEventListener("click", redirectToLogin);
    }
  
    if (registerButton) {
      registerButton.addEventListener("click", redirectToRegister);
    }
  
    if (ctaButton) {
      ctaButton.addEventListener("click", redirectToLogin);
    }
  });
  