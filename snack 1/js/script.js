/* 
Creare un array di oggetti: 
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.
*/

var bici = [
    {
        nome: "bici1",
        peso: 5
    },
    {
        nome: "bici2",
        peso: 10
    },
    {
        nome: "bici3",
        peso: 15
    },
    {
        nome: "bici4",
        peso: 20
    },
    {
        nome: "bici5",
        peso: 25
    },
    {
        nome: "bici6",
        peso: 30
    },
    {
        nome: "bici7",
        peso: 35
    },
];

var {bici1, bici2, bici3, bici4, bici5, bici6, bici7} = bici;
var biciLeggera = leggera (bici);
console.log(biciLeggera);
// Stampare a schermo la bici con peso minore


// FUNZIONE CLASSICA PER INDIVIDUARE IL VALORE PESO PIU' BASSO RISPETTO AGLI ALTRI OGGETTI

function leggera (array) {

    var leggera = array[0];

    for (var i = 0; i < bici.length; i++) {
        if(bici[i].peso < leggera.peso) {
        leggera = bici[i];
        }  
    }
return leggera;
}

// `