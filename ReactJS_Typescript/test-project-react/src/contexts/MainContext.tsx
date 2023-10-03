import React, {createContext, useState, PropsWithChildren } from 'react'
import { MainContextInterface, PostInterface } from '../types';

export const MainContext = createContext<MainContextInterface | null>(null);

export const MainContextProvider = (props: PropsWithChildren) => {
   const [posts, setPosts] = useState<PostInterface[]>([]);
   const [maxUserNumbers, setMaxUserNumbers] = useState<number>(0)

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
         renderPosts: renderPosts,
         maxUserNumbers: maxUserNumbers,
         setMaxUserNumbers: setMaxUserNumbers
      } 
    }>
      {props.children}
    </MainContext.Provider>
  )
  }
