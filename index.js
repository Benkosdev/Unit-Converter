let metersFeetEl = document.getElementById("metersFeet-el");
let litersGallonsEl = document.getElementById("litersGallons-el");
let kilogramsPounds = document.getElementById("kilogramsPounds-el");
let btnEl = document.getElementById("btn-el");
let inputEl = document.getElementById("input-el");

const meter = 3.281;
const gallons = 0.264;
const kilogram = 2.204;
const liters = 3.78541;
const pounds = 2.204;



//Convert from meters to feet - feets to meters
function metersAndFeets() {
    let metersToFeets = inputEl.value * meter;
    let feetsToMeters = inputEl.value / meter;

    metersFeetEl.textContent = `
        ${inputEl.value} Meters = ${metersToFeets.toFixed(3)} feets
     |
        ${inputEl.value} Feets = ${feetsToMeters.toFixed(4)} meters `;
}

//Convert liters to gallons - gallons to liters
function litersAndGallons() {
    let litersToGallons = inputEl.value * gallons;
    let GallonsToLiters = inputEl.value * liters;

    litersGallonsEl.textContent = `
        ${inputEl.value} liters = ${litersToGallons.toFixed(4)} gallons
     |
        ${inputEl.value} gallons = ${GallonsToLiters.toFixed(4)} liters `;
}

//Convert Kilograms to pounds - Pounds to kilograms 
function kilogramsAndPounds() {
    let kilogramsToPounds = inputEl.value * pounds;
    let poundsToKilograms = inputEl.value / kilogram;

    kilogramsPounds.textContent = `
        ${inputEl.value} Kilograms = ${kilogramsToPounds.toFixed(4)} pounds
     |
        ${inputEl.value} pounds = ${poundsToKilograms.toFixed(4)} kilograms `;
}



btnEl.addEventListener("click", function() {
    metersAndFeets()
    litersAndGallons()
    kilogramsAndPounds()

})