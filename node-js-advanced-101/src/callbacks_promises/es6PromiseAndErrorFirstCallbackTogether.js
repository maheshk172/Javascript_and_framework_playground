const fs = require('fs');

//providing default function
const readFileAsArray = (filePath, cb = () => {}) => {

    return new Promise((Resolve, Reject) => {
        fs.readFile(filePath, (error, data) => {

            if (error) {
                Reject(error);
                cb(error);
            }

            const lines = data.toString().trim().split('\n');
            Resolve(lines);
            cb(null, lines);
        });

    });

};


//calling readFileAsArray with Promise returns
readFileAsArray('./numbers.txt')
    .then(lines => {
        const numbers = lines.map(Number);
        const oddNumbers = numbers.filter(number => number % 2 === 1);
        console.log('off numbers count: ', oddNumbers.length);
    })
    .catch(console.error);

//calling readFileAsArray again with Callback expected
readFileAsArray('./numbers.txt', (error, data) => {
    if(error) {
        console.log('unable to read file, error thrown : ${error}');
        throw error;
    }

    const numbers = data.map(Number);
    const  oddNumbers = numbers.filter(number => number%2 === 1);
    console.log('off numbers count: ', oddNumbers.length);
});


