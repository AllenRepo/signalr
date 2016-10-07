/// <reference path="../../../typings/jquery/jquery.d.ts" />
/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/signalr/signalr.d.ts" />
/// <reference path="../../common/signalr/chatproxy.d.ts" />

module Chat {
    angular.module('chat.service', [])
        .service('chatService', ChatService);

    export class ChatService {
        public sendMessage: (roomName: string, name: string, message: string) => void;
        public joinRoom: (roomName: string, name: string) => void;
        public leaveRoom: (roomName: string, name: string) => void;
        public start: (onNewMessage: (msg:string) => void, onNewNotification: (msg:string) => void) => void;

        private isStarted: boolean;
        constructor() {
            this.sendMessage = (roomName, name, message) => {
                var data: IMessageModel = {
                    RoomName: roomName,
                    Name: name,
                    Message: message
                };

                $.connection.chatHub.server.sendMessage(data);
            }

            this.joinRoom = (roomName: string, name: string) => {
                $.connection.chatHub.server.joinRoom(roomName, name);
            }

            this.leaveRoom = (roomName: string, name: string) => {
                $.connection.chatHub.server.leaveRoom(roomName, name);
            }

            this.start = (onNewMessage, onNewNotification) => {
                if (!this.isStarted) {
                    $.connection.chatHub.client.newMessage = onNewMessage;
                    $.connection.chatHub.client.newNotification = onNewNotification;

                    $.connection.hub.logging = true;
                    $.connection.hub.start();
                    $.connection.hub.error(function (err) {
                        console.log('Error: ' + err);
                    });
                    this.isStarted = true;
                }
            }
        }
    }
}