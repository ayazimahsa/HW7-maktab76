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

Array.prototype.newSplice = function (number1, remove, insert) {
  let deleteNumber = this.slice(number1, number1 + remove);
  let array = this.slice(0, number1).concat(insert, this.slice(number1 + remove));
  this.length = 0;
  this.push.apply(this, array);
  return deleteNumber;
};

let tempArray = ["mahsa", "mohammd","nazanin", "saied"];
console.log(tempArray.newSplice(0, 2, "ghazal"));
console.log(tempArray);

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





