document.addEventListener("DOMContentLoaded", () => {
    // State management
    const state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      isLoading: false,
      errorMessage: "",
  
      // Validation functions
      validateName(name) {
        return name.length >= 2;
      },
  
      validateEmail(email) {
        return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
      },
  
      validatePassword(password) {
        return password.length >= 8;
      },
  
      validateConfirmPassword() {
        return state.password === state.confirmPassword;
      },
    };
  
    // DOM elements
    const form = document.getElementById("registrationForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const errorMessageElement = document.getElementById("errorMessage");
    const submitButton = document.getElementById("submitButton");
    const loadingText = document.getElementById("loadingText");
    const buttonText = document.getElementById("buttonText");
  
    // Event listeners
    nameInput.addEventListener("input", (e) => {
      state.name = e.target.value;
    });
  
    emailInput.addEventListener("input", (e) => {
      state.email = e.target.value;
    });
  
    passwordInput.addEventListener("input", (e) => {
      state.password = e.target.value;
    });
  
    confirmPasswordInput.addEventListener("input", (e) => {
      state.confirmPassword = e.target.value;
    });
  
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
  
      // Validate all fields
      if (
        !state.name ||
        !state.email ||
        !state.password ||
        !state.confirmPassword
      ) {
        showError("Please fill in all required fields");
        return;
      }
  
      if (!state.validateName(state.name)) {
        showError("Name must be at least 2 characters");
        return;
      }
  
      if (!state.validateEmail(state.email)) {
        showError("Please enter a valid email");
        return;
      }
  
      if (!state.validatePassword(state.password)) {
        showError("Password must be at least 8 characters");
        return;
      }
  
      if (!state.validateConfirmPassword()) {
        showError("Passwords do not match");
        return;
      }
  
      try {
        // Set loading state
        setLoading(true);
        clearError();
  
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
  
        // Success - in a real app, you would redirect or show success message
        alert("Account created successfully!");
        form.reset();
      } catch (error) {
        showError("Registration failed. Please try again.");
      } finally {
        setLoading(false);
      }
    });
  
    // Helper functions
    function showError(message) {
      state.errorMessage = message;
      errorMessageElement.textContent = message;
      errorMessageElement.hidden = false;
    }
  
    function clearError() {
      state.errorMessage = "";
      errorMessageElement.textContent = "";
      errorMessageElement.hidden = true;
    }
  
    function setLoading(isLoading) {
      state.isLoading = isLoading;
      submitButton.disabled = isLoading;
      loadingText.hidden = !isLoading;
      buttonText.hidden = isLoading;
    }
  });
  