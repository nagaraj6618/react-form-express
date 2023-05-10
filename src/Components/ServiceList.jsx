import  Axios  from 'axios'
import React, { useEffect, useState } from 'react'


function ServiceList(props){

  const [service,setService]=useState([]);
  useEffect(()=>{
    Axios.get(`http://localhost:5000/service/${(props.arrayLength-1)}`).then((res)=>{
 
      console.log(res.data)
      setService(res.data)

  })
  },[])

  return (
    <div>
     
        <p>SERVICE NAME : {service.name}</p>
        <p>SERVICE DURATION : {service.duration}</p>
        <p>SERVICE COST : {service.cost}</p>


    <a href='http://localhost:3000/Service'> <button >Add New</button></a>
    </div>
  )
}

export default ServiceList