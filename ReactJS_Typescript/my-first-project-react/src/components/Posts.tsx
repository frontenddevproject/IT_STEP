// import React, { useContext, useEffect } from 'react'
// import { MainContext } from '../contexts/MainContext'

// export const Posts = () => {
//    const {posts, setPosts, renderPosts} = useContext(MainContext)!;
//    console.log(posts, "POSTS")

//    useEffect(() => {
//       fetch("https://jsonplaceholder.typicode.com/posts")
//       .then(response => response.json())
//       .then(data => {
//          console.log(data);
//          setPosts(data);
//       })
//    }, [])
//   return (
//    <div>
//    <h1>Posts</h1>
//    {renderPosts()}
// </div>
//   )
// }
