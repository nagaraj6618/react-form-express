import React, { useEffect } from 'react'

function User() {

 
  return (
    <div>
      <form action='http://localhost:5000/user' method='post'>
        <label htmlFor='name'>Name :</label>
        <input type='text' name='name' id='name'/>
      
        <button type='submit'> Submit </button>
        
      </form>
    </div>
  )
}

export default User