import React,{useState,useEffect} from 'react';
import FormControl from '@mui/material/FormControl';
import { Button, Grid, Typography } from '@mui/material';
import { TextField } from '@mui/material';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

export default function Register() {

  const navigate = useNavigate()

  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  async function register(){
    try{
      const res = await axios({
        method:'post',
        url:'http://localhost:8000/api/register',
        data:{
          name,email,password
        }
      })
      setEmail('')
      setName('')
      setPassword('')
      navigate('/login')
    }catch{
      console.log('error')
    }
  }

  return (

    <Grid sx={{mt:15}}>
      <Grid item xs={4} sx={{mx:'auto',width:'100%',mt:4}}>
        <Typography variant="h5" sx={{mb:2}}>
          Register User
        </Typography>
      <FormControl fullWidth variant="standard" sx={{mb:2}}>
        <TextField label="Name" variant="outlined" color='primary'  onChange={(e)=>{return setName(e.target.value)}} value={name} id="bootstrap-input" placeholder="Name ..." />
      </FormControl>

      <FormControl fullWidth variant="standard" sx={{mb:2}}>
        <TextField label="Email" variant="outlined" color='primary'  onChange={(e)=>setEmail(e.target.value)} value={email} id="bootstrap-input" placeholder="Email ..." />
      </FormControl>

      <FormControl fullWidth variant="standard" sx={{mb:2}}>
        <TextField label="Password" variant="outlined" color='primary'  onChange={(e)=>setPassword(e.target.value)} value={password} id="bootstrap-input" placeholder="Password ..." />
      </FormControl>

      <Button onClick={register} variant="contained">
        Insert post
      </Button>
      </Grid>
    </Grid>
  );
}
