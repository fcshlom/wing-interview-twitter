export interface Tweet {
    id: string;
    userName: string;
    tweetText: string;
    createdAt: number;
}

export interface FocusFlag {
    setFocus: boolean
}