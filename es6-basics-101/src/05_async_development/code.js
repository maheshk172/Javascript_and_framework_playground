"use strict";

function getOrder(orderId) {
    return Promise.resolve({userId: 35});
}

function getUser(userId) {
    return Promise.resolve({companyId: 18});
}

function getCompany(companyId) {
    return Promise.resolve({name: 'PluralSight'});
}

function getCourse(courseId) {
    let courses = new Map();
    courses.set(1, {name: "Introduction to c++"});
    courses.set(2, {name: "Introduction to C# course"});
    courses.set(3, {name: "How to build wealth in 10 days"});

    return Promise.resolve(courses.get(courseId));
}

function pause(delay) {
    setTimeout(function () {
        console.log('paused for ' + delay + ' ms');
    }, delay);
}

function pauseSync(delay, callback) {
    setTimeout(function () {
        console.log('paused for ' + delay + ' ms');
        callback();
    }, delay);
}

/*
(function () {
    var sequence;

    var run = function (generator) {
        sequence = generator();
        var next = sequence.next();
    }

    var resume = function () {
        sequence.next();
    }

    window.async = {
        run: run,
        resume: resume
    };
}());*/

(function () {
    var sequence;

    var run = function (generator) {
        sequence = generator();
        var next = sequence.next();
    }

    var resume = function (value) {
        sequence.next(value);
    }

    var fail = function (reason) {
        sequence.throw(reason);
    }

    window.async = {
        run: run,
        resume: resume,
        fail: fail
    };
}());


function pauseGenerator(delay) {
    setTimeout(function () {
        console.log('paused for ' + delay + ' ms');
        async.resume();
    }, delay);
}

function getStockPrice() {
    setTimeout(function () {
        try {
            //enable only for last test
            throw "something went wrong";
            async.resume(40);
        } catch (error) {
            async.fail(error);
        }

    }, 300);
}

function executeTrade() {
    setTimeout(function () {
        console.log('trade completed');
        async.resume();
    }, 300);
}

/** Promised area starts here **/
(function () {

    var run = function (generator) {
        var sequence;
        var process = function (result) {
            if (!result.done) {

                result.value.then(function (value) {

                    process(sequence.next(value));
                });
            }

        };

        sequence = generator();
        var next = sequence.next();
        process(next);
    };

    window.asyncp = {
        run: run,
    };
}());


function getStockPriceP() {

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(40);
        }, 300);
    });


}

function executeTradeP() {

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('trade completed');
            resolve();
        }, 300);
    });
}
