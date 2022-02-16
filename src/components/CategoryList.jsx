import {useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import axios from 'axios';


export default function CategoryList() {
  const [catData , setCatData] = useState([])
  async function getCatData(){
    try{
      const res = await axios.get('http://127.0.0.1:8000/api/category');
      const data = res.data.data;
      setCatData(data);
    }catch{
      console.log('fetching data cat error')
    }
  }
  useEffect(()=>getCatData(),[]);

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          {
            catData.map((cat , i)=>(

          <ListItem key={i} disablePadding>
            <ListItemButton>
              <ListItemText primary={cat.cat_title} />
            </ListItemButton>
          </ListItem>

            ))
          }
        </List>
      </nav>
      <Divider />
    </Box>
  );
}
