
import './App.css';
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Home from './Components/Home';

import Service from './Components/Service';
import ServiceList from './Components/ServiceList';
import { useEffect, useState } from 'react';
import  Axios  from 'axios';
import User from './Components/User';
import UserList from './Components/UserList';
import Calculator from './Components/Calculator';
import Resume from './Components/Resume';
import ApiComponent from './Components/ApiComponent';
function App() {

  const [value,SetValue]=useState('')
  const [UserValue,setUserValue]=useState('')
useEffect(()=>{
  Axios.get('http://localhost:5000/service')
  .then((res)=>{
    SetValue(res.data)
    
  },[])
})
useEffect(()=>{
  Axios.get('http://localhost:5000/user')
  .then((res)=>{
    setUserValue(res.data)

  },[])
})


  return (
    <div className="App">
     <BrowserRouter>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          
          <li>
            <Link to='/calculator'>Calculator</Link>
          </li>
          <li>
            <Link to='/resume'>Resume</Link>
          </li>
          <li>
            <Link to='/api'>Rick And Morty Api</Link>
          </li>
          <li>
            <Link to='/Service'>Service</Link>
          </li>
          <li>
            <Link to='/user'>User</Link>
          </li>
          
        </ul>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/calculator' element={<Calculator/>}></Route>
          <Route exact path='/resume' element={<Resume/>}></Route>
          <Route exact path='/api' element={<ApiComponent/>}></Route>
          <Route exact path='/user' element={<User/>}></Route>
          <Route exact path='/service' element={<Service/>}></Route>
          <Route exact path={`/service/${value.length}`} element={<ServiceList arrayLength={value.length}/>}></Route>
        <Route exact path={`/user/${UserValue.length}`} element={<UserList userLength={UserValue.length}/>}></Route>
        </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
