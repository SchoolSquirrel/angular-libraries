import { MessageStatus } from "./MessageStatus";

export interface Message {
    id: number;
    text: string;
    fromMe: boolean;
    sender: {
        id: number;
        name: string;
    };
    status?: MessageStatus;
}
