function numbers(input){
let theNum = Number(input[0]);

if (theNum < 100) {
    console.log("Less than 100");
} else if (theNum <= 200) {
    console.log("Between 100 and 200");
} else {
    console.log("Greater than 200");
}


}

numbers(["95"])