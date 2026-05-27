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

const exshippingInput = document.getElementById('exshipping')
console.log('exshippingInput')

const cardNumberInput = document.getElementById('card-number')
console.log('cardNumberInput')

const expiryDateInput = document.getElementById('expiry-date')
console.log('expiryDateInput')

const cvcInput = document.getElementById('cvc')
console.log('cvcInput')

const purchaseInput = document.getElementById('purchase')
console.log('purchaseInput')

const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
console.log(cartItems)

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

//Validate form


function validateForm() {
    console.log('validate form')


    const isFormValid =
        fnameInput.value.trim() !== '' &&
        lnameInput.value.trim() !== '' &&
        addressInput.value.trim() !== '' &&
        cityInput.value.trim() !== '' &&
        postalInput.value.trim() !== '' &&
        (stshippingInput.checked || exshippingInput.checked) &&
        cardNumberInput.value.trim() !== '' &&
        expiryDateInput.value.trim() !== '' &&
        cvcInput.value.trim() !== ''

    purchaseInput.disabled = !isFormValid
}

fnameInput.addEventListener('input', validateForm)
lnameInput.addEventListener('input', validateForm)
addressInput.addEventListener('input', validateForm)
cityInput.addEventListener('input', validateForm)
postalInput.addEventListener('input', validateForm)
cardNumberInput.addEventListener('input', validateForm)
expiryDateInput.addEventListener('input', validateForm)
cvcInput.addEventListener('input', validateForm)
stshippingInput.addEventListener('change', validateForm)
exshippingInput.addEventListener('change', validateForm)


//Collect data

purchaseInput.addEventListener('click', () => {
    const orderData = {
        customer: {
            fname: fnameInput.value.trim(),
            lname: lnameInput.value.trim(),
            address: addressInput.value.trim(),
            city: cityInput.value.trim(),
            postal: postalInput.value.trim(),
        },
        payment: {
            cardNumber: cardNumberInput.value.trim(),
            expiryDate: expiryDateInput.value.trim(),
            cvc: cvcInput.value.trim(),
        },
        shipping: stshippingInput.checked ? 'standard' : exshippingInput.checked ? 'express' : '',
        products: cartItems
    }


    localStorage.setItem('orderData', JSON.stringify(orderData))
    console.log("Collected data:", orderData)
    window.location.href = './review.html'
})
