"use strict";
describe("Experimenting Arrays", function () {

    it("find operation should return first match", function () {
        var arr = [1, 5, 10];
        var match = arr.find(item => item > 8);
        expect(match).toBe(10);
    });

    it("findIndex should return index", function () {
        var arr = [1, 5, 10];
        var match = arr.findIndex(item => item > 3);
        //its index we are matching, index of 5 is 1
        expect(match).toBe(1);
    });

    it("fill should fill whole array", function () {
        var arr = [1, 2, 3, 4, 5];
        arr.fill('a');
        expect(arr).toEqual(['a', 'a', 'a', 'a', 'a']);
    });

    it("fill with options should fill array", function () {
        var arr = [1, 2, 3, 4, 5];
        // 2 -> Start Index, 3 -> End Index
        arr.fill('a', 2, 3);
        expect(arr).toEqual([1, 2, 'a', 4, 5]);
        expect(arr[2]).toBe('a');
        expect(arr[3]).toBe(4);
    });

    it("Copy elements with copyWithin from array", function () {
        var arr = [1, 2, 3, 4];
        arr.copyWithin(2, 0);
        // 1 -> Index to stop where
        // 0 ->
        //var array1 = arr.copyWithin(2, 0,1);
        //console.log(arr);
        expect(arr).toEqual([1, 2, 1, 2]);
        arr = [1, 2, 3, 4];
        arr.copyWithin(0, -2);
        //console.log(arr);
        expect(arr).toEqual([3, 4, 3, 4]);
    });

    it("create new Array with 1 arg", function () {
        var arr = new Array(1, 2, 3);
        //console.log(arr);

        expect(arr).toEqual([1, 2, 3]);
    });

    it("create new Array with Array.of", function () {
        var arr = Array.of(1, 2, 3);
        //console.log(arr);
        expect(arr).toEqual([1, 2, 3]);
    });

    it("create new Array when array like object is provided", function () {
        var arrayLike = document.querySelectorAll('div');
        expect(arrayLike.forEach).toBeDefined();

        var fromArray = Array.from(arrayLike);
        expect(arrayLike.forEach).toBeDefined();
    });

    it("Should return entries from the entries function", function () {
        var a = ['Joe', 'Jim', 'John'];
        // Returns array with two params each, [Index, "Value"]
        var entries = a.entries();
        //console.log(entries);

        var firstEntry = entries.next().value;
        //console.log(firstEntry);

        expect(firstEntry[0]).toBe(0);
        expect(firstEntry[1]).toBe('Joe');
    });

    it("Should return keys iterator from the keys function", function () {
        var a = ['Joe', 'Jim', 'John'];
        // Returns indexes array in case of keys
        var keys = a.keys();
        //console.log(keys);

        var firstEntry = keys.next().value;
        //console.log(firstEntry);

        expect(firstEntry).toBe(0);

    });


});