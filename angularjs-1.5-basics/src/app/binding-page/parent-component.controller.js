function ParentController() {
    this.somePrimitive = 99;
    this.someObject = {
        todd: {
            age: 25,
            location: 'England, UK'
        }
    };
    this.updateValues = function () {
        this.somePrimitive = 33;
        this.someObject = {
            jilles: {
                age: 20,
                location: 'Netherlands'
            }
        };
    };
}

angular.module('binding-page')
    .controller('ParentController', ParentController);