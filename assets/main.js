//email
const arrEmail = ['qwerty@gmail.com', 'pippo123@gmail.com', 'pluto456@gmail.com', 'paolo.rossi@gmail.com', 'wasd666@gmail.com']

let result = document.getElementById('check')

function login(){

let emailValue = document.getElementById('email').value;

let emails = false;
    for (let i = 0; i < arrEmail.length; i++) {

        if (emailValue == arrEmail[i]) {
            emails = true;
        }
    }

    if(emails == true){

        result.innerHTML = `bravo`
    } else {
        result.innerHTML = `email non corretta`
    }
}

//dadi
let numUser = Math.round(Math.random () * 6)
let numPc = Math.round(Math.random () * 6)
console.log(numUser, numPc)