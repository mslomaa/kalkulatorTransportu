
const day = document.querySelector('.day');
const km = document.querySelector('.km');
const person = document.querySelector('.person');
const checkResult = document.querySelector('.checkResult');
const submitButton = document.querySelector('.btn');



submitButton.addEventListener('click', function(){
    newKm = calcKm()
    newPerson = calcPerson()
    newDay = calcDay()

    if(km.value < 200){
        oneDay = calcKm();
        return checkResult.innerHTML = oneDay + " plnów";

    }

    if (km.value >= 200) {
        newPrice = newPerson + newDay;
        return checkResult.innerHTML = newPrice + " plnów";
    }
})

function calcKm(){
    if(km.value < 200){
        if(person.value < 20){
            priceCalc = 1500
            return priceCalc;
        }
        else if (person.value < 49){
            priceCalc = 2500;
            return priceCalc;
        }
        else if (person.value < 59){
            priceCalc = 3000;
            return priceCalc;
        }
        else if (person.value < 69){
            priceCalc = 4000;
            return priceCalc;
        }
        else if (person.value < 79){
            priceCalc = 5000;
            return priceCalc;
        }
        else if (person.value < 98){
            priceCalc = 5500;
            return priceCalc;
        }
        else {
            priceCalc = "Skontaktuj się ze Słomą";
            return priceCalc;
        }
    }
    if(km.value >= 200){
        calcPerson();
    }
}

function calcPerson(){
    if(person.value < 20){
        priceCalc = km.value * 3;
        return priceCalc;
    }
    else if (person.value < 49){
        priceCalc = km.value * 4.5
        return priceCalc;
    }
    else if (person.value < 59) {
        priceCalc = km.value * 4.8
        return priceCalc;
    }
    else if (person.value < 69){
        priceCalc = km.value * 5
        return priceCalc;
    }
    else if (person.value < 98){
        priceCalc = km.value * 9
        return priceCalc;
    }
    else if (person.value <118){
        priceCalc = km.value * 12
        return priceCalc;
    }
    else {
        priceCalc = 'mamy jakis problem';
        return priceCalc;
    }
}

function calcDay(){
    if (day.value === 1 && km.value < 301 && person.value < 49){
        return 1;
    }
    else if (day.value == 1 && km.value < 301 && person.value < 79){
        priceDay = 500;
        return priceDay;;
    }
    else if (day.value == 2 && km.value < 200 && person.value < 49){
        return 1;
    }
    else if (day.value == 2 && km.value > 200){
        priceDay = 500;
        return priceDay;
    }
    else if(day.value >= 3 && person.value < 49){
        priceDay = day.value * 500;
        return priceDay;
    }
    else if(day.value >= 3 && person.value >= 49){
        priceDay = day.value * 1000;
        return priceDay;
    }
    else {
        priceDay = "mamy jakis problem";
        return priceDay;
    }

}