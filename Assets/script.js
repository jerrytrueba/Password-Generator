// Assignment Code
var generateBtn = document.querySelector("#generate");

//Criteria to pick from
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9','0'];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = ['~', '!', '@', '#', '$', '%', '^', '&', '*',]; 

//Prompted Questions
function questions(){
  var isValid = false;
  do {
  var length = prompt("Pick password length between 8 and 128.");
  var askNumbers = confirm("Would you like your password to include numbers?");
  var askLower = confirm("Would you like your password to include lower case letters?");
  var askUpper = confirm("Would you like your password to include upper case letters?");
  var askSpecialCharacters = confirm("Would you like your password to include any special characters?");
  var responses = {
    length: length,
    askNumbers: askNumbers,
    askLower: askLower,
    askUpper: askUpper,
    askSpecialCharacters: askSpecialCharacters
    } 
  
  if((length < 8)||(length > 128))
  alert("Please pick the length of your password between 8 and 30");
  else if((!askNumbers)&&(!askLower)&&(!askUpper)&&(!askSpecialCharacters))
  alert("Must choose at least one type.");
  else
  isValid = true;

} while(!isValid);
return responses;
}

//This will generate a password depending on how you answered the prompted questions.
function generatePassword() {
  var options = questions();
  var randoms = [];
  var finalPassword = "";

  if (options.askNumbers) {
    for (var i of numbers)
      randoms.push(i);
  }
  if (options.askLower) {
    for (var i of lower)
    randoms.push(i);
  }
  if (options.askUpper) {
    for (var i of upper)
    randoms.push(i);
  }
  if (options.askSpecialCharacters) {
    for (var i of specialCharacters)
    randoms.push(i);
  }

  console.log(randoms);

  for (var i = 0; i < options.length; i++) {
    finalPassword += randoms[Math.floor(Math.random() * randoms.length)];
    
  }
  console.log(finalPassword);

  return finalPassword;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
