
function incrementing(increases){
    const phoneNumberField=document.getElementById('phone-number-field');
    const phoneNumberString=phoneNumberField.value;
    const previousPhoneNum=parseInt(phoneNumberString);
        
     let newPhoneNumber;
     if(increases===true){
      newPhoneNumber= previousPhoneNum+1;
     }
     else{
      newPhoneNumber= previousPhoneNum-1;
     }
     phoneNumberField.value=newPhoneNumber;
     return newPhoneNumber;
}
function numUpdatingTot(newPhoneNumber){
   
    const theTotalPrices=document.getElementById('case-balance');
    const phoneTotalPrices=newPhoneNumber*59;
    theTotalPrices.innerText=phoneTotalPrices;
}


document.getElementById('btn-mobile-plus').addEventListener('click',function(){
const newPhoneNumber=incrementing(true);
numUpdatingTot(newPhoneNumber);
})

document.getElementById('btn-mobile-minus').addEventListener('click',function(){
const newPhoneNumber=incrementing(false);
 numUpdatingTot(newPhoneNumber);
})