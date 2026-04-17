// let array = [1, 4, 6, 100, 4, 3, 5, 5, 5, 6, 100, 1]

// function pairOfSameNumber(array) {
//     let pair = []
//     let seen = {}
//     for (let num of array) {
//         if (seen[num]) {
//             pair.push([num, num])
//             seen[num] = false

//         }
//         else seen[num] = true
//     }
//     return pair
// }
// console.log(pairOfSameNumber(array));

let array = [1, 4, 6, 100, 4, 3, 5, 5, 5, 5, 6, 100, 1]

function pairOfSameNumber2(array) {
    array.sort((a, b) => a - b)
    let sortArray = []
    for (var i = 0; i < array.length; i++) {
        if (array[i] === array[i + 1]) {
            sortArray.push(array[i])
            i++
        }
    }
    let doiThong = 0
    for (var k = 0; k < sortArray.length; k++) {
        if ((sortArray[k + 1] === sortArray[k] + 1) && (sortArray[k + 2] === sortArray[k + 1] + 1)) {
            doiThong++
        }
    }
    return doiThong

}
console.log(pairOfSameNumber2(array));

function findDuplicates(arr) {
    let counts = {};
    let result = [];

    for (num of arr) {
        if (counts[num]) {
            counts[num]++;
        } else {
            counts[num] = 1;
        }
    }

    for (let num in counts) {
        if (counts[num] > 1) {
            result.push(Number(num));
        }
    }

    return result;
}

let arr = [1, 1, 2, 3, 3, 3, 4, 5, 5, 5, 5];
console.log(findDuplicates(arr)); // Output: [1, 3, 5]



