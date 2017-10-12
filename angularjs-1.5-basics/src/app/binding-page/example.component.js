'use strict';

var example = {
    bindings: {
        obj: '=',
        prim: '='
    },
    template: `
    <div class="section">
      <h4>
        Isolate Component
      </h4>
      <p>Object: {{ $ctrl.obj }}</p>
      <p>Primitive: {{ $ctrl.prim }}</p>
      <a href="" ng-click="$ctrl.updateValues();">
        Change Isolate Values
      </a>
    </div>
  `,
    controller: function () {
        this.updateValues = function () {
            this.prim = 10;
            this.obj = {
                john: {
                    age: 35,
                    location: 'Unknown'
                }
            };
        };
    }
};


angular.module('binding-page')
    .component('example', example);
