// coercion confusion between addition - concatenation operator
console.log(1 + 1); //2
console.log('1' + 1); //11
console.log(1 + '1'); //11
console.log('1' + '1'); //11

console.log('2' - '1'); //1
console.log('2' - '-2'); //4

// >=
null >= 0; //true => operator >= is converted into <  => null < 0 is false so opposite 'should be' true

// instanceOf