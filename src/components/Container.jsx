import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ContentInCard from './ContentInCard';
import CategoryList from './CategoryList';
import axios from 'axios';

export default function Container() {
  const [postData , setPostData] = useState([])
  async function getData(){
    try{
      const res = await axios.get('http://127.0.0.1:8000/api/posts')
      const data = res.data.data;
      setPostData(data)
      // console.log(postData)
    }catch{
      console.log('error')
    }
  }
  console.log(postData)
  useEffect(()=>{
    getData();
  },[])
  return (
    <Box sx={{ mt:4,px:2 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8} sx={{maxHeight:'100vh',overflow:'auto',paddingBottom:'10vh'}}>
          {
            postData.map((item , i)=>(
              <ContentInCard title={item.title} content={item.content} image={item.image} author={item.author} />
            ))
          }
        </Grid>
        <Grid item xs={6} md={4} sx={{maxHeight:'100vh',overflow:'auto'}}>
            <CategoryList/>
        </Grid>
      </Grid>
    </Box>
  );
}
