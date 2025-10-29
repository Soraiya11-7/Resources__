
function calculateTax(income, expenses) {
    if(income < 0 || expenses < 0 || expenses > income){
        return "Invalid Input"; 
    }

    let tax = (income - expenses) * 0.2 ;
    return tax;
}


function sendNotification(email) {
    if(!email.includes('@') || typeof email !== 'string'){
        return "Invalid Email";
    }

    let count = 0;
    for(let i=0; i<email.length; i++){
        if(email[i] === '@'){
            count++;
        }
        if(count > 1){
            return "Invalid Email";
        }   
    }

    let name = email.split('@');
    return name[0]+' sent you an email from '+name[1];
}


function checkDigitsInName(name) {
    if(typeof name !== "string"){
        return "Invalid Input";
    }
  
    let result = false;
    for(let i = 0; i<name.length; i++){
        if(!isNaN(name[i])){
            result = true;
        }
    }
    return result;
}


function calculateFinalScore(obj) {

    if(typeof obj !== "object" || obj.name === undefined || obj.testScore === undefined || obj.schoolGrade === undefined || obj.isFFamily === undefined ){
        return "Invalid Input";
    }

    if(typeof obj.name !== 'string' || typeof obj.testScore !== 'number' || typeof obj.schoolGrade !== 'number' || typeof obj.isFFamily !== 'boolean' || obj.testScore > 50 || obj.schoolGrade > 30){
        return "Invalid Input";
    }

    let totalScore = obj.testScore + obj.schoolGrade;
    
    if(obj.isFFamily === true){
        totalScore += 20;
    }
    
    if(totalScore >= 80){
        return true;
    }
    else{
        return false;
    }
}


function waitingTime(waitingTimes ,serialNumber) {
    if(Array.isArray(waitingTimes) === false || typeof serialNumber !== 'number' || serialNumber <= waitingTimes.length){
        return "Invalid Input";
    }

    let totalTime = 0;
    for(let time of waitingTimes){
        totalTime += time;
    }
   
    let avgInterviewTime = Math.round(totalTime/waitingTimes.length);
    let remainingCandidate = (serialNumber-1) - waitingTimes.length ;
    return remainingCandidate*avgInterviewTime;
}





