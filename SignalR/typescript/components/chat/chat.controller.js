/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="chat.interface.ts" />
/// <reference path="chat.service.ts" />
/// <reference path="../../../typings/toastr/toastr.d.ts" />
var Chat;
(function (Chat) {
    angular.module('chat')
        .controller('ChatController', ChatController);
    var ChatController = (function () {
        function ChatController($scope, chatService) {
            var _this = this;
            this.$scope = $scope;
            this.chatService = chatService;
            this.history = 'welcome to the chat';
            this.newMessage = '';
            this.name = '';
            this.roomName = '';
            this.inRoom = false;
            chatService.start(this._newMessage, this._newNotification);
            this.onSubmit = function () {
                _this._sendMessage(_this.roomName, _this.name, _this.newMessage);
            };
            this.onClear = function () {
                _this.newMessage = '';
            };
            this.onJoin = function () {
                _this.inRoom = true;
                _this.chatService.joinRoom(_this.roomName, _this.name);
            };
            this.onLeave = function () {
                _this.inRoom = false;
                _this.chatService.leaveRoom(_this.roomName, _this.name);
            };
        }
        ChatController.prototype._sendMessage = function (roomName, name, newMessage) {
            this.chatService.sendMessage(roomName, name, newMessage);
        };
        ChatController.prototype._newMessage = function (message) {
            this._displayMessage(message);
            this.$scope.$apply();
        };
        ChatController.prototype._newNotification = function (message) {
            console.log(message);
            //this.toastr.success(message);
        };
        ChatController.prototype._displayMessage = function (message) {
            this.history += "\r\n" + message;
        };
        return ChatController;
    })();
    Chat.ChatController = ChatController;
    ChatController.$inject = ['$scope', 'chatService'];
})(Chat || (Chat = {}));
//# sourceMappingURL=chat.controller.js.map