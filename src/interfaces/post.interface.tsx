import { User } from "./user.interface";


export interface Post {

    id:number;
    title:string;
    text:string;
    user: User;

}