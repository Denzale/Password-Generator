// Constants
const generateBtn = document.querySelector("#generate");

// Functions

/**
 * writes a generated password to the #password
 */
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}
/// Password selections 
const upperCase = "ABCDEFGHIJKLOMNPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const special = "!@#$%^"
const numbers = "1234567890"
///



/**
 * generate a password based on certain criteria
 */
function generatePassword() {





  ///prompts
  let userLength = prompt("Between 8 and 128 how many charaters do you want?")
  let userLowercase = confirm("Do you want lowercases letters?")
  let userUpperCase = confirm("Do You want uppercase letters?")
  let usernumbers = confirm("Do you want numbers?")
  let userSpecial = confirm("Do you want special charaters?")

  // Password is currently blank! We need to make a better one
  let password = "";
  let passwordSeletions = "";

  userLength = parseInt(userLength)

  if (userLowercase === true) {
    passwordSeletions = passwordSeletions + lowerCase
  }

  if (userUpperCase === true) {
    passwordSeletions = passwordSeletions + upperCase
  }

  if (userSpecial === true) {
    passwordSeletions = passwordSeletions + special
  }

  if (usernumbers === true) {
    passwordSeletions = passwordSeletions + numbers
  }

  if (userLength >= 8 && userLength <= 128) {

    for (let i = 0; i < userLength; i++) {
      let randomCharacter = passwordSeletions[Math.floor(Math.random() * passwordSeletions.length)];
      password = password + randomCharacter
    }
  }

  console.log(passwordSeletions);
  ///
  return password;


}

// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
