// Gioco dei dadi
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

var vai = document.getElementById("pulsante");
vai.addEventListener('click',
function() {

    var numeroMio = Math.floor(Math.random() * 7) + 1 ;
    var numeroPc = Math.floor(Math.random() * 7) + 1 ;
    var risultato1 = 'hai vinto' ;
    var risultato2 = 'hai perso';
    var totale = 'pareggio'

    document.getElementById("totale").innerHTML = totale

    if (numeroMio > numeroPc ){
        document.getElementById("totale").innerHTML = risultato1;
    }else if(numeroPc > numeroMio){
        document.getElementById("totale").innerHTML = risultato2;
    }

    console.log(numeroMio ,numeroPc );
});
