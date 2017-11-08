"use strict";

describe("MAP Datastructure", function () {
    it("should contain zero elements when constructed", function () {
        var map = new Map();
        expect(map.size).toBe(0);
    });

    it("should be able to set in Map", function(){
       var map = new Map();

       map.set("age", 35);
        expect(map.size).toBe(1);
    });

    it("should be able get object with get in Map", function(){
        var ageMap = new Map();
        var ralph = {"name":"ralph"};

        ageMap.set(ralph, 29)
        expect(ageMap.get(ralph)).toBe(29);
    });

    it("should contain items when given an array in constructor", function(){
       var map = new Map([['name','john'],['age',15],['weight',155]]);

       expect(map.size).toBe(3);
    });

    it("should return boolean if it has a item", function(){
        var map = new Map([['name','john'],['age',15],['weight',155]]);

        expect(map.has("name")).toBe(true);
        expect(map.has("name1")).toBe(false);
    });

    it("should clear when called", function(){
        var map = new Map([['name','john'],['age',15],['weight',155]]);
        expect(map.size).toBe(3);
        map.clear();

        expect(map.has("name")).toBe(false);
        expect(map.has("name1")).toBe(false);
        expect(map.size).toBe(0);
    });

    it("should be able to iterate map with forEach", function(){
        var map = new Map([['name','john'],['age',15],['weight',155]]);
        expect(map.size).toBe(3);
        var count = 0;
        map.forEach(function(value, key) {
           expect(value).toBe(map.get(key));
           count++;
        });

        expect(count).toBe(3);
    });

    it("should be able to iterate map using for of", function(){
        var map = new Map([['name','john'],['age',15],['weight',155]]);
        expect(map.size).toBe(3);
        var count = 0;

        for(var [key, value] of map) {
            expect(value).toBe(map.get(key));
            count++;
        }

        expect(count).toBe(3);
    });

    it("should be able to iterate using Entries Iterator", function(){
        var map = new Map([['name','john'],['age',15],['weight',155]]);

        var items = map.entries();
        var first = items.next().value;

        expect(first[0]).toBe("name");
        expect(first[1]).toBe("john");

    });

    it("should be able to iterate using Values Iterator", function(){
        var map = new Map([['name','john'],['age',15],['weight',155]]);

        var values = map.values();
        var first = values.next().value;

        expect(first).toBe("john");
    });

    it("should be able to iterate using Keys` Iterator", function(){
        var map = new Map([['name','john'],['age',15],['weight',155]]);

        var keys = map.keys();
        var first = keys.next().value;

        expect(first).toBe("name");
    });
});
