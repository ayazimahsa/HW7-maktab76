function recurIndex(str) {
    let object = {}
    let maximum = 0;
    let max = '';
    if (str) {
        str.split("").forEach(function (char) {
            if (str.split(char).length > maximum) {
                maximum = str.split(char).length;
                max = char;
            }
        }); object[max] = [str.indexOf(max), str.split(max, 2).join(max).length]
        return object
    }
    else
        return {}
}
console.log(recurIndex('AREDCBSDERD'));

