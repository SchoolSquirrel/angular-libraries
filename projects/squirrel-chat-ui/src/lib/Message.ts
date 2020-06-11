export interface Message {
    id: number;
    text: string;
    fromMe: boolean;
    sender: {
        id: number;
        name: string;
    };
}
