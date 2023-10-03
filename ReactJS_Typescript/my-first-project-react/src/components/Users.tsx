// import React, { useState, useEffect } from 'react'

// export const Users = () => {
//    const [users, setUsers] = useState<any[]>([]);

//    useEffect(() => {
//       fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then(data => {
//          console.log(data);
//          setUsers(data);
//       })
//    }, []);
//   return (
//    <div>
//       <h2>Users</h2>
//       {users.map((user, i) => <div key={`${user.name}-${i}`} className='userCard'>
//          <h3>{user.name}</h3>
//          <p>{user.email}</p>
//          {Object.values(user.company).map((data: any, i) => <p key={`${data}-${i}`}>{data}</p>)}
//       </div> )}
//    </div>
    
//   )
// }
