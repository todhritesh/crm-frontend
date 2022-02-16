import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

export default function ContentInCard({title,author,content,key,image}) {
console.log(process.env.PUBLIC_URL + 'images')
  return (
    <Card sx={{ display: 'flex',mb:3 , py:2 }}>
      <CardMedia
        component="img"
        sx={{ minWidth: '30%',objectFit:'contain' }}
        image={process.env.PUBLIC_URL + "/images/abc.png"}
        alt={title}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column',minWidth: '70%' }}>
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
      <Button sx={{ml:'auto'}} variant="contained">
        Read more
      </Button>
      </Box>
    </Card>
  );
}
