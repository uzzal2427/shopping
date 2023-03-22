document.getElementById('phone-number-plas').addEventListener('click', function(){
    const phoneNumberUpdate = updatePhoneNumber(true);

    PhonePrice(phoneNumberUpdate);
    calculateSubTotal();   
})

document.getElementById('phone-number-minus').addEventListener('click', function(){
    const phoneNumberUpdate = updatePhoneNumber(false);

    PhonePrice(phoneNumberUpdate);
    calculateSubTotal(); 
})


