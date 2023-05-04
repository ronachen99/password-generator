// Assignment Code
var generateBtn = document.querySelector("#generate");

// Directs the end user to click on the generate button
// window.alert("Click on the red button to generate your password!");

// The arrays for uppercase, lowercase, numbers, special characters, and selected characters  that were chosen by the end user
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
var selectedCharacters = [];

// Set max and min length values
var min = 8;
var max = 128;

// Sets a password variable with no values
var password = ""

// Writes the function for generatePassword
function generatePassword() {
  // Prompt users to choose what characters to include in their password
  var uppercaseTrue = confirm("Do you want uppercase letters (i.e., ABC) in your password?");
  var lowercaseTrue = confirm("Do you want lowercase letters (i.e., abc) in your password?");
  var numbersTrue = confirm("Do you want numbers (i.e., 123) in your password?");
  var specialCharactersTrue = confirm("Do you want special characters (i.e., !@#$%^) in your password?");
  // If the user selects "cancel" for all prompts, the function will terminate
  if (uppercaseTrue === false && lowercaseTrue === false && numbersTrue === false && specialCharactersTrue === false) {
    return "You must select at least one password criteria.\nPlease try again!";
  }

  // Prompt users to input a desired password length
  var passwordCount = prompt("The password must be at least 8 characters and no more than 128 characters. Please enter your desired password length (i.e., 8-128).");
  // If the user enters an invalid number, it will prompt the user to enter a valid number, if not the function will terminate after two inputs of invalid numbers
  if (passwordCount < min || passwordCount > max) {
    prompt("Please enter a valid password length!\nEnter a number from 8 to 128:");
  } else if (isNaN(passwordCount)) {
    console.log("it's not a number")
    prompt("Please enter a valid password length!\nEnter a number from 8 to 128:");
    return "You must enter a valid password length. Please try again!";
  }

  // Need to add the selected criteria arrays together using .concat method, which overwrites everytime when the criteria is true
  if (uppercaseTrue) {
    selectedCharacters = selectedCharacters.concat(uppercase);
  }
  console.log(selectedCharacters)

  if (lowercaseTrue) {
    selectedCharacters = selectedCharacters.concat(lowercase);
  }
  console.log(selectedCharacters)

  if (numbersTrue) {
    selectedCharacters = selectedCharacters.concat(numbers);
  }
  console.log(selectedCharacters)

  if (specialCharactersTrue) {
    selectedCharacters = selectedCharacters.concat(specialCharacters);
  }
  console.log(selectedCharacters)










  // Randomization would continue to select a random character from the selected characters until the desired passwordCount
  for(var i=0; i< passwordCount; i++){
    randomCharacters = selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)];
    console.log(randomCharacters)
    password = randomCharacters.concat(password);
    console.log(password)
  }

  return password;
}

















// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);