import { UserInterface } from "./user.interface";


export interface PostInterface {

    id:number;
    title:string;
    text:string;
    user: UserInterface;

}