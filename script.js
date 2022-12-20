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

//Recupero la data di chiusura del countdown
const countdownDate = new Date("December 25, 2022 00:00:00").getTime();

//Creo la funzione per il countdown
const getCountdown = () => {
  const now = new Date().getTime();
  const time = countdownDate - now;

  //Calcolo il countdown
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);

  //Stampo in pagina
  daysElement.innerText = days < 10 ? `0${days}` : days;
  hoursElement.innerText = hours < 10 ? `0${hours}` : hours;
  minutesElement.innerText = minutes < 10 ? `0${minutes}` : minutes;
  secondsElement.innerText = seconds < 10 ? `0${seconds}` : seconds;

  return time;
};

getCountdown();

//Creo funzione per aggiornare il countdown
const countdown = setInterval(() => {
  const time = getCountdown();
  //Imposto la fine del countdown
  if (time < 0) clearInterval(countdown);
}, 1000);