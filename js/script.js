/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

/*
primo esercizio scaletta:

chiedere email
controllare se email è in listaEmail
stampa esito
*/


// var definition
const mailList = ['pietro@boolean.com', 'andrea@boolean.com', 'marco@boolean.com', 'giada@boolean.com'];
let mailInput = document.getElementById('mail');
let mail = '';
const button = document.querySelector('button');    //picking the HTMLbutton element
const checked = document.createElement('p');

button.addEventListener('click' , function(){
    checked.innerHTML = '';
    mail = mailInput.value;
    console.log(mail);
    let check = false;
    for (let i = 0; i < mailList.length; i++){
        if (mail == mailList[i]){
            check = true;
        }
    }
    if (check){
        checked.classList.add('col-10');
        checked.classList.add('offset-1');
        checked.innerText = 'La tua mail è presente nel nostro database';
        document.querySelector('div').append(checked);
    } else {
        checked.classList.add('col-10');
        checked.classList.add('offset-1');
        checked.innerText = 'La tua mail non è presente nel nostro database';
        document.querySelector('div').append(checked);
    }
    mailInput.value = '';
})

let userDice = '';
let cpuDice = '';
const roll = document.getElementById('roll');
const diceSpace = document.getElementById('dices');
const user = document.getElementById('dice1');
const cpu = document.getElementById('dice2');
const result = document.createElement('p');
const userDiceValue = document.createElement('h1');
const cpuDiceValue = document.createElement('h1');

function rollingDices (){
    result.innerHTML = '';
    userDice = Math.floor(Math.random() * (6 - 1) ) + 1;
    cpuDice = Math.floor(Math.random() * (6 - 1) ) + 1;
    console.log(userDice,cpuDice);
    userDiceValue.innerText = `Tu: ${userDice}`;
    user.append(userDiceValue);
    cpuDiceValue.innerText = `CPU: ${cpuDice}`;
    cpu.append(cpuDiceValue);
    if (userDice > cpuDice){
        result.classList.add('col-2');
        result.classList.add('offset-2');
        result.innerText = `Hai Vinto!`;
        diceSpace.append(result);
    } else if (userDice < cpuDice){
        result.classList.add('col-2');
        result.classList.add('offset-2');
        result.innerText = `Hai Perso`;
        diceSpace.append(result);
    } else {
        result.classList.add('col-2');
        result.classList.add('offset-2');
        result.innerText = `Pareggio!`;
        diceSpace.append(result);
    }
}

roll.addEventListener('click', rollingDices);

