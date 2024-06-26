//access the element with the id of password
const passwordBox = document.getElementById("password");
//allowable length of the password
const allowableLength = 12;

//allowable characters for the password
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{][></-=";
const allChars = upperCase + lowerCase + number + symbol

//create a random password by selecting a random character from each variable
function createPassword () {
    let password = "";
    //create a random password by selecting a random character from each variable and adding that value to the password variable
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    //while allowableLength is greater than the length of the password, select a random character from the allChars variable and add it to the password
    while(allowableLength > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    //show the random password by assigning the value of passwordBox to password 
    passwordBox.value = password
}

//copy the password to the clipboard
function copyPassword () {
    passwordBox.select();
    document.execCommand("copy");
}