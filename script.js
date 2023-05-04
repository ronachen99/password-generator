// Assignment Code
var generateBtn = document.querySelector("#generate");

// Directs the end user to click on the generate button
window.alert("Click on the red button to generate your password!");

// The arrays for uppercase, lowercase, numbers, special characters, and selected characters  that were chosen by the end user
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
var selectedCharacters = [];

// Set max and min length values
var min = 8; 
var max = 128;

   
    
// Writes the function for generatePassword
function generatePassword() {

  // Prompts users to input a desired password length
  var passwordLength = prompt("The password must be at least 8 characters and no more than 128 characters. Please enter your desired password length (i.e., 8-128)."); 
  
  // If the user enters an invalid number, then an error would show up that redirect thems to enter a valid number
  if (passwordLength < min || passwordLength > max) {
      prompt("Please enter a valid password length!\nEnter a number from 8 to 128:");
    } else if (isNaN(passwordLength)) {
      prompt("Please enter a valid password length!\nEnter a number from 8 to 128:");
    return "You need to enter a valid password length. Please try again!";
  }
    
  // Prompts that allow users to choose what characters to include in their password
  var uppercaseTrue = window.confirm("Do you want uppercase letters (i.e., ABC) in your password?");
  var lowercaseTrue = window.confirm("Do you want lowercase letters (i.e., abc) in your password?");
  var numbersTrue = window.confirm("Do you want numbers (i.e., 123) in your password?");
  var specialCharactersTrue = window.confirm("Do you want special characters (i.e., !@#$%^) in you password?");
 
 
 
  //


  // If the user selects "cancel" for all prompts, then an error would show up that redirects them back to the prompts
  if (!uppercase && !lowercase && !numbers && !specialCharacters) {
    window.alert("You must select at least one criteria!\nPlease select OK for at least one of the following prompts:");
    var uppercaseTrue = window.confirm("Do you want uppercase letters (i.e., ABC) in your password?");
    var lowercaseTrue = window.confirm("Do you want lowercase letters (i.e., abc) in your password?");
    var numbersTrue = window.confirm("Do you want numbers (i.e., 123) in your password?");
    var specialCharactersTrue = window.confirm("Do you want special characters (i.e., !@#$%^) in you password?");
  }

  

  

  // Need to add the selected criteria array(s) together using .concat method, and overwrites everytime if the criteria is true
  var selectedCriteria = [];

  if (uppercaseTrue) {
    selectedCriteria = selectedCriteria.concat(uppercase);
  } 
  
  if (lowercaseTrue) {
    selectedCriteria = selectedCriteria.concat(lowercase);
  } 
  
  if (numbersTrue) {
    selectedCriteria = selectedCriteria.concat(numbers);
  } 
  
  if (specialCharactersTrue) {
    selectedCriteria = selectedCriteria.concat(specialCharacters);
  }

  // Make the selectedCriteria random, the randomization would continue to select a random character from the selectedCriteria array up until the desired passwordLength
  var password = "";

  for (var x = 0; x < passwordLength; x++); {
    password = selectedCriteria[Math.floor(Math.random() * selectedCriteria.length)];
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
