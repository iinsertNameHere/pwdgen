String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
    }

// Different buckets of character choices
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChars = ["!", "$", "&", "=", "?", "#", "-", "+", "*", "_", "~", ".", ":", ";", ];
var unreadableChars = ["\"", "§", "%", "(", ")", "{", "}", "[", "]", "\\", "'", ",", "|", "<", ">", "/"];

// Function to generate password
function generatePassword() {
    var password = "";
    var consolidatedArr = [];

    // Getting input from the user
    let passLength = document.querySelector("#slider").value

    // Getting combinations of character preferences and building characters set 
    let use_special = document.querySelector("#cb_special").checked;
    let use_unreadable = (use_special && document.querySelector("#cb_unreadable").checked);
    let use_numbers = document.querySelector("#cb_numbers").checked;

    consolidatedArr = consolidatedArr.concat(upperCase);
    consolidatedArr = consolidatedArr.concat(lowerCase);
    if (use_special)    consolidatedArr = consolidatedArr.concat(specialChars);
    if (use_unreadable) consolidatedArr = consolidatedArr.concat(specialChars);
    if (use_numbers)    consolidatedArr = consolidatedArr.concat(numbers)

    // Building the password
    for (var i = 0; i < passLength; i++) {
        newChar = consolidatedArr[Math.floor(Math.random() * consolidatedArr.length)];
        if (specialChars.includes(newChar) && specialChars.includes(password[password.length - 1])) {
            newChar = specialChars[Math.floor(Math.random() * specialChars.length)];
        }
        password += newChar;
    }

    // Validate that the password has a special char
    if (use_special) {
        var hasSpecialChar = false;
        Array.from(password).forEach((character) => {
            if (specialChars.includes(character)) hasSpecialChar = true;
        });
        if (!hasSpecialChar) {
            let newChar = specialChars[Math.floor(Math.random() * specialChars.length)];
            let index = Math.floor(Math.random() * password.length)
            password = password.replaceAt(index, newChar);
        }
    }

    if (use_unreadable) {
        var hasUnreadableChar = false;
        Array.from(password).forEach((character) => {
            if (unreadableChars.includes(character)) hasUnreadableChar = true;
        });
        if (!hasUnreadableChar) {
            let newChar = unreadableChars[Math.floor(Math.random() * unreadableChars.length)];
            let index = Math.floor(Math.random() * password.length)
            password = password.replaceAt(index, newChar);
        }
    }

    // Validate that the password has a number
    if (use_numbers) {
        var hasNumber = false;
        Array.from(password).forEach((character) => {
            if (numbers.includes(character)) hasNumber = true;
        });
        if (!hasNumber) {
            let newChar = numbers[Math.floor(Math.random() * numbers.length)];
            let index = Math.floor(Math.random() * password.length)
            password = password.replaceAt(index, newChar);
        }
    }

    // Validate that the password has a letter
    var letters = upperCase;
    letters = letters.concat(lowerCase);

    var hasLetter = false;
    Array.from(password).forEach((character) => {
        if (letters.includes(character)) hasLetter = true;
    });
    if (!hasLetter) {
        let newChar = letters[Math.floor(Math.random() * letters.length)];
        let index = Math.floor(Math.random() * password.length)
        password = password.replaceAt(index, newChar);
    }

    return password;
}