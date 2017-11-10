var Quarter = /** @class */ (function () {
    function Quarter() {
        this.value = 0.25;
    }
    Object.defineProperty(Quarter.prototype, "Value", {
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    /*set Value(newValue) {
        this.value = newValue;
    }*/
    //default is public
    Quarter.prototype.getImageUrl = function () {
        return "/img/Quarter.jpg";
    };
    return Quarter;
}());
//# sourceMappingURL=coin.js.map