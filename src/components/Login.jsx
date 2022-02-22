import React,{useState,useEffect} from 'react';
import FormControl from '@mui/material/FormControl';
import { Button, Grid, Typography } from '@mui/material';
import { TextField } from '@mui/material';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

export default function Login({setLogin}) {

  const navigate = useNavigate()

  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  async function verify(){
    try{
      const res = await axios({
        method:'post',
        url:'http://localhost:8000/api/login',
        data:{
          email,password
        }
      })
      console.log(res.status)
      if(res.status>=300){ throw new Error(res);}
      console.log(res)
      localStorage.setItem('isLogin',true);
      localStorage.setItem('user',JSON.stringify(res.data.user))
      setLogin(true)
      setEmail('')
      setPassword('')
      navigate('/')
    }catch(err){
      console.log('login error')
      console.log(err.response)
    }
  }

  return (

    <Grid sx={{mt:15}}>
      <Grid item xs={4} sx={{mx:'auto',width:'100%',mt:4}}>
        <Typography variant="h5" sx={{mb:2}}>
          Login
        </Typography>
      <FormControl fullWidth variant="standard" sx={{mb:2}}>
        <TextField label="Email" variant="outlined" color='primary'  onChange={(e)=>setEmail(e.target.value)} value={email} id="bootstrap-input" placeholder="Email ..." />
      </FormControl>

      <FormControl fullWidth variant="standard" sx={{mb:2}}>
        <TextField label="Password" variant="outlined" color='primary'  onChange={(e)=>setPassword(e.target.value)} value={password}  id="bootstrap-input" placeholder="Password ..." />
      </FormControl>

      <Button onClick={verify} variant="contained">
        Insert post
      </Button>
      </Grid>
    </Grid>
  );
}
