const numInStr = (arr) => {
    let a = [];
    arr.map((item) => {
        //console.log(arr[i][j])
        item.split("").map((char) => {
            if (char == parseInt(char)) {
                a.push(item);
            }
        })
    })

    return a;
 
};

console.log(numInStr(["mahsa", "ayazi", "ma28hsa", "mahsa28"]));

