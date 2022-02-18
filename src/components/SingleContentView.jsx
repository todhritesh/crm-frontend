import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {useParams} from 'react-router-dom'
import { useEffect } from 'react';


export default function SingleContentView() {

    const params = useParams();
    const [postData , setPostData] = React.useState([])
  async function getSinglePostData(id){
    try{
        console.log(params.id)
      const res = await axios({
        method:'get',
        url:`http://localhost:8000/api/posts/${params.id}`
      })
      console.log(res.data.data)
      setPostData(res.data.data);
    }catch{
      console.log('post delete error')
    }
  }

  useEffect(()=>{
    getSinglePostData()
  },[])

  return (
    <Card sx={{maxHeight:'100vh',overflow:'auto', display: 'flex',flexDirection:'column',pt:'12%' }}>
      <CardMedia
        component="img"
        sx={{ minWidth: '30%',maxWidth: '50%',mx:'auto',objectFit:'contain' }}
        image={process.env.PUBLIC_URL + "/images/abc.png"}
        alt={postData.title}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column',minWidth: '70%', pb:10 }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {postData.title}
          </Typography>
          <Typography sx={{color:'green'}} component="div" variant="caption">
            author : {postData.author}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {postData.content}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
