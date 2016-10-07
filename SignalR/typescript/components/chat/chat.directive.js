/// <reference path="../../../typings/angularjs/angular.d.ts" />
var Chat;
(function (Chat) {
    angular.module('chat')
        .directive('chatDirective', ChatDirective);
    ChatDirective.$inject = [];
    function ChatDirective() {
        var directive = {
            restrict: 'EA',
            scope: {},
            link: linkFunc,
            controller: Chat.ChatController,
            controllerAs: 'vm',
            bindToController: true,
            templateUrl: '/typescript/components/chat/chat.tpl.html',
        };
        return directive;
        function linkFunc(scope, elem, attr, ctrl) {
        }
    }
    Chat.ChatDirective = ChatDirective;
})(Chat || (Chat = {}));
//# sourceMappingURL=chat.directive.js.map