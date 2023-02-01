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
import { Link } from "react-router-dom";

function Nav2() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: '#293462' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/tetrachrome"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'April Fatface',
              fontWeight: 2500,
              fontSize: 36,
              // letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              textAlign: 'center'
            }}
          >
            <span className="tetra">tetra</span>chrome
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
              <MenuIcon />
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
                display: { xs: 'none', md: 'none', textDecoration: 'none', alignContent: 'center' },
              }}
            >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Link to="/tetrachrome/frontend">Frontend</Link></Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Link to="/tetrachrome/backend">Backend</Link></Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Link to="/tetrachrome/metrics">Metrics</Link></Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Link to="/tetrachrome/gettingstarted">Getting Started</Link></Typography>
                </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'April Fatface',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              textAlign: 'center'
            }}
          >
            <span className="tetra">tetra</span>chrome
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', textAlign: 'center' } }}>
            <Link to="/tetrachrome/frontend">
              <Button className="navButton"
                onClick={handleCloseNavMenu}
                sx={{ color: 'white', textDecoration: 'none' }}
              >Frontend</Button></Link>
            <Link to="/tetrachrome/backend">
              <Button className="navButton"
                onClick={handleCloseNavMenu}
                sx={{ color: 'white', textDecoration: 'none' }}
              >Backend</Button></Link>
            <Link to="/tetrachrome/metrics">
              <Button className="navButton"
                onClick={handleCloseNavMenu}
                sx={{ color: 'white', textDecoration: 'none' }}
              >Metrics</Button></Link>
            <Link to="/tetrachrome/gettingstarted">
              <Button className="navButton"
                sx={{ color: 'white', textDecoration: 'none' }}
                onClick={handleCloseNavMenu}
              >Getting Started</Button></Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nav2;