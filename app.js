//password, zip code, and password confirmation verification here

const passwordInput = document.getElementById("password")
const passwordConfirmationInput = document.getElementById("passwordConfirmation")
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");


passwordInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

passwordInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

passwordConfirmationInput.onfocus = function() {
  document.getElementById("pswrdConfirm").style.display = "block";
}

passwordConfirmationInput.onblur = function() {
  document.getElementById("pswrdConfirm").style.display = "none";
}

passwordInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(passwordInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(passwordInput.value.match(upperCaseLetters)) {
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if(passwordInput.value.match(numbers)) {
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }

    // Validate length
    if(passwordInput.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
  }

