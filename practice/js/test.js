var obj = {}

obj['text'] = 'hahhaaa'
obj['key'] = 'working'

console.log(obj);
const headers = ['country', 'testData', 'expectedResult'];
const data = [
    'INDIA, 298181o1, Your TIN must be greater than 9 digits ',
    'TAIWAN, 1211**, Your TIN is invalid   '
];

// Function to convert data into array of objects
const convertToJSON = (headers, data) =>
    data.map(row => {
        const values = row.split(',').map(value => value.trim()); // Split and trim
        return headers.reduce((obj, header, index) => {
            obj[header] = values[index];
            return obj;

        }, {});
    });

const array = convertToJSON(headers, data);
console.log(array);

var x = 1
var y = x
x = 5
console.log(y)

