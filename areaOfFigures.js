function areaOfFigures(input){
let shape = (input[0]);
let area = 0;
if (shape === "square") {
   let side = Number(input[1]);
   area = side * side;
} else if (shape === "rectangle") {
    let sideA = Number(input[1]);
    let sideB = Number(input[2]);
    area = sideA * sideB;
} else if (shape === "circle") {
    let sideCircle = Number(input[1])
    area = Math.PI * sideCircle * sideCircle;
} else if (shape === "triangle") {
    let lenght = Number(input[1])
    let height = Number(input[2])
    area = lenght * height / 2;
}
console.log(area.toFixed(3))

}

areaOfFigures(["square", "5"])