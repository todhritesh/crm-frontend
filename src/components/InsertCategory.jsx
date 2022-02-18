import React,{useState,useEffect} from 'react';
import FormControl from '@mui/material/FormControl';
import { Button, Grid, Typography } from '@mui/material';
import { TextField } from '@mui/material';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

export default function InsertCategory() {

  const navigate = useNavigate()

  const [catTitle , setCatTitle] = useState('')
  const [catDescription , setCatDescription] = useState('')

  async function addCatData(){
    try{
      const res = await axios({
        method:'post',
        url:'http://localhost:8000/api/category',
        data:{
          cat_title:catTitle,
          cat_description:catDescription
        }
      })
      setCatTitle('')
      setCatDescription('')
      navigate('/')
    }catch{
      console.log('error')
    }
  }

  return (

    <Grid sx={{mt:15}}>
      <Grid item xs={4} sx={{mx:'auto',width:'100%',mt:4}}>
        <Typography variant="h5" sx={{mb:2}}>
          Insert Category Data
        </Typography>
      <FormControl fullWidth variant="standard" sx={{mb:2}}>
        <TextField label="Category Title" variant="outlined" color='primary'  onChange={(e)=>{return setCatTitle(e.target.value)}} value={catTitle} placeholder='' id="bootstrap-input" placeholder="Title ..." />
      </FormControl>

      <FormControl fullWidth variant="standard" sx={{mb:2}}>
        <TextField label="Category Description" variant="outlined" color='primary'  onChange={(e)=>setCatDescription(e.target.value)} value={catDescription} multiline rows={6} placeholder='' id="bootstrap-input" placeholder="Content ..." />
      </FormControl>

      <Button onClick={addCatData} variant="contained">
        Insert post
      </Button>
      </Grid>
    </Grid>
  );
}
