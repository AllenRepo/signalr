/// <reference path="../../../typings/jquery/jquery.d.ts" />
/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/signalr/signalr.d.ts" />
/// <reference path="../../common/signalr/ChatProxy.d.ts" />
declare module Chat {
    class ChatService {
        sendMessage: (roomName: string, name: string, message: string) => void;
        joinRoom: (roomName: string, name: string) => void;
        leaveRoom: (roomName: string, name: string) => void;
        start: (onNewMessage: (msg: string) => void, onNewNotification: (msg: string) => void) => void;
        private isStarted;
        constructor();
    }
}
