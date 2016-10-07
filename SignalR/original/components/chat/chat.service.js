(function () {
    angular.module('chat.service', [])
        .service('chatService', ChatService);

    ChatService.$inject = [];
    function ChatService() {
        //actions
        this.sendMessage = sendMessage;
        this.joinRoom = joinRoom;
        this.leaveRoom = leaveRoom;
        this.start = start;

        //private
        var isStarted;

        function start(onNewMessage, onNewNotification) {
            if (!isStarted) {
                $.connection.chat.client.newMessage = onNewMessage;
                $.connection.chat.client.newNotification = onNewNotification;

                $.connection.hub.logging = true;
                $.connection.hub.start();
                $.connection.hub.error(function (err) {
                    console.log('Error: ' + err);
                });
                isStarted = true;
            }
        }

        function sendMessage(roomName, name, message) {
            var requestData = {
                RoomName: roomName,
                Message: message,
                Name: name
            }
            $.connection.chat.server.sendMessage(requestData);
        }

        function joinRoom(roomName, name) {
            $.connection.chat.server.joinRoom(roomName, name);
        }

        function leaveRoom(roomName, name) {
            $.connection.chat.server.leaveRoom(roomName, name);
        }


    }
})();