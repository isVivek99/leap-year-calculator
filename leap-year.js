var dateInput = document.querySelector("#input-date");
var button = document.querySelector("#btn-check");
var outputText = document.querySelector("#txt-output");


button.addEventListener("click",buttonClick);

function buttonClick(){
    var dateToday = new Date(dateInput.value);
    year = dateToday.getFullYear();
    console.log(year);

    if(leapyear(year)){
        console.log("leap year");
        outputText.innerText = "leap year!!";
    }else{
        console.log("not a leap year");
        outputText.innerText = "not a leap year!!";
    }

}
function leapyear(number){
    let year = number;
    
    if(year%4==0){
        return true;

    }else if(year%100==0){
        return true;

    }else if(year%400==0){
        return true;
    
    }
}

