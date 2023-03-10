
// - ES1: Scrivere un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
// - se v e’ minore di 18,  stampare in console  “insufficiente”
// - se v e’ maggiore uguale a 18 e minore di 21,  stampare in console “sufficiente”
// - se v e’ maggiore uguale a 21 e minore di 24,  stampare in console: “buono”
// - se v e’ maggiore uguale a 24 e minore di 27, stampare in console: “distinto”
// - se v e’ maggiore uguale a 27 e minore uguale 29, stampare in console: “ottimo”
// - se v e’ uguale a 30, stampare in console:  “eccellente”
//     Esempio:
//     let v = 29;
//     Output: Ottimo
// - Cercate di risolvere questo esercizio utilizzando prima if, else e poi con switch, case.

let vote = 29;

if (vote < 18){
    console.log(`insufficente`);
}else if (vote >= 18 && vote < 21) {
    console.log(`sufficente`);
}else if (vote >= 21 && vote < 24) {
    console.log(`buono`);
}else if (vote >= 24 && vote < 27) {
    console.log(`distinto`);
}else if (vote >= 27 && vote <= 29) {
    console.log(`ottimo`);
}if (vote == 30) {
    console.log(`eccellente`);
}

switch (true) {
    case (vote < 18):
        console.log(`insufficente`)
        break;
    case (vote >= 18 && vote < 21):
            console.log(`sufficente`)
        break;
    case (vote >= 21 && vote < 24):
            console.log(`buono`)
        break;
    case (vote >= 24 && vote < 27):
            console.log(`distinto`)
        break;
    case (vote >= 27 && vote <= 29):
            console.log(`ottimo`)
        break;
     case (vote == 30):
            console.log(`eccelente`)
        break;
default:
    console.log(`Complimenti per il voto!`);
        break;
}


// ES2:  Scrivi un programma che dato un numero, let num = 2, stampi la rispettiva tabellina corrispondente.

for (let i = 0; i <= 20; i = i +2) {
    console.log(i);;
    
}


// - ES 3:Scrivere un programma che converta una temperatura con una delle seguenti descrizioni:
// - se temperatura e’ minore di 20, stampare “non ci sono piu’ le mezze stagioni”
// - se temperatura e’ maggiore uguale a 30, stampare “lu mare, lu sole, lu ientu”
// - se temperatura e’ minore di 30, stampare “mi dia una peroni sudata”
// - se temperatura e’ minore di 0, stampare “non e’ tanto il freddo quanto l’umidità’”
// - se temperatura e’ minore di -10, stampare “copriti…ancora ti raffreddi”
// - Cercate di risolvere questo esercizio utilizzando prima if else e poi con switch case.


let temperatura = 19;

if ( temperatura < 20) {
    console.log(`non ci sono piu le mezze stagioni`);
    
} else if (temperatura >= 30 ){
    console.log(`lu mare, lu sole, lu ientu`);
}
else if (temperatura < 30 ){
    console.log(`mi dia una peroni sudata`);
}
else if (temperatura < 0  ){
    console.log(`non è tanto il freddo quanto l'umidità`);
}
else if (temperatura < -10  ){
    console.log(`copriti...ancora ti raffreddi`);
}


switch (true) {
    case (temperatura < 20):
        console.log(`non ci sono piu le mezze stagioni`)
        break;
    case (temperatura >= 30 ):
    console.log(`lu mare, lu sole, lu ientu`);
        break;
    case (temperatura < 30 ):
            console.log(`mi dia una peroni sudata`)
        break;
    case (temperatura < 0  ):
            console.log(`non è tanto il freddo quanto l'umidità`)
        break;
    case (temperatura < -10  ):
            console.log(`copriti...ancora ti raffreddi`)
        break;
default:
    console.log(`Adattati`);
        break;
}


// - ES 4: Scrivere un programma che simuli un distributore di bevande:
// - fare in modo che l’utente possa inserire il numero corrispondente alla bevanda, mediante l’istruzione prompt:
//     - se inserisce 1, seleziona acqua e quindi stampare in console: “E’ stata selezionata l’acqua”
//     - se inserisce 2, seleziona coca cola e quindi stampare in console: “E’ stata selezionata coca cola”
//     - se inserisce 3, seleziona birra e quindi stampare in console: “E’ stata selezionata birra”
//     - se inserisce qualcosa di diverso, il programma dovra’ riproporre la domanda di partenza



let bevanda = prompt (`seleziona la bevanda \(1) Acqua \(2) Coca Cola \(3)birra`)


while (bevanda != 1 && bevanda != 2 && bevanda !== 3) {
    bevanda = prompt (`seleziona la bevanda \(1) Acqua \(2) Coca Cola \(3)birra`);
}

if (bevanda == `1`) {
    alert(`E' stata selezionata l'aqua`);
} else if (bevanda == `2`) {
    alert(`E' stata selezionata la cocacola`);
} else if (bevanda == `3`) {
    alert(`E' stata selezionata la birra`);
} 







