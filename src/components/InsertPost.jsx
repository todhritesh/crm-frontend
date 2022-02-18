import React,{useState,useEffect} from 'react';
import FormControl from '@mui/material/FormControl';
import { Button, Grid, Typography ,MenuItem ,InputLabel, Select} from '@mui/material';
import { TextField } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function InsertPost() {

  const categoryDataCall = async () => {
    try{
      const res = await axios('http://localhost:8000/api/category');
      setCategoryData(res.data.data)
    }catch{

    }
  }


  const navigate = useNavigate()
  const [title , setTitle] = useState('')
  const [author , setAuthor] = useState('')
  const [content , setContent] = useState('')
  const [categoryId , setCategoryId] = useState('')
  const [categoryData , setCategoryData] = useState([]);

  useEffect(()=>{
    categoryDataCall()
  },[])

  async function addPostData(){
    console.log('hello')
    if(title===''||author===''||content===''||categoryId===''){
      console.log('empty')
    }else{
      try{
        const res = await axios('http://localhost:8000/api/posts',{
          method:'post',
          data:{
            title:title,
            author:author,
            content:content,
            category_id:categoryId
          }
        });
        navigate('/')
      }catch{
        console.log('error')
      }
    }
  }


  return (

    <Grid sx={{mt:15}}>
      <Grid item xs={4} sx={{mx:'auto',width:'100%',mt:4}}>
        <Typography variant="h5" sx={{mb:2}}>
          Insert Post Data
        </Typography>
      <FormControl fullWidth variant="standard" sx={{mb:2}}>
        <TextField label="Title" variant="outlined" color='primary'  onChange={(e)=>{return setTitle(e.target.value)}} value={title} placeholder='' id="bootstrap-input" placeholder="Title ..." />
      </FormControl>

      <FormControl fullWidth variant="standard" sx={{mb:2}}>
        <TextField label="Author" variant="outlined" color='primary'  onChange={(e)=>setAuthor(e.target.value)} value={author} placeholder='' id="bootstrap-input" placeholder="Author ..." />
      </FormControl>



      <FormControl  fullWidth variant="standard" sx={{mb:2}}>
        <InputLabel id="demo-simple-select-label">Category Id</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Category Id"
          onChange={(e)=>setCategoryId(e.target.value)}
           value={categoryId} 
          >
            {
              categoryData.map((item)=>(
                <MenuItem key={item.id} value={item.id}>{item.cat_title}</MenuItem>
              ))
            }
        </Select>
      </FormControl>

      <FormControl fullWidth variant="standard" sx={{mb:2}}>
        <TextField label="Content" variant="outlined" color='primary'  onChange={(e)=>setContent(e.target.value)} value={content} multiline rows={6} placeholder='' id="bootstrap-input" placeholder="Content ..." />
      </FormControl>

      <Button onClick={addPostData} variant="contained">
        Insert post
      </Button>
      </Grid>
    </Grid>
  );
}
