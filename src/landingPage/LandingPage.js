import * as React from 'react';

import Box from '@mui/material/Box';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';



export default function LandingPage() {


  return (
    <>

        <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Features />
        <Footer />
      </Box>
    </>

  );
}
