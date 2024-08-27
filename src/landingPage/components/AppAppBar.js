import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode';
import { motion } from 'framer-motion';

import { useNavigate } from 'react-router-dom'
import { Snackbar } from '@mui/material';
import Fade from '@mui/material/Fade';


const logoStyle = {
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
};

function AppAppBar({ mode, toggleColorMode }) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };
  const handleMenuNavigatation = (name)=>{
    navigate(name)
    setOpen(false);
  }
  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
  });

  const handleClick = (Transition) => () => {
    setState({
      open: true,
      Transition,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  return (
    <div>
      <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        message="Coming soon"
        key={state.Transition.name}
        autoHideDuration={1200}
      />
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 1,
          maxHeight:"48px"
        }}
      >
        <motion.div
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.2 }}
        >

          <Container maxWidth="lg">
            <Toolbar
              variant="regular"
              sx={(theme) => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexShrink: 0,
                borderRadius: '999px',
                bgcolor:
                  theme.palette.mode === 'light'
                    ? 'rgba(115, 115, 115, 0.15)'
                    : 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(10px)',
                minHeight: "40px",
              })}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  // ml: '-18px',
                  px: 0,
                }}
              >
                <img
                  src={"../../static/Menulogo.png"}
                  style={logoStyle}
                  alt="logo of maminAudio"
                  onClick={() => navigate("")}
                />

              </Box>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <MenuItem
                  onClick={() => navigate("")}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 400 }} color="text.white">
                    Home
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => navigate("/about")}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 400 }} color="text.white">
                    About
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => navigate("/contact")}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 400 }} color="text.white">
                    Contact
                  </Typography>
                </MenuItem>
              </Box>
              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  gap: 0.5,
                  alignItems: 'center',
                }}
              >
                <ToggleColorMode mode={mode} toggleColorMode={handleClick(Fade)} />
                <Button
                  color="primary"
                  variant="contained"
                  size="medium"
                  component="a"
                  href="https://www.instagram.com/maminaudio/"
                  target="_blank"
                >
                  Follow me
                </Button>
              </Box>
              <Box sx={{ display: { sm: '', md: 'none' } }}>
                <Button
                  variant="text"
                  color="primary"
                  aria-label="menu"
                  onClick={toggleDrawer(true)}
                  sx={{ minWidth: '30px', p: '4px' }}
                >
                  <MenuIcon />
                </Button>
                <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                  <Box
                    sx={{
                      minWidth: '60dvw',
                      p: 2,
                      backgroundColor: 'background.paper',
                      flexGrow: 1,
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'end',
                        flexGrow: 1,
                      }}
                    >
                      <ToggleColorMode mode={mode} toggleColorMode={handleClick(Fade)} />
                    </Box>

                    <MenuItem onClick={() => handleMenuNavigatation('')}>
                    Home
                    </MenuItem>
                    <MenuItem onClick={() => handleMenuNavigatation('about')}>
                    About
                    </MenuItem>
                    <MenuItem
                    onClick={() => handleMenuNavigatation('contact')}
                    // onClick={() => scrollToSection('highlights')}
                    >
                    Contact
                    </MenuItem>
                    <Divider />
                    {/* <MenuItem>
                      <Button
                        color="primary"
                        variant="contained"
                        component="a"
                        href="/material-ui/getting-started/templates/sign-up/"
                        target="_blank"
                        sx={{ width: '100%' }}
                      >
                        Sign up
                      </Button>
                    </MenuItem>
                    <MenuItem>
                      <Button
                        color="primary"
                        variant="outlined"
                        component="a"
                        href="/material-ui/getting-started/templates/sign-in/"
                        target="_blank"
                        sx={{ width: '100%' }}
                      >
                        Sign in
                      </Button>
                    </MenuItem> */}
                  </Box>
                </Drawer>
              </Box>
            </Toolbar>
          </Container>
        </motion.div>

      </AppBar>
    </div>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;
