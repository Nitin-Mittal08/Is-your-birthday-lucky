const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

function isBirthdayLucky(){
      const dob = dateOfBirth.value;
      const sum = calculateSum(dob);
      //console.log(sum);
      if(dob&&luckyNumber.value>0){
        compareValues(sum, luckyNumber.value)
      }else{
        outputBox.innerText = "Entered Invalid Values";
      }
      


}

function compareValues(sum, luckyNumber){
    if(sum %luckyNumber==0){
        outputBox.innerText = "Your Birthday is Lucky🥳";
    }
    else{
        outputBox.innerText = "Your Birthday isn't Lucky, anyways you make your own luck😎";
    }
}

function calculateSum(dob){
   dob =  dob.replaceAll("-","");
    let sum = 0;

    for(let i = 0;i<dob.length;i++){
        sum = sum + Number(dob.charAt(i));
    }

    return sum;
}

checkButton.addEventListener('click', isBirthdayLucky);
