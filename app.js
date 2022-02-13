function updateCaseNumber(product,isIncresing){
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
   const caseTotal = document.getElementById('case-total');
   caseTotal.innerText = caseNumber * 59;
}
//phone number increse - decrese event;

document.getElementById('phone-plus').addEventListener('click',function(){
   // console.log('phone-plus click');
   updateCaseNumber(true);
})


// case number increse - decrese event;

document.getElementById('case-plus').addEventListener('click',function(){
   // console.log('case-plus click')

   // const caseInput = document.getElementById('case-number');
   // const caseNumber = caseInput.value; // console.log(caseNumber);
   // caseInput.value = parseInt(caseNumber) + 1;
   
   updateCaseNumber('case', true);

})

document.getElementById('case-minus').addEventListener('click',function(){
   // const caseInput = document.getElementById('case-number');
   // const caseNumber = caseInput.value; // console.log(caseNumber);
   // caseInput.value = parseInt(caseNumber) - 1;
   updateCaseNumber('case' , false);
})