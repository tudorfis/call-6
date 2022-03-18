/**
    Client: Fa-mi te rog butonul de login sa nu fie valabil atunci cand a pus cineva
        parola mai mica de 6 caractere.

    Tech:
    - modificam inputul de password
    - numaram numarul de caracter din input
    - comparam cu numarul minim (var )
    - cream o conditie un if/else
    - daca e mai mare sa fie enabled, altfel disabled
    - cand se apasa o tasta pe password, executam codul

    1) Modificam inputul de password
*/

const inputUserName = document.querySelector('#username');
const inputPassword = document.querySelector('#password');
const inputRepeatPassword = document.getElementById('repeat-password');
const submitBtn = document.querySelector('#submitBtn');

const passElements = [inputPassword, inputRepeatPassword];

passElements.forEach( function(passElement) {
    passElement.addEventListener('input', function() {
        charNumberCheck(passElement);

        const inputVlNumber = document.querySelector('.validation-list .vl-nummber');
        inputVlNumber.classList.toggle('active', checkNumbers(passElement));

        const inputUpperCase = document.querySelector('.validation-list .vl-litera_mare');
        inputUpperCase.classList.toggle('active', checkUpperCase(passElement));

        const inputSpecialChar = document.querySelector('.validation-list .vl-caracter_special');
        inputSpecialChar.classList.toggle('active', specialCharacter(passElement));
    })
});
function checkUpperCase(inputElement) {
    const value = inputElement.value;
    const regEx = new RegExp (/[A-Z]/);
    return value.match(regEx);
}

function checkNumbers(inputElement){
    let value = inputElement.value;
    let reg = new RegExp(/[0-9]/);
    return value.match(reg);
}

function specialCharacter(inputElement){
    const value = inputElement.value.match(/[!-*&]/g);
    return value;
}



// inputPassword.addEventListener('input', function(){
//   charNumberCheck(inputPassword);
// });

// inputRepeatPassword.addEventListener('input', function() {

//     charNumberCheck(inputRepeatPassword);
// });

function  charNumberCheck(inputElement) {
    const condition = inputElement.value.length >= 6;
    if(!condition){
        submitBtn.setAttribute('disabled','true');
        console.log('TRUE');
    }else{
        submitBtn.removeAttribute('disabled');
        console.log('FALSe');
    }
}
