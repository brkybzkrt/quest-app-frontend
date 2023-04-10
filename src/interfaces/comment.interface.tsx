import { PostInterface } from "./post.interface";
import { UserInterface } from "./user.interface";


export interface CommentInterface {

    id:number;
    title:string;
    text:string;
    user: UserInterface;
    post: PostInterface;
}