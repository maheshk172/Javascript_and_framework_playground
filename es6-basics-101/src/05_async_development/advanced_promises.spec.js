"use strict";


describe("Advanced Promises", function () {

    it("should chain  sequentially using then", function (done) {
        getOrder(3)
            .then(function (order) {
                return getUser(order.orderId);
            })
            .then(function (user) {
                return getCompany(user.companyId);
            })
            .then(function (company) {
                expect(company.name).toBe('PluralSight');
            })
            .catch(function (error) {
                // handle errors
            }).then(done);
    });

    it("should execute only after promises.All is invoked", function (done) {

        var courseIds = [1, 2, 3, 4, 5];
        var promises = [];

        for (let i = 0; i < courseIds.length; i++) {
            promises.push(getCourse(courseIds[i]));
        }

        Promise.all(promises)
            .then(function (courses) {
                expect(courses.length).toBe(5);
            })
            .catch(function (error) {

            })
            .then(done);
    });

    it("should resolve after first promise", function (done) {

        var courseIds = [1, 2, 3, 4, 5];
        var promises = [];

        for (let i = 0; i < courseIds.length; i++) {
            promises.push(getCourse(courseIds[i]));
        }

        Promise.race(promises)
            .then(function (firstValue) {
                expect(firstValue.name).toBeDefined();
            })
            .catch(function (error) {

            })
            .then(done);
    });


});