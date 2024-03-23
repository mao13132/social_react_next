export interface IUser {
    email: string,
    image: string,
    name: string,
}

export interface IMessage {
    id: string,
    text: string,
    createdAt: string,
    sender: IUser,
}

export interface IChat {
    message: IMessage[],
    partocopants: IUser[],
}
