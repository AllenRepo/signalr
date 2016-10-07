(function () {
    angular.module('chat')
        .directive('chatDirective', chatDirective);

    function chatDirective(){
        var directive = {
            restrict: 'EA',
            scope: {},
            link: linkFunc,
            controller: 'chatController',
            controllerAs: 'vm',
            bindToController: true,
            templateUrl: '/original/components/chat/chat.tpl.html',
        };
        return directive;

        function linkFunc(scope, elem, attr, ctrl) {

        }
    }
})();