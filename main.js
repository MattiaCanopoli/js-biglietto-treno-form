'use strict'

//get value from trip-range and print it to trip-leght
let tripLengh = document.getElementById('trip-lenght');
let tripRange = document.getElementById('trip-range');
tripLengh.innerText=tripRange.value

//change trip-lenght on change of trip-range
tripRange.addEventListener('change',function(){

    tripLengh.innerText=tripRange.value;
});

document.getElementById('btn-reset').addEventListener('click', function(event){
   
    event.preventDefault();
    tripRange.value=1
    tripLengh.innerText=tripRange.value;
})


