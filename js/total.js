document.getElementById('checkOut-btn').addEventListener('click',function(){

    const phonePriceMoney=document.getElementById('phn-balance');
    const finalPhonePriceMoney=phonePriceMoney.innerText;
    const NumberPhonePriceMoney=parseFloat(finalPhonePriceMoney);

    const CasePriceMoney=document.getElementById('case-balance');
    const finalCasePriceMoney=CasePriceMoney.innerText;
    const NumberCasePriceMoney=parseFloat(finalCasePriceMoney);

    const theTotalPriceOfMoney=NumberPhonePriceMoney+NumberCasePriceMoney;

    const theDisplaySub= document.getElementById('subtotal');
    theDisplaySub.innerText=theTotalPriceOfMoney;
    
    const taxElement=document.getElementById('tax');
    const taxElementString=taxElement.innerText;
    const NumberTaxElement=parseFloat(taxElementString);
    
    const finalTotal=theTotalPriceOfMoney+NumberTaxElement;
    
    const TotalField=document.getElementById('total');
    TotalField.innerText=finalTotal;
})

