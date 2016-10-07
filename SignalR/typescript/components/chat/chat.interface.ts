module Chat {
    export interface IChatViewModel {
        history: string;
        newMessage: string;
        name: string;
        roomName: string;
        inRoom: boolean;

        onSubmit():void;
        onJoin(): void;
        onLeave(): void;
        onClear(): void;
    }
}