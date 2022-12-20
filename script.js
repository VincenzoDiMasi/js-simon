console.log('JS OK');

/* In pieno tema natalizio sfruttiamo le timing functions per  fare il conto alla rovescia per il Natale!  
Ogni secondo il nostro countdown dovrà scalare fino alla mezzanotte del 25 dicembre!
Vi sono forniti in allegato HTML e CSS, cercate di analizzarli per capire come intervenire sul countdown.
Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
Da quante ore è composto un giorno?
Da quanti minuti è composta un'ora?
Da quanti secondi è composto un minuto?
Da quanti millisecondi è composto un secondo?
Quanti millisecondi mi separano dal Natale?
Esiste un oggetto JS in grado di gestire le date?
Esistono dei metodi per trasformare una data in millisecondi? */

//Prendo gli elementi dal DOM

const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

//Prendo la data odierna e estraggo i valori
 const now = new Date();
 const day = now.getDate();
 const hours = now.getHours();
 const minutes = now.getMinutes();
 const seconds = now.getSeconds();

const daysToChristmas = 24 - day;
const hoursToChristmas = 23 - hours;
const minutesToChristmas = 59 - minutes;
const secondsToChristmas = 59 - seconds;

 //Inizializzo I valori del countdown
 daysElement.innerText = daysToChristmas;
 hoursElement.innerText = hoursToChristmas;
 minutesElement.innerText = minutesToChristmas;
 secondsElement.innerText = secondsToChristmas;


console.log(hours,minutes,seconds,day);