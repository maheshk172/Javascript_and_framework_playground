const longComputation = () => {
    let sum = 0;

    for(let i=0; i<1e9; i++) {
        sum += i;
    }

    return sum;
};

process.on('message', (data) => {
    if(data === 'START') {
        const sum = longComputation();
        process.send(sum);
    } else {
        console.log('Not sure what to do');
    }

});