import React, { ReactNode, createContext, useState, PropsWithChildren } from 'react'
import { MainContextInterface, PostInterface } from '../types';

export const MainContext = createContext<MainContextInterface | null>(null);

// interface PropsInterface {
//   children: ReactNode[];
// }

export const MainContextProvider = (props: PropsWithChildren) => {
   console.log(props.children);
   const [posts, setPosts] = useState<PostInterface[]>([]);
   const renderPosts = () => {
      return <div className="posts">
         {posts.map((post) => <div key={`${post.id}`}>
            <p >{post.title}</p>
        </div> )}
      </div>
   }
  return (
    <MainContext.Provider value={
      {
         posts: posts, 
         setPosts: setPosts,
         renderPosts: renderPosts
      } 
    }>
      {props.children}
    </MainContext.Provider>
  )
}
