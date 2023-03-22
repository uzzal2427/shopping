
document.getElementById('btn-case-field').addEventListener('click', function(){
   const newCaseNumber = updateCaseNumber(true);

   price(newCaseNumber);
   calculateSubTotal(); 

})
document.getElementById('btn-case-minas').addEventListener('click', function(){

   const newCaseNumber = updateCaseNumber(false);

   price(newCaseNumber);
   calculateSubTotal(); 

})
