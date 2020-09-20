// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays of special characters, upper/lowercase characters, and numbers
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", "/", "?", "<",">", ",", "."];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Initializing confirm booleans
var containsUpper;
var containsLower;
var containsNum;
var containsSpecial;

// Password Length
var passwordLength = 0;

// Password container
var password = '';

function passwordPrompts() {
  // Boolean variable to check that prompts are all true
  var promptsAnswered = false;
  // Loop to check that at least one parameter is selected
  while(promptsAnswered == false) {
    containsUpper = confirm("Contains uppercase letters?");
    containsLower = confirm("Contains lowercase letters?");
    containsNum = confirm("Contains numbers?");
    containsSpecial = confirm("Contains special characters?");

    if(containsUpper || containsLower || containsNum || containsSpecial) {
      promptsAnswered = true;
    } else {
      alert("Password needs to have at least one of the parameters.");
    }
  }
  
  // Boolean variable to check that the given password length is adequate
  var checkLength = false;
  while(checkLength == false) {
    var lengthPrompt = prompt("How many characters long should the password be? (Between 8 and 128 Characters)");
    passwordLength = parseInt(lengthPrompt);
    //Check to see if inputted length is within our parameters
    if(passwordLength < 8 || passwordLength > 128 || lengthPrompt == "") {
      alert("Please enter a number between 8 and 128");
    } else {
      checkLength = true;
      writePassword();
    }
  } 
  
}

function generatePassword() {
  // Clear password before setting a new one
  password = '';
  // Initializing variable to decide which arrays to use for password
  var whichArray;
  for(var i = 0; i < passwordLength; i++) {
    var whichArray = Math.floor(Math.random() * 4);
    // Setting special character for password
    // Randomly select index number for array of 27 special characters
    if(whichArray == 0 && containsSpecial== true) {
      var specialIndex = Math.floor(Math.random() * 27);
      password += specialChar[specialIndex];
    // Randomly select index number for array of 26 uppercase characters
    } else if (whichArray == 1 && containsUpper==true) {
      var upperIndex = Math.floor(Math.random() * 26);
      password += uppercase[upperIndex];
    // Randomly select index number for array of 26 lowercase characters
    } else if (whichArray == 2 && containsLower==true) {
      var lowerIndex = Math.floor(Math.random() * 26);
      password += lowercase[lowerIndex];
    // Randomly select index number for array of 10 number characters
    } else if (whichArray == 3 && containsNum==true) {
      var numIndex = Math.floor(Math.random() * 10);
      password += numbers[numIndex];
    // If land on array with undesired characters then run loop again.
    } else {
      i--;
    }
  }
  console.log(password);
  return password;
}

// Write password to the #password input
function writePassword() {
  var generatedPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = generatedPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", passwordPrompts);
