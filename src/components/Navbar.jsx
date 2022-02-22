import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom';



const Navbar = () => {
  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Button component={Link} to="/"  sx={{color:'white'}}>CRM</Button>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem sx={{display:'flex',flexDirection:'column'}}>
                  <Button component={Link} to="/insert/category" >Insert Category</Button>
                  <Button component={Link} to="/insert/post" >Insert Post</Button>
                </MenuItem>
            </Menu>

            <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none',alignItems:'center' } }}
          >
            <Button component={Link} to="/" sx={{color:'white'}}>CRM</Button>
          </Typography>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ml:'auto'}}
            >
              <MenuIcon />
            </IconButton>
          </Box>




          <Box sx={{ml:'auto', display: { xs: 'none', md: 'flex' } }}>
              <Button
                component={Link}
                to="/login"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Login
              </Button>

              <Button
                component={Link}
                to="/register"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Register
              </Button>

              <Button
                component={Link}
                to="/insert/category"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Insert Category
              </Button>

              {
                localStorage.getItem('isLogin')=='true'
                 && 
                 <Button
                 component={Link}
                 to="/insert/post"
                   onClick={handleCloseNavMenu}
                   sx={{ my: 2, color: 'white', display: 'block' }}
                 >
                   Insert Post
                 </Button>
              }

          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
