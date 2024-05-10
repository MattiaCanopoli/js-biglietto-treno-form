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


const kmPrice = 0.21;
const discount18 = 20;
const discount65 = 40;

//-----SUBMIT-----


let result = document.getElementById('result')
const subBtn = document.querySelector('.sub-btn')

subBtn.addEventListener('click', function (event) {
    event.preventDefault()
    // tripRange = Number(tripRange.value)

    //define default final price w/o discount
    let finalPrice = (kmPrice * Number(tripRange.value));

    //validate age entry. print alert
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

        result.innerText = 'Costo: ' + finalPrice.toFixed(2) + '€'
    }

    result.classList.remove('d-none')
})

//-----RESET BTN-----

document
    .getElementById('btn-reset')
    .addEventListener('click', function (event) {
        event.preventDefault();
        tripRange.value = 1;
        tripLengh.innerText = tripRange.value;
        age.value = '';
        firstName.value = '';
        surname.value = '';
        result.classList.add('d-none')
    });
