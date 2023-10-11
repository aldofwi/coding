// Given an array of strings arrays : [['hello', 'goodbye', 'hello', 'alpha'], ['alpha', 'bravo']]
// Find all the words that only appear in a SINGLE array. For example, 
// this would return ['hello', 'goodbye', 'bravo'].

const array = [['hello', 'goodbye', 'hello', 'alpha'], ['hello', 'bravo']];

// Identify all the words.
const getUniqueWords = (arrayStr) => {
  let currentArray = [];

  for (let i = 0; i < arrayStr.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if(!currentArray.includes(arrayStr[i][j])) currentArray.push(arrayStr[i][j]);
    }
  }
  //console.log(currentArray);
  checkRepetition(currentArray);
}

const checkRepetition = (curr) => {

  let num = 0;
  let finalArray = [];

  curr.forEach(element => {

    for (let i = 0; i < array.length; i++) {
      if (array[i].includes(element)) num++;
      //console.log(element, " ", num);
    }
    if(num<=1) finalArray.push(element);
    num=0;

  });

  console.log(finalArray);

}

getUniqueWords(array);