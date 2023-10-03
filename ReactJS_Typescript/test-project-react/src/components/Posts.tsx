import React, { useContext, useEffect } from 'react'
import { MainContext } from '../contexts/MainContext'

export const Posts = () => {
   const {posts, setPosts, renderPosts} = useContext(MainContext)!;

   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
         setPosts(data);
      })
   }, [])
  return (
   <div>
   <h1>Posts</h1>
   {renderPosts()}
</div>
  ) 
}
