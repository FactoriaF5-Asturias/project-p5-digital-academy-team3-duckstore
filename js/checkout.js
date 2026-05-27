console.log('connected')


const fnameInput = document.getElementById('fname')
console.log('fnameInput')

const lnameInput = document.getElementById('lname')
console.log('lnameInput')

const addressInput = document.getElementById('address')
console.log('addressInput')

const cityInput = document.getElementById('city')
console.log('cityInput')

const postalInput = document.getElementById('postal')
console.log('postalInput')

const stshippingInput = document.getElementById('stshipping')
console.log('stshippingInput')

const exshippingInput = document.getElementById('stshipping')
console.log('exshippingInput')

const cardNumberInput = document.getElementById('card-number')
console.log('cardNumberInput')

const expiryDateInput = document.getElementById('expiry-date')
console.log('expiryDateInput')

const cvcInput = document.getElementById('cvc')
console.log('cvcInput')

fnameInput.addEventListener('input', () => {
    console.log('First name:', fnameInput.value)
})

lnameInput.addEventListener('input', () => {
    console.log('Last Name:', lnameInput.value)
})

addressInput.addEventListener('input', () => {
    console.log("Address Line 1:", addressInput.value)
})

cityInput.addEventListener('input', () => {
    console.log('City:', cityInput.value)
})

postalInput.addEventListener('input', () => {
    console.log('Postal Code:', postalInput.value)
})

stshippingInput.addEventListener('input', () => {
    console.log('Standard Waddle:', stshippingInput.value)
})

exshippingInput.addEventListener('input', () => {
    console.log('Express Flight:', exshippingInput.value)
})

cardNumberInput.addEventListener('input', () => {
    console.log('Card Number:', cardNumberInput.value)
})

expiryDateInput.addEventListener('input', () => {
    console.log('MM/YY:', expiryDateInput.value)
})
cvcInput.addEventListener('input', () => {
    console.log('CVC:', cvcInput.value)
})