const equationFull: string = "2x-5=7";


function splitEquation(equation: string): string[] {
    let inputEquationLeft: string = equationFull.split("=")[0];
    let inputEquationRight: string = equationFull.split("=")[1];
    return [inputEquationLeft, inputEquationRight];
}


let equationLeft: string = splitEquation(equationFull)[0];
let equationRight: string = splitEquation(equationFull)[1];

console.log(equationLeft, "\n", equationRight);

function splitLeft(equationLeft: string): string[] {
    console.log(equationLeft.split(""));
    return equationLeft.split("");
}

let arrayOfLeft: string[] = splitLeft(equationLeft);

// function getCoefficientX(input: string[]): number {
//     let coefficientX: number = parseInt(input[0]);
//     console.log(coefficientX);
//     return coefficientX;
// }

let vargen: number[] = [];
let numbers: number[] = new Array(100);
for (let i: number = 0; i < numbers.length; i++) {
    numbers[i] = i;
}
console.log(numbers);
//console.log(arrayOfLeft.length)

for (let i = 0; i < arrayOfLeft.length; i++) {
    vargen[i] = (arrayOfLeft[i]);
    console.log(arrayOfLeft[i], "SEXXXX");
    console.log(vargen, "KATYYYY");
}

