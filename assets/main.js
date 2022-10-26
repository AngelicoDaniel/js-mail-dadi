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

//dice game

let userArray = []
let cpuArray = []

function diceGame(){
let user = Math.round( Math.random() * 6 ) + 1;
let cpu = Math.round( Math.random() * 6 ) + 1;

document.getElementById('userDice').innerText = `user number: ${user}`
document.getElementById('cpuDice').innerText = `cpu number: ${cpu}`


let result = document.getElementById('result')

if ( user > cpu ) {
    result.innerText = `user won`
    userArray.push('win')
}   else if ( cpu > user) {
    result.innerText = `cpu won`
    cpuArray.push('win')
}   else {
    result.innerText = `draw`
}

document.getElementById('userVictory').innerText = `${userArray.length}`
document.getElementById('cpuVictory').innerText = `${cpuArray.length}`
}


