import { Dispatch, JSX } from "react";
import { JsxElement } from "typescript";

export interface MainContextInterface {
   posts: PostInterface[];
   setPosts: Dispatch<PostInterface[]>;
   renderPosts: () => JSX.Element;
   maxUserNumbers: number;
   setMaxUserNumbers: Dispatch<number>;
}

export interface PostInterface {
   body: string;
   id: number;
   title: string;
   userId: number;
}