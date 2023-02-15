
function increment(increase){
    const caseNumberField=document.getElementById('case-number-field');
    const caseNumberString=caseNumberField.value;
    const previousCaseNum=parseInt(caseNumberString);
        
     let newCaseNumber=0;
     if(increase===true){
       newCaseNumber=previousCaseNum+1;
     }
     else{
        newCaseNumber=previousCaseNum-1;
     }
     caseNumberField.value=newCaseNumber;
     return newCaseNumber;
}
function updateCaseTotalNumber(newCaseNumber){
    const caseTotalPrice=newCaseNumber*1240;
    const theTotalPrice=document.getElementById('phn-balance');
    theTotalPrice.innerText=caseTotalPrice;
}


document.getElementById('btn-case-plus').addEventListener('click',function(){
const newCaseNumber=increment(true);
updateCaseTotalNumber(newCaseNumber);
})

document.getElementById('btn-case-minus').addEventListener('click',function(){
const newCaseNumber=increment(false);
 updateCaseTotalNumber(newCaseNumber);
})