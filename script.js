// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of special characters
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", "/", "?", "<",">", ",", "."];
// Arrays of upper and lowercase letters
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Array of numbers
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
  containsUpper = confirm("Contains uppercase letters?");
  containsLower = confirm("Contains lowercase letters?");
  containsNum = confirm("Contains numbers?");
  containsSpecial = confirm("Contains special characters?");
  var check = 0;
  while(check == 0) {
    var lengthPrompt = prompt("How many characters long should the password be? (Between 8 and 128 Characters)");
    passwordLength = parseInt(lengthPrompt);
    //Check to see if inputted length is within our parameters
    if(passwordLength < 8 || passwordLength > 128) {
      alert("Please enter a number between 8 and 128");
    } else {
      check++;
      writePassword();
    }
  } 
  
}

function generatePassword() {
  alert(containsUpper);
  // Initializing variable to decide which arrays to use for password
  var whichArray;
  for(var i = 0; i < passwordLength; i++) {
    var whichArray = Math.floor(Math.random() * 4);
    // Setting special character for password
    // Randomly select index number for array of 28 special characters
    if(whichArray == 0 && containsSpecial== true) {
      var specialIndex = Math.floor(Math.random() * 27);
      password += specialChar[specialIndex];
    // Randomly select index number for array of 26 uppercase characters
    } else if (whichArray == 1 && containsUpper==true) {
      var upperIndex = Math.floor(Math.random() * 25);
      password += uppercase[upperIndex];
    // Randomly select index number for array of 26 lowercase characters
    } else if (whichArray == 2 && containsLower==true) {
      var lowerIndex = Math.floor(Math.random() * 25);
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
  alert(generatedPassword);
  var passwordText = document.querySelector("#password");
  passwordText.value = generatedPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", passwordPrompts);
//generateBtn.addEventListener("click", writePassword);
