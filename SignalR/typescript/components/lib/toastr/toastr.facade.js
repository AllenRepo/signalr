/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/toastr/toastr.d.ts" />
var Toastr;
(function (Toastr) {
    angular.module('toastr', [])
        .value('toastr', ToastrFacade);
    var ToastrFacade = (function () {
        function ToastrFacade() {
            if (!toastr) {
                alert('toastr not found');
                return;
            }
            toastr.options.closeButton = true;
            return toastr;
        }
        return ToastrFacade;
    })();
    Toastr.ToastrFacade = ToastrFacade;
    ToastrFacade.$inject = [];
})(Toastr || (Toastr = {}));
//# sourceMappingURL=toastr.facade.js.map