import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import {Link} from 'react-router-dom'


export default function ContentInCard({postData,setPostData,title,author,content,id,image}) {

  async function deletePost(id){
    try{
      const res = await axios({
        method:'delete',
        url:`http://localhost:8000/api/posts/${id}`
      })
      console.log(res.data.msg)
      const newData = postData.filter((item)=>item.id!==id)
      setPostData(newData);
    }catch{
      console.log('post delete error')
    }

  }

  return (
    <Card sx={{ display: 'flex',mb:3 , py:2 }}>
      <CardMedia
        component="img"
        sx={{ minWidth: '30%',objectFit:'contain' }}
        image={process.env.PUBLIC_URL + "/images/abc.png"}
        alt={title}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column',minWidth: '70%' }}>
        <Box sx={{display:'flex',justifyContent:'end'}}>
          <IconButton >
            <DeleteIcon onClick={()=>deletePost(id)}/>
          </IconButton>
        </Box>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography sx={{color:'green'}} component="div" variant="caption">
            author : {author}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {content}
          </Typography>
        </CardContent>
      <Button to={`/post/${id}`} sx={{ml:'auto'}} variant="contained" component={Link}>
        Read more
      </Button>
      </Box>
    </Card>
  );
}
