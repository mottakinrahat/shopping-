
function incrementing(increases){
    const phoneNumberField=document.getElementById(increases);
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
