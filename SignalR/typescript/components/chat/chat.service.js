/// <reference path="../../../typings/jquery/jquery.d.ts" />
/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/signalr/signalr.d.ts" />
/// <reference path="../../common/signalr/chatproxy.d.ts" />
var Chat;
(function (Chat) {
    angular.module('chat.service', [])
        .service('chatService', ChatService);
    var ChatService = (function () {
        function ChatService() {
            var _this = this;
            this.sendMessage = function (roomName, name, message) {
                var data = {
                    RoomName: roomName,
                    Name: name,
                    Message: message
                };
                $.connection.chatHub.server.sendMessage(data);
            };
            this.joinRoom = function (roomName, name) {
                $.connection.chatHub.server.joinRoom(roomName, name);
            };
            this.leaveRoom = function (roomName, name) {
                $.connection.chatHub.server.leaveRoom(roomName, name);
            };
            this.start = function (onNewMessage, onNewNotification) {
                if (!_this.isStarted) {
                    $.connection.chatHub.client.newMessage = onNewMessage;
                    $.connection.chatHub.client.newNotification = onNewNotification;
                    $.connection.hub.logging = true;
                    $.connection.hub.start();
                    $.connection.hub.error(function (err) {
                        console.log('Error: ' + err);
                    });
                    _this.isStarted = true;
                }
            };
        }
        return ChatService;
    })();
    Chat.ChatService = ChatService;
})(Chat || (Chat = {}));
//# sourceMappingURL=chat.service.js.map