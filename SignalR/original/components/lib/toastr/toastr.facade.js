(function () {
    angular.module('toastr', [])
        .value('toastr', toastrFacade());

    function toastrFacade() {
        if (!toastr) {
            alert('toastr not found');
            return;
        }
        toastr.options.closeButton = true;
        return toastr;
    }
})();