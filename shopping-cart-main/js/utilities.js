function updateCaseNumber(isIncrease){
    const caseInputField = document.getElementById('case-input-field');
    const caseInputValueString = caseInputField.value ;
    const caseInputValue = parseInt(caseInputValueString);

    let newCaseNumber ;

    if(isIncrease === true){
        newCaseNumber = caseInputValue + 1;
    }
    else{
        newCaseNumber = caseInputValue -1;
    }
    caseInputField.value = newCaseNumber;

    return newCaseNumber;
}

function price (priceUpdate){

    const totalCasePrice = priceUpdate * 59;

    const oldCasePrice = document.getElementById('total-case-price');
    oldCasePrice.innerText = totalCasePrice;
}

function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-field');
    const phoneNumberString = phoneNumberField.value ;
    const phoneNumber = parseInt(phoneNumberString);

    let phoneNumberUpdate ;

    if(isIncrease === true){
        phoneNumberUpdate = phoneNumber + 1;
    }
    else{
        phoneNumberUpdate = phoneNumber - 1;
    }
    phoneNumberField.value = phoneNumberUpdate;

    return phoneNumberUpdate;
} 

function PhonePrice (phonePriceUpdate){
    const totalPhonePrice = phonePriceUpdate * 1219;

    const phonePriceField = document.getElementById('total-phone-price');
    phonePriceField.innerText = totalPhonePrice;
}

function getElementValueById(elementId){
    const phoneTotalPriceElement = document.getElementById(elementId);
    const phoneTotalPriceString = phoneTotalPriceElement.innerText;
    const phoneTotalPrice = parseInt(phoneTotalPriceString);
    return phoneTotalPrice;
    
}

function calculateSubTotal(){

    const subTotalPhone = getElementValueById('total-phone-price')
    const subTotalCase = getElementValueById('total-case-price')

    const subTotal = subTotalPhone + subTotalCase;

    setSubtotalElemet('total-price', subTotal);

    // calculate tex

    const totalTexString = (subTotal * 0.15).toFixed(2);
    const totalTex = parseFloat(totalTexString)
    setSubtotalElemet('vat', totalTex)

    const finalPrice = subTotal + totalTex;
    setSubtotalElemet('total-price-vat', finalPrice);
   
}

function setSubtotalElemet(subTotal, value){
    const oldSubtotal = document.getElementById(subTotal);
    oldSubtotal.innerText = value ;
}
    