const radius = [2,3,4,5,6];

const calcuateArea = (radius) =>{
    const output = [];
    for(let i = 0 ; i < radius.length ; i++){
        output.push(Math.PI  * radius[i] * radius[i])
    }
    return output;
}

console.log("Area of Circle :-" , calcuateArea(radius));

const calcuateCircumfernce = (radius) =>{
    const output = [];
    for(let i = 0 ; i < radius.length ; i++){
        output.push(2 * Math.PI  * radius[i])
    }
    return output;
}

console.log("Circumfernce of Circle :-" , calcuateCircumfernce(radius));

const calcuateDiameter = (radius) =>{
    const output = [];
    for(let i = 0 ; i < radius.length ; i++){
        output.push(2 * radius[i])
    }
    return output;
}

console.log("Diameter of Circle :-" , calcuateDiameter(radius))