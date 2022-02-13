function updateProductNumber(product,price,isIncresing){
   const productInput = document.getElementById(product + '-number');
   let productNumber = productInput.value;
   if(isIncresing == true){
      // productInput.value = parseInt(productNumber) + 1;
      productNumber = parseInt(productNumber) + 1;
   }else if(productNumber > 0){
      productNumber = parseInt(productNumber) - 1;
      // productInput.value = parseInt(productNumber) - 1;
   }

   productInput.value = productNumber;
   // update case total;
   const productTotal = document.getElementById(product + '-total');
   productTotal.innerText = productNumber * price;
   // product total
   calculateTotal();
}


function getInputValue(product){
   const productInput = document.getElementById(product +  '-number');
   const productNumber = parseInt(productInput.value);
   return productNumber;
}
function calculateTotal(){
   // const productInput = document.getElementById('phone-number');
   // const productNumber = parseInt(productInput.value);
   const phoneTotal = getInputValue('phone') * 1219;
   const caseTotal = getInputValue('case') * 59;
   const subTotal = phoneTotal + caseTotal;
   const tax = subTotal / 10;
   const totalPrice = subTotal + tax;
   // console.log(subTotal);
   //update on the html
   document.getElementById('sub-total').innerText = subTotal;
   document.getElementById('tex-amount').innerText = tax;
   document.getElementById('total-price').innerText = totalPrice;
}

//phone number increse - decrese event;

document.getElementById('phone-plus').addEventListener('click',function(){
   // console.log('phone-plus click');
   updateProductNumber('phone',1219, true);
})

document.getElementById('phone-minus').addEventListener('click',function(){
   updateProductNumber('phone',1219, false);

})

// case number increse - decrese event;

document.getElementById('case-plus').addEventListener('click',function(){
   // console.log('case-plus click')

   // const productInput = document.getElementById('case-number');
   // const productNumber = productInput.value; // console.log(productNumber);
   // productInput.value = parseInt(productNumber) + 1;
   
   updateProductNumber('case', 59, true);

})

document.getElementById('case-minus').addEventListener('click',function(){
   // const productInput = document.getElementById('case-number');
   // const productNumber = productInput.value; // console.log(productNumber);
   // productInput.value = parseInt(productNumber) - 1;
   updateProductNumber('case' , 59, false);
})