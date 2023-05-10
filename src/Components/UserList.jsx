import React, { useEffect, useState } from 'react'
import Axios from 'axios'


function UserList(props) {

  const [user,setUser]=useState('')
  useEffect(()=>{
    Axios.get(`http://localhost:5000/user/${(props.userLength-1)}`)
    .then((res)=>{
      setUser(res.data);
      console.log(res.data);
    })
  },[])
  return (
    <div>
      <p>User Name : {user.name}</p>
     <a href='http://localhost:3000/user'><button>New User</button></a>
    </div>
  )
}

export default UserList