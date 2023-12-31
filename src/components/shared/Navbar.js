"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';
import { Divider, IconButton, Menu, MenuItem, Stack } from '@mui/material';
import { Facebook, GitHub, LinkedIn } from '@mui/icons-material';

const pages = [
    {
        route: "Projects",
        pathname: "/#projects",
    },
    {
      route: "Education",
      pathname: "/#education",
    },
    {
      route: "Skills",
      pathname: "/#skill",
    },
    {
      route: "Experience",
      pathname: "/#experience",
    },
    {
      route: "About",
      pathname: "/#about",
    },
    {
      route: "Contact",
      pathname: "/#contact",
  },

];

function Navbar() {

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };

      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };

  return (
    <AppBar position="fixed" >
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            href="/"
            sx={{
              
              display: { xs: 'none', md: 'flex', },
              fontFamily: 'arial',
              width: '15%',
              fontWeight: 500,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link href={'/'}>Abdul Adud</Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
                <MenuIcon className='sm:visible md:hidden'/>
            </IconButton>

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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link href={page.pathname}>
                  {page.route}
              </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'arial',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link href={'/'}>Abdul Adud</Link>
          </Typography>
          <Box className='w-full text-center hidden md:block' >
            {pages.map((page) => (
              <Link key={page.route} href={page.pathname} >
                <Button
                  sx={{
                    mx: 2,
                    my: 2,
                    
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  {page.route}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>



    </AppBar>
  );
}
export default Navbar;