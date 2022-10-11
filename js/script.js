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

button.addEventListener('click' , function(){
    mail = mailInput.value;
    console.log(mail);
    let check = false;
    for (let i = 0; i < mailList.length; i++){
        if (mail == mailList[i]){
            check = true;
        }
    }
    if (check){
        const checked = document.createElement('p');
        checked.innerText = 'La tua mail è presente nel nostro database';
        document.querySelector('div').append(checked);
    } else {
        const notChecked = document.createElement('p');
        notChecked.classList.add('col-10');
        notChecked.classList.add('offset-1');
        notChecked.innerText = 'La tua mail non è presente nel nostro database';
        document.querySelector('div').append(notChecked);
    }
})

let userDice = '';
let cpuDice = '';
const roll = document.getElementById('roll');
const diceSpace = document.getElementById('dices');
const user = document.getElementById('dice1');
const cpu = document.getElementById('dice2');

function rollingDices (){
    userDice = Math.floor(Math.random() * (6 - 1) ) + 1;
    cpuDice = Math.floor(Math.random() * (6 - 1) ) + 1;
    console.log(userDice,cpuDice);
    const userDiceValue = document.createElement('h1')
    userDiceValue.innerText = `Tu: ${userDice}`;
    user.append(userDiceValue);
    const cpuDiceValue = document.createElement('h1')
    cpuDiceValue.innerText = `CPU: ${cpuDice}`;
    cpu.append(cpuDiceValue);
    if (userDice > cpuDice){
        const uWin = document.createElement('p');
        uWin.classList.add('col-2');
        uWin.classList.add('offset-2');
        uWin.innerText = `Hai Vinto!`;
        diceSpace.append(uWin);
    } else if (userDice < cpuDice){
        const uLose = document.createElement('p');
        uLose.classList.add('col-2');
        uLose.classList.add('offset-2');
        uLose.innerText = `Hai Perso`;
        diceSpace.append(uLose);
    } else {
        const draw = document.createElement('p');
        draw.classList.add('col-2');
        draw.classList.add('offset-2');
        draw.innerText = `Pareggio!`;
        diceSpace.append(draw);
    }
}

roll.addEventListener('click', rollingDices);

