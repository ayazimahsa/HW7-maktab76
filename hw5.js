// filter

Array.prototype.newFilter = function(value) {
    const array = [];
    for (let i = 0; i < this.length; i++) {
      if (value(this[i])) {
        array.push(this[i]);
      }
    }
    return array;
  };
  const arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr.newFilter(x => x % 2 === 0)); 

// find

Array.prototype.newFind = function(value) {
    
    for (let i = 0; i < this.length; i++) {
        if (value(this[i])) {
            return this[i];
        }
      }
    };
    const arr2 = [1,2,3,4,5,6,7,8,9,10];
  console.log(arr2.newFind(x => x % 2 === 0)); 

//   slice

function newSlice(array, one, two) {
    let newArray =[];
  
    if(two===undefined || two > array.length)
      two = array.length;
  
    for (let i = one; i < two; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  }
  
 console.log(newSlice([1,2,3,4,5,6],2,4));


//  splice

function newSplice(arr, number1, deleteCount, number2) {
  let spliceResult = [];
  let newArray = [];
  const end = number1 + deleteCount;
  if (number1 < 0)
      number1 += arr.length;
  for (let i = number1; i < end; i++) {
      spliceResult.push(arr[i]);
  }
  for (let j = 0; j < arr.length; j++) {
      if (j === number1) {
          j += deleteCount;
          if (number2 != undefined)
              newArray.push(number2);
      }
      newArray.push(array[j])
  }
  return spliceResult;
}
const array = [5, 10, 15, 20, 25, 30];
console.log(newSplice(array, 2, 5, 40));

// some 
function newSome(array){
    let trueFalse = false;
    for ( let i = 0 ; i < array.length ; i++){
        if ( array[i].length > 8 ){
            trueFalse = true;
        } 
    }
    return trueFalse;
}
let newArray = ["mahsa", "mohammd", "1373",  "nazanin", "saied"]
console.log(newSome(newArray));





