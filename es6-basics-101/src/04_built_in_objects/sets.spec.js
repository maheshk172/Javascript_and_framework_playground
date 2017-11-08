"use strict";

describe("SET Datastructure", function () {
    it("should contain zero elements when constructed", function () {
        var set = new Set();
        expect(set.size).toBe(0);
    });

    it("should contain one element when added using add", function () {
        var set = new Set();
        set.add("somevalue");
        expect(set.size).toBe(1);
    });

    it("should allow Object as keys", function () {
        var set = new Set();
        var key = {};

        set.add(key);
        expect(set.has(key)).toBe(true);
    });

    it("should construct array when passed array", function () {
        var set = new Set([1, 2, 3, 4, 5]);
        expect(set.has(5)).toBe(true);
        expect(set.size).toBe(5);
    });

    it("should construct array when passed duplicate values in array", function () {
        var set = new Set([1, 2, 3, 4, 5, 4, 4, 4]);
        expect(set.has(5)).toBe(true);
        expect(set.size).toBe(5);
    });

    it("should clear all items", function () {
        var set = new Set([1, 2, 3, 4, 5, 4, 4, 4]);
        expect(set.has(5)).toBe(true);
        expect(set.size).toBe(5);

        set.clear();
        expect(set.size).toBe(0);
    });

    it("should clear all items", function () {
        var set = new Set([1, 2, 3]);
        set.delete(1);
        expect(set.size).toBe(2);
    });

    it("should call a callback once each item when forEach is invoked", function () {
        var set = new Set();

        set.add("tom");
        set.add("dick");
        set.add("harry");
        var count = 0;
        set.forEach(name => {
            count += 1;
        });
        expect(count).toBe(3);
    });

    it("using for of syntax on SET", function () {
        var set = new Set();

        set.add("tom");
        set.add("dick");
        set.add("harry");
        var count = 0;

        for (var item of set) {
            count++;
        }

        expect(count).toBe(3);
    });

    it("should return an iterator of arrats when Entries is called", function () {
        var set = new Set();
        set.add("Text");

        var entries = set.entries();
        var firstEntry = entries.next().value;
        //Entry -> ["Text","Text"] -> first item is key, second is value
        //console.log(firstEntry);

        expect(firstEntry[0]).toBe("Text");
        expect(firstEntry[1]).toBe("Text");
    });

    it("should return an iterator of arrats when Entries is called", function () {
        var set = new Set();
        set.add("Text");

        var values = set.values();
        var firstValue = values.next().value;
        //console.log(firstValue);

        expect(firstValue).toBe("Text");
    });

    it("should construct Set with Iterator", function () {
        var set = new Set();
        set.add("Text1");
        set.add("Text2");
        set.add("Text3");

        var set1 = new Set(set.values());

        expect(set1.size).toBe(3);
    });

    it("should construct Set with Objects as well", function () {
        var set = new Set();
        set.add({key: "Test1", value: "test1"});
        set.add({key: "Test2", value: "test2"});
        set.add({key: "Test3", value: "test3"});

        var entries = set.entries();
        var firstEntry = entries.next().value;
        //console.log(firstEntry);

        expect(set.size).toBe(3);
    });


});