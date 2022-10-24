const arrEmail = ['qwerty@gmail.com', 'pippo123@gmail.com', 'pluto456@gmail.com', 'paolo.rossi@gmail.com', 'wasd666@gmail.com']
console.log(arrEmail)

const inputEmail = document.getElementById('email')


function login(){
    let emailValue = inputEmail.value;
    console.log (emailValue)
    
    for (let i = 0; i <= arrEmail.length; i++){
        console.log(arrEmail[i])

    if (emailValue == arrEmail[i]) {
        document.getElementById('check').innerHTML = `${'email corretta'}`
        console.log('emailcorretta')
    } else {
        document.getElementById('check').innerHTML = `${'hai sbagliato'}`
        console.log('sbagliato')
    } 
    }

}



