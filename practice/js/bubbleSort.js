var array = [3, -1, -4, 0, 23, 3, 19, 1, -100, -2, 145]
var min
for (let i = 0; i <= array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
            let temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
    }
}
console.log(array);
