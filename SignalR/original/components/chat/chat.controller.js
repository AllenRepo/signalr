(function () {
    angular.module('chat')
        .controller('chatController', ChatController);

    ChatController.$inject = ['$scope', 'chatService', 'toastr'];
    function ChatController($scope, chatService, toastr) {
        var self = this;
        //bindable properties
        self.history = 'welcome to the chat';
        self.newMessage = '';
        self.name = '';
        self.roomName = '';
        self.inRoom = false;

        //bindable events
        self.onSubmit = onSubmit;
        self.onJoin = onJoin;
        self.onLeave = onLeave;
        self.onClear = onClear;

        (function init() {
            chatService.start(newMessage, newNotification);
        })();

        function onClear() {
            self.newMessage = '';
        }

        function onJoin() {
            self.inRoom = true;
            chatService.joinRoom(self.roomName, self.name);
        }

        function onLeave() {
            self.inRoom = false;
            chatService.leaveRoom(self.roomName, self.name);
        }

        function onSubmit() {
            sendMessage(self.roomName, self.name, self.newMessage);
            displayMessage("Me : " + self.newMessage);
        }

        function sendMessage(roomName, name, message) {
            chatService.sendMessage(roomName, name, message);
        }

        function newMessage(message) {
            displayMessage(message);
            $scope.$apply();
        }

        function newNotification(message) {
            console.log(message);
            toastr.success(message);
        }

        function displayMessage(message) {
            self.history += "\r\n" + message;
        }
    }
})();