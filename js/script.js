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
        notChecked.classList.add('col-12');
        notChecked.innerText = 'La tua mail non è presente nel nostro database';
        document.querySelector('div').append(notChecked);
    }
})


