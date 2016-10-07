/// <reference path="../../../typings/angularjs/angular.d.ts" />

module Chat {
    angular.module('chat')
        .directive('chatDirective', ChatDirective);

    ChatDirective.$inject = [];
    export function ChatDirective(): angular.IDirective {
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
}