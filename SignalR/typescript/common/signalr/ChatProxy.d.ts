interface SignalR {
    chatHub: ChatHubProxy;
}
interface ChatHubProxy {
    client: ChatClient;
    server: ChatServer;
}
interface ChatClient {
    newMessage(msg: string):void;
    newNotification(msg: string): void;
}
interface ChatServer {
    sendMessage(msg: IMessageModel): JQueryPromise<void>;
    joinRoom(roomName: string, name: string);
    leaveRoom(roomName: string, name: string);
}
interface IMessageModel {
    Message: string;
    RoomName: string;
    Name: string;
}