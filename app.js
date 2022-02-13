function updateCaseNumber(product,price,isIncresing){
   const caseInput = document.getElementById(product + '-number');
   let caseNumber = caseInput.value;
   if(isIncresing == true){
      // caseInput.value = parseInt(caseNumber) + 1;
      caseNumber = parseInt(caseNumber) + 1;
   }else if(caseNumber > 0){
      caseNumber = parseInt(caseNumber) - 1;
      // caseInput.value = parseInt(caseNumber) - 1;
   }

   caseInput.value = caseNumber;
   // update case total;
   const caseTotal = document.getElementById(product + '-total');
   caseTotal.innerText = caseNumber * price;
}
//phone number increse - decrese event;

document.getElementById('phone-plus').addEventListener('click',function(){
   // console.log('phone-plus click');
   updateCaseNumber('phone',1219, true);
})

document.getElementById('phone-minus').addEventListener('click',function(){
   updateCaseNumber('phone',1219, false);

})

// case number increse - decrese event;

document.getElementById('case-plus').addEventListener('click',function(){
   // console.log('case-plus click')

   // const caseInput = document.getElementById('case-number');
   // const caseNumber = caseInput.value; // console.log(caseNumber);
   // caseInput.value = parseInt(caseNumber) + 1;
   
   updateCaseNumber('case', 59, true);

})

document.getElementById('case-minus').addEventListener('click',function(){
   // const caseInput = document.getElementById('case-number');
   // const caseNumber = caseInput.value; // console.log(caseNumber);
   // caseInput.value = parseInt(caseNumber) - 1;
   updateCaseNumber('case' , 59, false);
})