describe("Tesing destructuring with literals here", function () {
    it("can destructur array", function () {

        let x = 10;
        let y = 20;

        [x, y] = [y, x];

        expect(x).toBe(20);
        expect(y).toBe(10);
    });

    it("using Let to initialize destructur array", function () {

        let [x, y] = [20, 10];

        expect(x).toBe(20);
        expect(y).toBe(10);
    });

    it("destructuring using function", function () {

        let dowork = function () {
            return [20, 10];
        }

        let [x, y] = dowork();

        expect(x).toBe(20);
        expect(y).toBe(10);
    });

    it("destructuring using function should work even when params count mismatch", function () {

        let dowork = function () {
            return [20, 10, 30];
        }

        let [x, y] = dowork();

        expect(x).toBe(20);
        expect(y).toBe(10);
    });

    it("getting extra params as undefined, param count mismatch on receiving end", function () {

        let dowork = function () {
            return [20, 10];
        }

        let [x, y, z, w] = dowork();

        expect(x).toBe(20);
        expect(y).toBe(10);
        expect(z).toBeUndefined();
        expect(w).toBeUndefined();
    });
});

describe("Tesing destructuring with objects here", function () {
    it("can destructur object", function () {
        let dowork = function () {
            return {
                firstName: 'Test Name',
                lastName: 'Last Name',
                twitter: 'twitterHandle'
            };
        };
        // {firstName: name}  ->   name is the variable, firstName is picked from value returned from doWork();
        let {firstName: name, twitter: twitterHandle, facebook: facebookHandle} = dowork();

        expect(name).toBe('Test Name');
        expect(twitterHandle).toBe('twitterHandle');
        expect(facebookHandle).toBeUndefined();

    });

    it("can destructur complex object", function () {
        let dowork = function () {
            return {
                firstName: 'Test Name',
                lastName: 'Last Name',
                handles: {
                    twitter: 'twitterHandle',
                    facebook: 'facebookHandle'
                }

            };
        };
        // handles:{twitter: twitterHandle  ->    twitterHandler is the variable, handles.twitter is picked from value returned from doWork();
        let {firstName: name, handles: {twitter: twitterHandler}, handles: {facebook: facebookHandler}} = dowork();

        expect(name).toBe('Test Name');
        expect(twitterHandler).toBe('twitterHandle');
        expect(facebookHandler).toBe('facebookHandle');

    });
});