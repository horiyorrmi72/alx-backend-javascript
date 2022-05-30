var solution = function(digits,number){
    let arr = digits.split('');
    return arr.reduce((accumulator,numbers) => accumulator + indexof(numbers),0);

}
// digits is a string of how digits(0-9) is arranged
// num is a string of number to be typed with one finger
// output is the index of the num[i] 
console.log(solution('0123456789','110'))