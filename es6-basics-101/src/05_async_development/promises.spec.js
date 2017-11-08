"use strict";
describe('Async Development', function () {
    it('should execute the callback given to then', function (done) {
        var promise = new Promise(function (resolve, reject) {
            resolve();
        });

        promise.then(function (data) {
            expect(data).toBe(undefined);
            done();
        });
    });

    it('should receive resolved data', function (done) {
        var promise = new Promise(function (resolve, reject) {
            resolve(1);
        });

        promise.then(function (data) {
            expect(data).toBe(1);
            done();
        });
    });

    it('should fail when rejected', function (done) {
        var promise = new Promise(function (resolve, reject) {
            reject('Oh gosh!');
        });

        promise.then(function (data) {
            done();
        }, function (error) {
            //console.log(error);
            expect(error).toBe('Oh gosh!');
            done();
        });
    });

    it('should catch when rejected', function (done) {
        var promise = new Promise(function (resolve, reject) {
            reject('Oh gosh!');
        });

        promise
            .then(function (data) {
                done();
            })
            .catch(function (error) {
                //console.log(error);
                expect(error).toBe('Oh gosh!');
                done();
            });
    });

    it('should compose a promise when resolved with a promise', function (done) {
        var previousPromise = new Promise(function (resolve, reject) {
            resolve(3);
        });

        var composedPromise = new Promise(function (resolve, reject) {
            resolve(previousPromise);
        });


        composedPromise.then((data) => {
            expect(data).toBe(3);
        }).catch((error) => {
            expect(error).toBe(undefined);
        }).then(function () {
            done();
        });
    });


    it('should have a static resolve', function (done) {
        var previousPromise = Promise.resolve(3);

        previousPromise.then((data) => {
            expect(data).toBe(3);
        }).catch((err) => {

        }).then(done);

    });

    it('should have a static reject', function (done) {
        var previousPromise = Promise.reject('Oh noes!');

        previousPromise.catch((err) => {
            expect(err).toBe('Oh noes!');
        }).then(done);

    });

    it('should be asynchronous', function (done) {
        var async = false;

        var promise = new Promise(function (resolve, reject) {
            resolve();
        });

        promise.then(function () {
            expect(async).toBe(true);
        }).then(done);
        async = true;
    });

});