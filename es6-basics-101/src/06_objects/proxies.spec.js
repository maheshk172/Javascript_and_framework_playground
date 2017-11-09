"use strict";
describe('Proxies', function () {
    it('should let you intercept gets', function () {
        var unicorn = {
            legs: 4,
            color: 'Brown',
            horn: true
        };

        var proxyUnicorn = new Proxy(unicorn, {
            get: function (targetObject, propertyName) {
                if (propertyName === 'color') {
                    return 'awesome ' + targetObject[propertyName];
                } else {
                    return targetObject[propertyName];
                }
            }
        });

        expect(proxyUnicorn.legs).toBe(4);
        expect(proxyUnicorn.color).toBe('awesome Brown');
    });

    it('should let you intercept sets', function () {
        var unicorn = {
            legs: 4,
            color: 'Brown',
            horn: true
        };

        var proxyUnicorn = new Proxy(unicorn, {
            set: function (targetObject, propertyName, valueToSet) {
                if (propertyName === 'horn' && valueToSet === false) {
                    console.log('Unicorn can not ever lose its horns');
                    return true;
                } else {
                    targetObject[propertyName] = valueToSet;
                    return true;
                }
            }
        });

        proxyUnicorn.color = 'white';
        proxyUnicorn.horn = false;

        expect(proxyUnicorn.color).toBe('white');
        expect(proxyUnicorn.horn).toBe(true);
    });

    it('should let you proxy functions as well', function () {
        var unicorn = {
            legs: 4,
            color: 'brown',
            horn: true,
            hornAttack: function(target) {
                return target.name + ' was obliterated';
            }
        };

        unicorn.hornAttack = new Proxy(unicorn.hornAttack, {
           apply: function(target, context, args) {
               if(context !== unicorn) {
                   return 'nobody can use unicorn horns other than unicorn';
               } else {
                   return target.apply(context, args);
               }
           }
        });

        var thief = {name: 'Rupert'};
        thief.attack = unicorn.hornAttack;


        expect(thief.attack()).toBe('nobody can use unicorn horns other than unicorn');
        expect(unicorn.hornAttack({name: 'Mahesh'})).toBe('Mahesh was obliterated');
    });

});