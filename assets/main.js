function login(){

let emailValue = document.getElementById('email').value;
console.log(emailValue)

const arrEmail = ['qwerty@gmail.com', 'pippo123@gmail.com', 'pluto456@gmail.com', 'paolo.rossi@gmail.com', 'wasd666@gmail.com']
console.log(arrEmail)

for (let i = 0; i < arrEmail.length; i++) {
    console.log(arrEmail[i])
    if (emailValue == arrEmail) {
      console.log("corretto");
    } else if (emailValue !== arrEmail) {
      console.log("sbagliato");
    }
  }

}



