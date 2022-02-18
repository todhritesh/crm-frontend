import React,{useState,useEffect,useContext} from 'react';
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
    }catch{
      console.log('error')
    }
  }
  useEffect(()=>{
    getData();
  },[])

  return (
    <Box sx={{pt:'5%',mb:0,px:2}}>
      <Grid container spacing={2}>
        <Grid item sx={12} md={9} sx={{maxHeight:'100vh',overflow:'auto',paddingBottom:'10vh'}}>
          {
            postData.map((item )=>(
              <ContentInCard postData={postData} setPostData={setPostData} id={item.id} title={item.title} content={item.content} image={item.image} author={item.author} />
            ))
          }
        </Grid>
        <Grid item xs={12} xs={6} md={3} sx={{maxHeight:'100vh',overflow:'auto',paddingBottom:'10vh'}}>
            <CategoryList/>
        </Grid>
      </Grid>
    </Box>
  );
}
