const fs = require('fs');

const readFileAsArray = (filePath) => {

    return new Promise((Resolve, Reject) => {
        fs.readFile(filePath, (error, data) => {

            if (error) {
                Reject(error);
            }

            const lines = data.toString().trim().split('\n');
            Resolve(lines);
        });

    });

};


//calling readFileAsArray
readFileAsArray('./numbers.txt')
    .then(lines => {
        const numbers = lines.map(Number);
        const oddNumbers = numbers.filter(number => number % 2 === 1);
        console.log('off numbers count: ', oddNumbers.length);
    })
    .catch(console.error);


