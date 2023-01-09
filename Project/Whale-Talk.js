const input = "turpentine and turtles";
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for(let inputIndex = 0; inputIndex < input.length; inputIndex++){
  // double the letter e
  if(input[inputIndex] === 'e'){
    resultArray.push(input[inputIndex])
  }
  // Double the letter u
  if(input[inputIndex] === 'u'){
    resultArray.push(input[inputIndex])
  }
  // inner loop to find if the letter match with the vowels
  for(let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++){
    if(input[inputIndex] === vowels[vowelsIndex]){
      console.log('The input ' + input[inputIndex] + ' ' +'The vowels ' + vowels[vowelsIndex])
      resultArray.push(input[inputIndex]);
    }
  }
}
console.log(resultArray)
let resultString = resultArray.join('').toUpperCase();
console.log(resultString)