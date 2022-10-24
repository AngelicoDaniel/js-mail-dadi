const arrEmail = ['qwerty@gmail.com', 'pippo123@gmail.com', 'pluto456@gmail.com', 'paolo.rossi@gmail.com', 'wasd666@gmail.com']


function login(){

let emailValue = document.getElementById('email').value;



for (let i = 0; i < arrEmail.length; i++) {
    console.log(arrEmail[i])

    if (emailValue == arrEmail[i]) {
    console.log('corretto')

    } else (emailValue !== arrEmail[i]) 
    console.log('sbagliato');
    }
}




