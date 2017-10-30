
const fs = require('fs');

const readFileAsArray = (filePath, cb) => {

    fs.readFile(filePath, (error, data) => {

        if(error) {
           cb(error);
        }

        const lines = data.toString().trim().split('\n');
        cb(null, lines);
    });

};


//calling readFileAsArray

readFileAsArray('./numbers.txt', (error, data) => {
    if(error) {
        console.log('unable to read file, error thrown : ${error}');
        throw error;
    }

    const numbers = data.map(Number);
    const  oddNumbers = numbers.filter(number => number%2 === 1);
    console.log('off numbers count: ', oddNumbers.length);
});



