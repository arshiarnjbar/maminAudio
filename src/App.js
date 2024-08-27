import LandingPage from './landingPage/LandingPage'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import AboutPage from './about/AboutPage';
import Contnact from './contact/ContactPage'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import getLPTheme from './landingPage/getLPTheme';
import PropTypes from 'prop-types';
import Box  from '@mui/material/Box';
import * as React from 'react';
import AutoAwesomeRounded from '@mui/icons-material/AutoAwesomeRounded';

import AppAppBar from './landingPage/components/AppAppBar';
import CssBaseline from '@mui/material/CssBaseline';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import Loading from './landingPage/components/universal/Loading';


function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'fixed',
        bottom: 24,
      }}
    >
      <ToggleButtonGroup
        color="primary"
        exclusive
        value={showCustomTheme}
        onChange={toggleCustomTheme}
        aria-label="Platform"
        sx={{
          backgroundColor: 'background.default',
          '& .Mui-selected': {
            pointerEvents: 'none',
          },
        }}
      >
        <ToggleButton value>
          <AutoAwesomeRounded sx={{ fontSize: '20px', mr: 1 }} />
          Custom theme
        </ToggleButton>
        <ToggleButton value={false}>Material Design 2</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

ToggleCustomTheme.propTypes = {
  showCustomTheme: PropTypes.shape({
    valueOf: PropTypes.func.isRequired,
  }).isRequired,
  toggleCustomTheme: PropTypes.func.isRequired,
};


function App() {
  const [mode, setMode] = React.useState('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(false);



  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  const LPtheme = createTheme(getLPTheme(mode));
  const MainColors = {
    primary: {
      light: '#94759b',
      main: '#7A5383',
      dark: '#553a5b',
      contrastText: '#fff'
    },
    secondary: {
      light: '#333037',
      main: '#49454F',
      dark: '#6d6a72',
      contrastText: '#000'
    }
  }
  const defaultTheme = createTheme({
    palette: {
      primary: {
        light: MainColors.primary.light,
        main: MainColors.primary.main,
        dark: MainColors.primary.dark,
        contrastText: MainColors.primary.contrastText
      },
      secondary: {
        light: MainColors.secondary.light,
        main: MainColors.secondary.main,
        dark: MainColors.secondary.dark,
        contrastText: MainColors.secondary.contrastText,
      }
    },
    components: {
      MuiToolbar: {
        styleOverrides:{
          root:{
            minHeight:"48px !important"
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "10px"
          }
        }
      },
      MuiSvgIcon: {
        styleOverrides: {
          root:{
            cursor: 'pointer'
          },
          colorPrimary: {
            color: MainColors.secondary.main,
            '&:hover': {
              color: MainColors.primary.main
            }
          },
          colorSecondary: {
            color: "white",
            '&:hover': {
              color: MainColors.primary.main
            }
          },
          fontSizeLarge: {
            height: "29px",
            width: "auto"
          }
        }
      },
    }
  });

    //loading page



  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <BrowserRouter>
      <CssBaseline />
      {/* {loadingPage && <Loading/>} */}
      <Loading />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
        <Routes path="/">
          <Route index element={<LandingPage/>} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<Contnact />} />
        </Routes>
      </BrowserRouter>
      {/* <ToggleCustomTheme
        showCustomTheme={showCustomTheme}
        toggleCustomTheme={toggleCustomTheme}
      /> */}
    </ThemeProvider>
  );
}

export default App;
