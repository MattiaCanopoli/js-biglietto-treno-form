'use strict';

//-----FORM VARIABLES-----

const age = document.getElementById('age');
const firstName = document.getElementById('first-name');
const surname = document.getElementById('surname');
let tripLengh = document.getElementById('trip-lenght');
let tripRange = document.getElementById('trip-range');


//-----TRIP LENGHT-----

//get value from trip-range and print it to trip-leght
tripLengh.innerText = tripRange.value;

//change trip-lenght on change of trip-range
tripRange.addEventListener('change', function () {
    tripLengh.innerText = tripRange.value;
});


//-----PRICES VARIABLES-----

//define prices and discounts
const kmPrice = 0.21;
const discount18 = 20;
const discount65 = 40;


//-----SUBMIT BTN-----

let result = document.getElementById('result')
const subBtn = document.querySelector('.sub-btn')
const printBtn = document.querySelector('.print-btn')

subBtn.addEventListener('click', function (event) {
    event.preventDefault()
    // tripRange = tripRange.value

    //define default final price w/o discount
    let finalPrice = kmPrice * Number(tripRange.value);


    //validate age entry. set result to text if age is not defined. print on page
    if (age.value === '') {
        result.innerText = 'Imposta un età'
    }
    else {
        //check age and calculate final price
        if (age.value === '18-') {
            finalPrice -= ((kmPrice * Number(tripRange.value)) * discount18 / 100); //sostituire Number(tripRange.value) con variabile. non funziona (NaN al secondo utilizzo)
        }
        else if (age.value === '65+') {
            finalPrice -= ((kmPrice * Number(tripRange.value)) * discount65 / 100);
        }

        result.innerText = 'Costo: ' + (Math.ceil(finalPrice) - 0.1).toFixed(2) + '€'
    }
    //show result
    result.classList.remove('d-none')

    //if age is defined, show preview button 'printBtn'
    if (result.innerText !== 'Imposta un età') {

        printBtn.classList.remove('d-none')
    }
})


//-----RESET BTN-----

//set all elements to default values, hide result, ticket preview and preview button
document
    .getElementById('btn-reset')
    .addEventListener('click', function (event) {
        event.preventDefault();
        tripRange.value = 1;
        tripLengh.innerText = tripRange.value;
        age.value = '';
        firstName.value = '';
        surname.value = '';
        result.classList.add('d-none');
        ticket.classList.add('d-none');
        printBtn.classList.add('d-none')
    })


//-----PRINT BTN-----


//get ticket preview elements from DOM
const ticket = document.getElementById('ticket')

const dName = document.getElementById('d-name')
const dSurnamename = document.getElementById('d-surname')
const dWagon = document.getElementById('d-wagon')
const dSeat = document.getElementById('d-seat')
const dPrice = document.getElementById('d-price')

const noName = document.getElementById('no-name')
const noTicket = document.getElementById('no-ticket')

//generate random numbers for wagon and seat
const wagon = Math.floor(Math.random() * 10)
const seat = Math.floor(Math.random() * 30)

printBtn.addEventListener('click', function () {

    //check firstName and surname values. if any is '', show alert
    if (firstName.value == '' || surname.value == '') {
        noName.innerText = 'Inserisci nome e cognome'
        noTicket.classList.remove('d-none')
    }

    //show ticket preview
    else {
        dName.innerText = firstName.value.toUpperCase();
        dSurnamename.innerText = surname.value.toUpperCase();
        dWagon.innerText = wagon
        dSeat.innerText = seat;
        // dPrice.innerText = finalPrice //error: finalPrice not defined. esiste solo nella funzione di submit?
        ticket.classList.remove('d-none');
        noTicket.classList.add('d-none')
    }
})
