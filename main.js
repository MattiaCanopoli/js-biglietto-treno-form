'use strict';

//-----FORM VARIABLES-----

const age = document.getElementById('age');
const firstName = document.getElementById('first-name');
const surname = document.getElementById('surname');
const tripLengh = document.getElementById('trip-lenght');
const tripRange = document.getElementById('trip-range');


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
let finalPrice;


//-----SUBMIT BTN-----

let result = document.getElementById('result')
const subBtn = document.querySelector('.sub-btn')
const printBtn = document.querySelector('.print-btn')

subBtn.addEventListener('click', function (event) {
    event.preventDefault()
    const rangeValue = Number(tripRange.value)

    //define default final price w/o discount
    finalPrice = kmPrice * rangeValue


    //validate age entry. set result to text if age is not defined. print on page
    if (age.value === '') {
        result.innerText = 'Imposta un età'
        result.classList.add('text-danger')
        age.classList.add('error-shadow')
    }
    else {
        //check age and calculate final price
        if (age.value === '18-') {
            finalPrice -= ((kmPrice * rangeValue) * discount18 / 100);
        }
        else if (age.value === '65+') {
            finalPrice -= ((kmPrice * rangeValue) * discount65 / 100);
        }

        result.innerText = 'Costo: ' + (Math.ceil((finalPrice)) - 0.1).toFixed(2) + '€'
        result.classList.remove('text-danger');
        age.classList.remove('error-shadow');
    }
    //show result
    result.classList.remove('d-none')

    //if age is defined, show preview button 'printBtn'
    if (result.innerText !== 'Imposta un età') {

        printBtn.classList.remove('d-none')
    }
})


//-----RESET BTN-----


document
    .getElementById('btn-reset')
    .addEventListener('click', function (event) {
        event.preventDefault();
        //set form elements to default values
        tripRange.value = 1;
        tripLengh.innerText = tripRange.value;
        age.value = '';
        firstName.value = '';
        surname.value = '';
        //hide elements
        result.classList.add('d-none');
        ticket.classList.add('d-none');
        printBtn.classList.add('d-none');
        noTicket.classList.add('d-none');
        //remove validation shadows
        age.classList.remove('error-shadow');
        firstName.classList.remove('error-shadow');
        surname.classList.remove('error-shadow');

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
        noTicket.classList.remove('d-none');
        firstName.classList.add('error-shadow');
        surname.classList.add('error-shadow');
    }

    //show ticket preview
    else {
        dName.innerText = firstName.value.toUpperCase();
        dSurnamename.innerText = surname.value.toUpperCase();
        dWagon.innerText = wagon
        dSeat.innerText = seat;
        dPrice.innerText = (Math.ceil((finalPrice)) - 0.1).toFixed(2) + '€'
        ticket.classList.remove('d-none');
        noTicket.classList.add('d-none');
        firstName.classList.remove('error-shadow');
        surname.classList.remove('error-shadow');
    }
})
