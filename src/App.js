import Navbar from './components/Navbar';
import Container from './components/Container';
import InsertPost from './components/InsertPost';
import InsertCategory from './components/InsertCategory';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import SingleContentView from './components/SingleContentView';
import Login from './components/Login';
import Register from './components/Register';
import { useEffect } from 'react';
import {useState} from 'react'


function App() {
const [login , setLogin] = useState();

  useEffect(()=>{
    
    if(localStorage.getItem('isLogin')==null){
      localStorage.setItem('isLogin',false)
    }
  },[])

  return (
    <BrowserRouter>

      <Navbar login />
      <Routes>
        <Route path="/" exact element={<Container />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/login" exact element={<Login setLogin={setLogin} />} />

        {
          (localStorage.getItem('isLogin')=='true') && <Route path="/insert/post" exact element={<InsertPost />} />
        }
        
        <Route path="/insert/category" exact element={<InsertCategory/>} />
        <Route path='/post/:id' exact element={<SingleContentView/>} />
        <Route path="/*" exact element={<Container />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
