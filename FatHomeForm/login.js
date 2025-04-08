document.addEventListener("DOMContentLoaded", () => {
    // State management
    const state = {
      email: "",
      password: "",
      isLoading: false,
      errorMessage: "",
  
      // Validate email format
      validateEmail(email) {
        return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
      },
  
      // Handle form submission
      async handleSubmit(event) {
        event.preventDefault();
  
        // Validate form fields
        if (!state.email || !state.password) {
          state.errorMessage = "Please fill in all fields";
          updateUI();
          return;
        }
  
        if (!state.validateEmail(state.email)) {
          state.errorMessage = "Please enter a valid email";
          updateUI();
          return;
        }
  
        try {
          // Set loading state
          state.isLoading = true;
          state.errorMessage = "";
          updateUI();
  
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000));
          // next page
          window.location.href = "./regis.html";
        } catch (error) {
          state.errorMessage = "Login failed. Please try again.";
          updateUI();
        } finally {
          state.isLoading = false;
          updateUI();
        }
      },
    };
  
    // DOM elements
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const errorMessageElement = document.getElementById("errorMessage");
    const submitButton = document.getElementById("submitButton");
    const loadingText = document.getElementById("loadingText");
    const buttonText = document.getElementById("buttonText");
  
    // Event listeners
    loginForm.addEventListener("submit", (event) => state.handleSubmit(event));
  
    emailInput.addEventListener("input", (event) => {
      state.email = event.target.value;
      updateUI();
    });
  
    passwordInput.addEventListener("input", (event) => {
      state.password = event.target.value;
      updateUI();
    });
  
    // Update UI based on state
    function updateUI() {
      // Update error message
      if (state.errorMessage) {
        errorMessageElement.textContent = state.errorMessage;
        errorMessageElement.hidden = false;
      } else {
        errorMessageElement.hidden = true;
      }
  
      // Update button state
      submitButton.disabled = state.isLoading;
  
      // Update button text
      loadingText.hidden = !state.isLoading;
      buttonText.hidden = state.isLoading;
    }
  
    // Initialize UI
    updateUI();
  });
  