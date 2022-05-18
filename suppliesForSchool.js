function suppliesForSchool(input){
let pens = Number(input[0]);
let markers = Number(input[1]);
let spray = Number(input[2]);
let discount = Number(input[3]);

let penPrice = pens * 5.80;
let markersPrice = markers * 7.20;
let sprayPrice = spray * 1.20;
let priceBeforeDiscount = penPrice + markersPrice + sprayPrice;
let totalSum = priceBeforeDiscount - (priceBeforeDiscount * (discount / 100));

console.log(totalSum);
}

suppliesForSchool(["4","2","5","13"])