import React, { useState, useEffect, useContext } from 'react'
import { MainContext } from '../contexts/MainContext'

export const Users = () => {
   const [users, setUsers] = useState<any[]>([]);
   const {maxUserNumbers, setMaxUserNumbers} = useContext(MainContext)!;
   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
         console.log(data);
         setUsers(data);
         setMaxUserNumbers(5);
      })
   }, []);
   
  return (
   <div>
      <h2>Users</h2>
      {users.slice(maxUserNumbers).map((user, i) => 
      <div key={`${user.name}-${i}`} className='userCard'>
         <h3>{user.name}</h3>
         <p>{user.email}</p>
         {Object.values(user.company).map((data: any, i) => <p key={`${data}-${i}`}>{data}</p>)}
      </div> )}
   </div>
    
  )
}
