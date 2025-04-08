document.addEventListener("DOMContentLoaded", function () {
    // State management
    const state = {
      accountName: "",
      fullName: "",
      gender: "",
      dateOfBirth: "",
      cityOfResidence: "",
      emails: [""],
  
      // Methods to update state
      addEmail() {
        this.emails.push("");
        this.renderEmails();
      },
  
      updateEmail(index, value) {
        this.emails[index] = value;
      },
  
      removeEmail(index) {
        if (this.emails.length > 1) {
          this.emails.splice(index, 1);
          this.renderEmails();
        }
      },
  
      updateInfo() {
        console.log("Updating information...");
        console.log({
          accountName: this.accountName,
          fullName: this.fullName,
          gender: this.gender,
          dateOfBirth: this.dateOfBirth,
          cityOfResidence: this.cityOfResidence,
          emails: this.emails,
        });
        // Here you would typically send this data to a server
        alert("Account information updated successfully!");
      },
  
      // Render email inputs
      renderEmails() {
        const emailContainer = document.getElementById("email-container");
        emailContainer.innerHTML = "";
  
        this.emails.forEach((email, index) => {
          const emailGroup = document.createElement("div");
          emailGroup.className = "email-group";
  
          const emailInput = document.createElement("input");
          emailInput.type = "email";
          emailInput.className = "email-input";
          emailInput.value = email;
          emailInput.setAttribute("aria-label", `Email address ${index + 1}`);
          emailInput.addEventListener("input", (e) => {
            this.updateEmail(index, e.target.value);
          });
  
          const removeButton = document.createElement("button");
          removeButton.className = "remove-button";
          removeButton.textContent = "Remove";
          removeButton.setAttribute("aria-label", `Remove email ${index + 1}`);
          removeButton.addEventListener("click", () => {
            this.removeEmail(index);
          });
  
          emailGroup.appendChild(emailInput);
          emailGroup.appendChild(removeButton);
          emailContainer.appendChild(emailGroup);
        });
      },
    };
  
    // Initialize form elements with event listeners
    const accountNameInput = document.getElementById("account-name");
    const fullNameInput = document.getElementById("full-name");
    const genderSelect = document.getElementById("gender");
    const dateOfBirthInput = document.getElementById("date-of-birth");
    const cityInput = document.getElementById("city");
    const addEmailBtn = document.getElementById("add-email-btn");
    const updateInfoBtn = document.getElementById("update-info-btn");
  
    // Add event listeners
    accountNameInput.addEventListener("input", (e) => {
      state.accountName = e.target.value;
    });
  
    fullNameInput.addEventListener("input", (e) => {
      state.fullName = e.target.value;
    });
  
    genderSelect.addEventListener("change", (e) => {
      state.gender = e.target.value;
    });
  
    dateOfBirthInput.addEventListener("change", (e) => {
      state.dateOfBirth = e.target.value;
    });
  
    cityInput.addEventListener("input", (e) => {
      state.cityOfResidence = e.target.value;
    });
  
    addEmailBtn.addEventListener("click", () => {
      state.addEmail();
    });
  
    updateInfoBtn.addEventListener("click", () => {
      state.updateInfo();
    });
  
    // Initialize the email section
    state.renderEmails();
  
    // Add keyboard accessibility
    const focusableElements = document.querySelectorAll(
      "button, input, select, a",
    );
    focusableElements.forEach((el) => {
      el.addEventListener("keydown", (e) => {
        // Enter key for buttons and links
        if (
          e.key === "Enter" &&
          (el.tagName === "BUTTON" || el.tagName === "A")
        ) {
          e.preventDefault();
          el.click();
        }
      });
    });
  });
  