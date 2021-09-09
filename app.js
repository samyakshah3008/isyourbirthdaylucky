const dateOfBirth = document.querySelector("#date-of-birth")
const luckyNumber = document.querySelector("#lucky-number")
const checkNumberButton = document.querySelector("#check-number")
const outputBox = document.querySelector("#output-box")



        outputBox.style.color = "#2962FF";
        outputBox.style.fontSize = "larger"

alert("Please note that we are not storing your data anywhere")



function compareValues(sum,luckyNumber){
    if(sum%luckyNumber===0){
        outputBox.innerText = "Yay,you are lucky!" 

    } 
    else{
        outputBox.innerText="You are not that lucky!"
        
    }
}


function checkBirthDateIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    
    if(luckyNumber.value === ""){
        outputBox.innerText = "Fill the lucky number so we can calculate"
    } else if(luckyNumber.value < 0){
        outputBox.innerText = "Negative values not allowed"
    } else if(dateOfBirth.value === ""){
        outputBox.innerText = "Fill your date of birth so we can calculate"
    } 
    
    else{
        compareValues(sum,luckyNumber.value)
    }

}




function calculateSum(dob) {
   dob = dob.replaceAll("-","");
   let sum = 0;
   for(let index=0;index<dob.length; index++){
       sum = sum + Number(dob.charAt(index));
   }
   return sum;
}

checkNumberButton.addEventListener('click', checkBirthDateIsLucky)