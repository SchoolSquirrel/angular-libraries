import { MessageStatus } from "./MessageStatus";
import { User } from "./User";

export interface Message {
    id: number;
    text: string;
    fromMe: boolean;
    sender: User;
    status?: MessageStatus;
    edited?: boolean;
    date: Date;
    reactions?: Record<string, User[]>;
}
