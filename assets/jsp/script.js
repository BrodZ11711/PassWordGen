/* Assignment Code*/
var generateBtn = document.querySelector("#generate");

/*This function will define the special characters that can be used*/

const specialCharacters = "!@#$%^&*()<>.,\?/~-_=+";

/*This will create the password to the #password*/
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

/*Generating an Event button by using a listener function*/
generateBtn.addEventListener("click", writePassword);

/*This will control the prompts for the user to select*/
function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you want your password to be. Please choose from 8 to 128 characters.");
  
  /*This will run to see if the min or max has been reached*/
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) passwordLength = Number(prompt("This password must be between 8 & 128 characters. Please try again"));
  /*The following code will determine what the prompts will say, and is the confirmation from the user*/
  var numbers = confirm("Would you like to include numbers?");

  var lowerCases = confirm("Would you like non-capital letters in your password?");

  var upperCases = confirm("Would you like capital letters in your password?");

  var special = confirm("Would you also like to use special characters?");

  /*If none of the prompts are confirmed, this will run*/
  while (!upperCases && !lowerCases && !numbers && !special) {
    alert("You must select at least one character type!");
    numbers = confirm("Would you like to now choose to have numbers?");
    lowerCases = confirm("Would you like to now choose to have lowercase letters?");
    upperCases = confirm("Would you like to now choose to have uppercase letters?");
    special = confirm("Would you like to now choose to have special characters?");
  }

  /*This is creating a mininum limit*/
  var minimumCount = 0;

  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";

  /*this is the code that will generate the code*/
  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }
};

  /* If user selected ok for below, will use empty minimums from above*/

  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;
  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;
  }

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;
  }

  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;
  }

  /* empty string for the below to reference off*/
  var randomPasswordGenerated = "";

 
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 9);

    randomPasswordGenerated += randomNumberPicked;
  }

  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;

  /*AThis will output the result of the password*/
  return randomPasswordGenerated;

}