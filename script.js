// Assignment Code
var generateBtn = document.querySelector("#generate");

// Directs the end user to click on the generate button
window.alert("Click on the red button to generate your password!");

// Sends an alert message if the user selects zero criteria or enters an invalid password length
function tryAgain() {
  return confirm("Would you like to try again?")
}

// Get the desired length of the function
function getLength() {
  // Sets max and min length values
  var min = 8;
  var max = 128;
  var passwordCount = prompt("The password must be at least 8 characters and no more than 128 characters. Please enter your desired password length (i.e., 8-128).");
  if (passwordCount >= min && passwordCount <= max) {
    return passwordCount
  }
  // If the user entered an invalid value, an error would pop up and directs them to the tryAgain function, and if true, the getLength function would execute
  alert("You must enter an integer value!")
  if (tryAgain()) {
    return getLength()
  }
}

// Get possible characters based from the criteria that the end user chooses
function getCharacters() {
  // The arrays for uppercase, lowercase, numbers, and special characters
  var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialCharacters = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
  // Blank array that will eventually increase with user selection
  var selectedCharacters = [];
  // Prompts user to select their criteria with "ok" for yes or "cancel" for no
  var uppercaseTrue = confirm("Do you want uppercase letters (i.e., ABC) in your password?");
  // Need to add the selected criteria arrays together using .concat method, which overwrites everytime when the criteria is true
  if (uppercaseTrue) {
    selectedCharacters = selectedCharacters.concat(uppercase);
  }
  var lowercaseTrue = confirm("Do you want lowercase letters (i.e., abc) in your password?");
  if (lowercaseTrue) {
    selectedCharacters = selectedCharacters.concat(lowercase);
  }
  var numbersTrue = confirm("Do you want numbers (i.e., 123) in your password?");
  if (numbersTrue) {
    selectedCharacters = selectedCharacters.concat(numbers);
  }
  var specialCharactersTrue = confirm("Do you want special characters (i.e., !@#$%^) in your password?");
  if (specialCharactersTrue) {
    selectedCharacters = selectedCharacters.concat(specialCharacters);
  }
  // This returns the selectedCharacter array and gets out of the getCharacter function 
  if (selectedCharacters.length > 0) {
    return selectedCharacters
  }
  // If none was selected, an error would pop up and if user selects "ok" for the alert function (i.e., true) then it will redirect them back to the getCharacter function 
  alert("You must select at least one character type")
  if (tryAgain()) {
    return getCharacters()
  }
}

// Writes the function for generatePassword
function generatePassword() {
  // Defines password length equal to the result from the getLength function
  var passwordLength = getLength()
  // If the user decides to enter an invalid value which returns undefined, it will terminate the function
  if (passwordLength === undefined) {
    return "You must enter an integer between 8 and 128!"
  }
  // Defines available characters equal to the result from the getCharacters function
  var passwordBase = getCharacters()
  // If the user decides to select none of the criteria, it will return undefined and terminate the function
  if (passwordBase === undefined) {
    return "You must select at least one character type!"
  }
  // Sets a password variable as string
  var password = ""
  // Randomization would continue to select a random character from the password base until the desired password length
  for (var i = 0; i < passwordLength; i++) {
    randomCharacters = passwordBase[Math.floor(Math.random() * passwordBase.length)];
    password = randomCharacters.concat(password);
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