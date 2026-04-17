const fs = require('fs')

const csvFilePath = 'sampleSchema.csv'
function csvToJson(filePath) {
    const csvFilePath = fs.readFileSync(filePath, { encoding: 'utf8' })
    const [firstLine, ...restLines] = csvFilePath.split('\n')
    const propertyKeys = firstLine.split(',')

    return restLines.map(valueRow => {
        const values = valueRow.split(',').map(value => value.trim())

        var covertedJson = propertyKeys.reduce((obj, key, index) => {
            obj[key] = values[index];
            return obj;
        }, {});
        console.log(covertedJson);
        return covertedJson
    })
}

console.log('result is', csvToJson(csvFilePath))

