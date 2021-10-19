// linking html world to javascript world by document querySelector method
const dateOfBirth = document.querySelector("#date-of-birth")
const luckyNumber = document.querySelector("#lucky-number")
const checkNumberButton = document.querySelector("#check-number")
const outputBox = document.querySelector("#output-box")

// Applying initial styling to output message
outputBox.style.color = "#2962FF";
outputBox.style.fontSize = "larger"

// Notice to client
alert("Please note that we are not storing your data anywhere") 

// Adding event listener to check button
checkNumberButton.addEventListener('click', checkBirthDateIsLucky)

function checkBirthDateIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob); // calling calculateSum function
    
    // Handling corner cases with if else branching and then calling a function in else statement
    if(luckyNumber.value === ""){
        outputBox.innerText = "Fill the lucky number so we can calculate"
    } else if(luckyNumber.value < 0){
        outputBox.innerText = "Negative values not allowed"
    } else if(dateOfBirth.value === ""){
        outputBox.innerText = "Fill your date of birth so we can calculate"
    } 
    
    else{
        compareValues(sum,luckyNumber.value) // calling compareValues function
    }

}

// Logic for being lucky is if birthdate sum divided by lucky number and if remainder comes to zero,he is lucky else unlucky
function compareValues(sum,luckyNumber){
    if(sum%luckyNumber===0){
        outputBox.innerText = "Yay,you are lucky!" 

    } 
    else{
        outputBox.innerText="You are not that lucky!"
        
    }
}

function calculateSum(dob) {
   dob = dob.replaceAll("-",""); // we just want to add digits so removing "-" and ""
   let sum = 0;
   // dob.length will be ddmmyyyy so total 8
   for(let index=0;index<dob.length; index++){
       sum = sum + Number(dob.charAt(index));  // dob.charAT(index) will contain all the digits in ddmmyyyy which we want to add up  
   }
   return sum;
}
