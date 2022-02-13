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