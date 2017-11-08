"use strict";

describe('async generators', function () {

    xit('Would be difficult to read with regular async interval', function () {
        console.log('start');
        pause(500);
        console.log('middle');
        pause(500);
        console.log('end');
    });

    xit('Attempt to make this synchronous, but not good', function () {
        console.log('start');
        pauseSync(500, function () {
            console.log('middle');
            pauseSync(500, function () {
                console.log('end');
            });
        });
    });

    xit('We can make this work using generators', function (done) {

        function* main() {
            console.log('start');
            yield pauseGenerator(500);
            console.log('middle');
            yield pauseGenerator(500);
            console.log('end');

            done();
        }

        async.run(main);
    });


    xit('should work with returned data', function (done) {

        function* main() {
            var price = yield getStockPrice();
            console.log('price is : ', price);
            if (price < 45) {
                yield executeTrade();
            } else {
                console.log('trade not made');
            }

            done();
        }

        async.run(main);

    });

    xit('should work with errors', function (done) {

        function* main() {
            try {
                var price = yield getStockPrice();
                console.log('price is : ', price);
                if (price < 45) {
                    yield executeTrade();
                } else {
                    console.log('trade not made');
                }

                done();
            } catch(error) {
                console.log(error);
                done();
            }
        }
        async.run(main);
    });


    it('should also work with promises', function (done) {

        function* main() {
            try {
                var price = yield getStockPriceP();
                console.log('price is : ', price);
                if (price < 45) {
                    yield executeTradeP();
                } else {
                    console.log('trade not made');
                }

                done();
            } catch(error) {
                console.log(error);
                done();
            }
        }
        asyncp.run(main);
    });




});