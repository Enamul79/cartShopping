function updateCaseNumber(isIncresing){
   const caseInput = document.getElementById('case-number');
   const caseNumber = caseInput.value;
   if(isIncresing == true){
      caseInput.value = parseInt(caseNumber) + 1;
   }else if(caseNumber > 0){
      caseInput.value = parseInt(caseNumber) - 1;
   }
   // update case total;
   const caseTotal = document.getElementById('case-total');
   caseTotal.innerText = caseNumber * 59;
}


document.getElementById('case-plus').addEventListener('click',function(){
   // console.log('case-plus click')

   // const caseInput = document.getElementById('case-number');
   // const caseNumber = caseInput.value; // console.log(caseNumber);
   // caseInput.value = parseInt(caseNumber) + 1;
   
   updateCaseNumber(true);

})

document.getElementById('case-minus').addEventListener('click',function(){
   // const caseInput = document.getElementById('case-number');
   // const caseNumber = caseInput.value; // console.log(caseNumber);
   // caseInput.value = parseInt(caseNumber) - 1;
   updateCaseNumber(false);
})