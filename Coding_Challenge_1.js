let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = 0;
   
markBMI = markWeight/(markHeight**2);

let johnBMI = 0;
johnBMI = johnWeight/(johnHeight**2);

console.log(markBMI);
console.log(johnBMI);

let markHigherBMI = markBMI>johnBMI;
// let markHigherBMI = johnBMI>markBMI;
console.log(markHigherBMI);

//Date 2
markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76

markBMI = markWeight/(markHeight * markHeight);
johnBMI = johnWeight/(johnHeight * johnHeight);

console.log(markBMI);
console.log(johnBMI);
markHigherBMI = markBMI>johnBMI;
console.log(markHigherBMI);


