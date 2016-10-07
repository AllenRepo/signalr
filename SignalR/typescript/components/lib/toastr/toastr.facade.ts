/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/toastr/toastr.d.ts" />
module Toastr {
    angular.module('toastr', [])
        .value('toastr', ToastrFacade);

    export class ToastrFacade {
        constructor() {
            if (!toastr) {
                alert('toastr not found');
                return;
            }

            toastr.options.closeButton = true;
            return toastr;
        }
    }
    ToastrFacade.$inject = [];
}