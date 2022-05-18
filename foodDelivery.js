function foodDelivery(input){
let chickenMenus = Number(input[0]);
let fishMenus = Number(input[1]);
let veganMenus = Number(input[2]);

let chickenMenuPrice = chickenMenus * 10.35;
let fishMenuPrice = fishMenus * 12.40;
let veganMenuPrice = veganMenus * 8.15;
let totalMenu = chickenMenuPrice + fishMenuPrice + veganMenuPrice;

let totalSum = totalMenu + (totalMenu * 0.2) + 2.50;

console.log(totalSum)
}

foodDelivery(["9","2","6"])