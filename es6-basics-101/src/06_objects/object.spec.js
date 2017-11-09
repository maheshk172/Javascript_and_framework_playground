"use strict";
describe('Object and its Methods', function () {

    describe('is function', function () {
        it('should consider positive and negative zero to be different', function () {
            expect(-0 === 0).toBe(true);
            expect(Object.is(-0, 0)).toBe(false);
        });

        it('should consider NaN to be NaN', function () {
            expect(NaN === NaN).toBe(false);
            expect(Object.is(NaN, NaN)).toBe(true);
        });
    });

    describe('assign function', function () {
        it('should apply mixins to objects', function () {
            var shark = {
                bite: function (target) {
                    target.hurt = true;
                }
            };

            var person = {};

            var laser = {
                pewpew: function (target) {
                    target.exploded = true;
                }
            };

            Object.assign(shark, laser);
            shark.pewpew(person);
            //added functionality to existing objects
            expect(person.exploded).toBe(true);
        });
    });

    describe("property initializer shorthand", function () {
        it('should create properties from local variables', function () {
            var model = "Ford";
            var year = 1969;

            var classic = {
                model,
                year
            };

            expect(classic.model).toBe(model);
            expect(classic.year).toBe(year);
        });
    });


    describe("Meth0d initializer shorthand", function () {
        it('should create methods using shorthand', function () {
            var server = {
                getHost: function () {
                    return "localhost";
                },
                getPort() {
                    return 3000;
                }

            };

            expect(server.getHost()).toBe('localhost');
            expect(server.getPort()).toBe(3000);
        });

    });

    describe("Computed property names", function () {
        it('Should support variables for property names', function () {
            //before EC6
            function createSimpleObject(propertyName, propertyValue) {
                var obj = {};
                obj[propertyName] = propertyValue;
                return obj;
            }

            //post EC6
            function createSimpleObjectEC6(propertyName, propertyValue) {
                return {
                    [propertyName]: propertyValue
                };
            }

            expect(createSimpleObject()).toEqual(createSimpleObjectEC6());
        });

        it("should support concatinations", function () {
            function createTruumvirate(first, second, third) {
                return {
                    ['member_' + first.name]: first,
                    ['member_' + second.name]: second,
                    ['member_' + third.name]: third,
                };
            }

            var Joe = {name: 'Joe'};
            var Ralph = {name: 'Ralph'};
            var Harry = {name: 'Harry'};

            var tri = createTruumvirate(Joe, Ralph, Harry);

            expect(tri.member_Joe).toBe(Joe);
        });

    });


});