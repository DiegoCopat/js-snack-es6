/* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate inizialmente a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/ 

var squadre = [
    {
        nome : "Juve",
        puntiFatti : 0, 
        falliSubiti : 0
    },

    {
        nome : "Milan",
        puntiFatti : 0, 
        falliSubiti : 0
    },

    {
        nome : "Inter",
        puntiFatti : 0, 
        falliSubiti : 0
    },

    {
        nome : "Lazio",
        puntiFatti : 0, 
        falliSubiti : 0
    },

    {
        nome : "Parma",
        puntiFatti : 0, 
        falliSubiti : 0
    }
];

var {juve, milan, inter, lazio, parma} = squadre;
var nuovoArray = [];

console.log(nuovoArray);

// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

var generaNumeri = (numMin, numMax) => Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;

for (var i = 0; i < squadre.length; i++) {

    squadre[i].puntiFatti += generaNumeri (0, 100);
    squadre[i].falliSubiti += generaNumeri (0, 100);

    var nuovoArraySquadra = {};
    nuovoArraySquadra.nome = squadre[i].nome;
    nuovoArraySquadra.puntiFatti = squadre[i].puntiFatti;
    nuovoArray.push(nuovoArraySquadra);
}
console.log(squadre);



// `