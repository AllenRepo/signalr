/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="chat.interface.d.ts" />
/// <reference path="chat.service.d.ts" />
/// <reference path="../../../typings/toastr/toastr.d.ts" />
declare module Chat {
    class ChatController implements IChatViewModel {
        private $scope;
        private chatService;
        history: string;
        newMessage: string;
        name: string;
        roomName: string;
        inRoom: boolean;
        onSubmit: () => void;
        onJoin: () => void;
        onLeave: () => void;
        onClear: () => void;
        constructor($scope: angular.IScope, chatService: ChatService);
        private _sendMessage(roomName, name, newMessage);
        private _newMessage(message);
        private _newNotification(message);
        private _displayMessage(message);
    }
}
