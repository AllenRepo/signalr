/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="chat.interface.ts" />
/// <reference path="chat.service.ts" />
/// <reference path="../../../typings/toastr/toastr.d.ts" />


module Chat {
    angular.module('chat')
        .controller('ChatController', ChatController);

    export class ChatController implements IChatViewModel{
        history: string = 'welcome to the chat';
        newMessage: string = '';
        name: string = '';
        roomName: string = '';
        inRoom: boolean = false;

        onSubmit: () => void;
        onJoin: () => void;
        onLeave: () => void;
        onClear: () => void;

        constructor(private $scope: angular.IScope,
            private chatService: ChatService) {

            chatService.start(this._newMessage, this._newNotification);

            this.onSubmit = () => {
                this._sendMessage(this.roomName, this.name, this.newMessage);
            }

            this.onClear = () => {
                this.newMessage = '';
            }

            this.onJoin = () => {
                this.inRoom = true;
                this.chatService.joinRoom(this.roomName, this.name);
            }

            this.onLeave = () => {
                this.inRoom = false;
                this.chatService.leaveRoom(this.roomName, this.name);
            }
        }

        private _sendMessage(roomName: string, name: string, newMessage: string): void {
            this.chatService.sendMessage(roomName, name, newMessage);
        }

        private _newMessage(message: string): void {
            this._displayMessage(message);
            this.$scope.$apply();
        }
        private _newNotification(message: string): void {
            console.log(message);
            //this.toastr.success(message);
        }
        private _displayMessage(message: string): void {
            this.history += "\r\n" + message;
        }
    }
    ChatController.$inject = ['$scope', 'chatService'];
    
}