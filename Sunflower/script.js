let kolvoNumber;
let clumbNumber;
let plantTime;

let sunFlowerTime = 1;
let potatoTime = 5;
let pumpkinTime = 30;
let carrotTime = 60;
let cabbageTime = 120;
let beetrootTime = 240;
let cauliflowerTime = 480;
let parsnipTime = 720;
let radishTime = 1440;
let wheatTime = 1440;


let sunFlowerPrice = 0.000525;
let potatoPrice = 0.003675;
let pumpkinPrice = 0.0105;
let carrotPrice = 0.021;
let cabbagePrice = 0.039375;
let beetrootPrice = 0.0735;
let cauliflowerPrice = 0.1115625;
let parsnipPrice = 0.170625;
let radishPrice = 0.249375;
let wheatPrice = 0.18375;

let plant = document.getElementById("plant")
let kolvo = document.getElementById("kolvo")
let clumb = document.getElementById("clumb")
let btn = document.getElementById("btn")
let minute = document.getElementById("minute")
let hour = document.getElementById("hour")
let day = document.getElementById("day")
let result = document.getElementById("result")

kolvo.disabled = true;
clumb.disabled = true;
btn.disabled = true;


plant.addEventListener("change", function(e){
    if(e.target.value == 1){
        kolvo.value = null;
        clumb.value = null;
        day.textContent = 0 + " days"
        hour.textContent = 0 + " hours"
        minute.textContent = 0 + " minutes"
        result.textContent = "0 MATIC"
        // !---------obnul
        needPrice = sunFlowerPrice;
        plantTime = sunFlowerTime;
        kolvo.disabled = false;
        clumb.disabled = false;
    }else if(e.target.value == 2){
        kolvo.value = null;
        clumb.value = null;
        day.textContent = 0 + " days"
        hour.textContent = 0 + " hours"
        minute.textContent = 0 + " minutes"
        result.textContent = "0 MATIC"
        // !---------obnul
        needPrice = potatoPrice;
        plantTime = potatoTime;
        kolvo.disabled = false;
        clumb.disabled = false;
    }else if(e.target.value == 3){
        kolvo.value = null;
        clumb.value = null;
        day.textContent = 0 + " days"
        hour.textContent = 0 + " hours"
        minute.textContent = 0 + " minutes"
        result.textContent = "0 MATIC"
        // !---------obnul
        needPrice = pumpkinPrice;
        plantTime = pumpkinTime;
        kolvo.disabled = false;
        clumb.disabled = false;
    }else if(e.target.value == 4){
        kolvo.value = null;
        clumb.value = null;
        day.textContent = 0 + " days"
        hour.textContent = 0 + " hours"
        minute.textContent = 0 + " minutes"
        result.textContent = "0 MATIC"
        // !---------obnul
        needPrice = carrotPrice;
        plantTime = carrotTime;
        kolvo.disabled = false;
        clumb.disabled = false;
    }else if(e.target.value == 5){
        kolvo.value = null;
        clumb.value = null;
        day.textContent = 0 + " days"
        hour.textContent = 0 + " hours"
        minute.textContent = 0 + " minutes"
        result.textContent = "0 MATIC"
        // !---------obnul
        needPrice = cabbagePrice;
        plantTime = cabbageTime;
        kolvo.disabled = false;
        clumb.disabled = false;
    }else if(e.target.value == 6){
        kolvo.value = null;
        clumb.value = null;
        day.textContent = 0 + " days"
        hour.textContent = 0 + " hours"
        minute.textContent = 0 + " minutes"
        result.textContent = "0 MATIC"
        // !---------obnul
        needPrice = beetrootPrice;
        plantTime = beetrootTime;
        kolvo.disabled = false;
        clumb.disabled = false;
    }else if(e.target.value == 7){
        kolvo.value = null;
        clumb.value = null;
        day.textContent = 0 + " days"
        hour.textContent = 0 + " hours"
        minute.textContent = 0 + " minutes"
        result.textContent = "0 MATIC"
        // !---------obnul
        needPrice = cauliflowerPrice;
        plantTime = cauliflowerTime;
        kolvo.disabled = false;
        clumb.disabled = false;
    }else if(e.target.value == 8){
        kolvo.value = null;
        clumb.value = null;
        day.textContent = 0 + " days"
        hour.textContent = 0 + " hours"
        minute.textContent = 0 + " minutes"
        result.textContent = "0 MATIC"
        // !---------obnul
        needPrice = parsnipPrice;
        plantTime = parsnipTime;
        kolvo.disabled = false;
        clumb.disabled = false;
    }else if(e.target.value == 9){
        kolvo.value = null;
        clumb.value = null;
        day.textContent = 0 + " days"
        hour.textContent = 0 + " hours"
        minute.textContent = 0 + " minutes"
        result.textContent = "0 MATIC"
        // !---------obnul
        needPrice = radishPrice;
        plantTime = radishTime;
        kolvo.disabled = false;
        clumb.disabled = false;
    }else if(e.target.value == 10){
        kolvo.value = null;
        clumb.value = null;
        day.textContent = 0 + " days"
        hour.textContent = 0 + " hours"
        minute.textContent = 0 + " minutes"
        result.textContent = "0 MATIC"
        // !---------obnul
        needPrice = wheatPrice;
        plantTime = wheatTime;
        kolvo.disabled = false;
        clumb.disabled = false;
    }
})

kolvo.oninput = function(){
        clumb.value = null;
        day.textContent = 0 + " days"
        hour.textContent = 0 + " hours"
        minute.textContent = 0 + " minutes"
        result.textContent = "0 MATIC"
    kolvoNumber = kolvo.value;
    if(kolvo.value !== '' && clumb.value !== ''){
        btn.disabled = false;
    }else{
        btn.disabled = true;
    }
}

clumb.oninput = function(){
        day.textContent = 0 + " days"
        hour.textContent = 0 + " hours"
        minute.textContent = 0 + " minutes"
        result.textContent = "0 MATIC"
    clumbNumber = clumb.value
    if(kolvo.value !== '' && clumb.value !== '' && clumb.value <= 22){
        btn.disabled = false;
    }else{
        btn.disabled = true;
    }
}


let hourCount;
btn.addEventListener("click", function(){
    let cicles = Math.ceil(kolvoNumber / clumbNumber)
    needTime = cicles * plantTime;
    if(needTime <= 60){
        day.textContent = 0 + " days"
        hour.textContent = 0 + " hours"
        minute.textContent = needTime + " minutes"
        result.textContent = needPrice * kolvoNumber + " MATIC"
    }else if(needTime > 60 && needTime < 1440){
        day.textContent = 0 + " days"
        hour.textContent = Math.floor(needTime / 60) + " hours"
        minute.textContent = needTime % 60 + " minutes"   
        result.textContent = needPrice * kolvoNumber + " MATIC"
    }else if(needTime > 1440){
        let daysCount = Math.floor(needTime / 1440)
        day.textContent = daysCount + " days";
        let daysOst = Math.floor(needTime % 1440)
        if(daysOst > 60){
            hourCount= Math.floor(daysOst / 60)
            hour.textContent = hourCount + " hours"
            minute.textContent = (daysOst % 60) + " minutes"
        }else if(hourCount < 60){
            hour.textContent = 0 + " hours"
            minute.textContent = daysOst + " minutes"
        }
        result.textContent = needPrice * kolvoNumber + " MATIC"
    }

    
    
})