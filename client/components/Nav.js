import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";

function Nav() {

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
    // change the color of nav bar
    <AppBar position="static" sx={{ bgcolor: '#ad94d1' }}>
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
              fontFamily: 'Unica One',
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
                  <Typography textAlign="center"><Link to="/tetrachrome/logs">Logs</Link></Typography>
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
              fontFamily: 'Inter',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              textAlign: 'left'
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
            <Link to="/tetrachrome/logs">
              <Button className="navButton"
                onClick={handleCloseNavMenu}
                sx={{ color: 'white', textDecoration: 'none' }}
              >Logs</Button></Link>
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
export default Nav;