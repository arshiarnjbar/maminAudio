import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import MCard from './Card/MCard';
import { useState } from 'react';
import SocialMediaIcons from './SocialMediaIcons';
import { motion } from "framer-motion"
import { heroDefaultCss } from './data/heroDefaultCss';
import { useNavigate } from 'react-router-dom';

const backgroundStyle = {
  top: 0,
  left: 0,
  position: "absolute",
  zIndex: -1,
  width: "100%"
}
const maminLogo = {
  width: "507px",
  height: "auto",
  maxWidth: "100%"
}

export default function Hero() {
  const navigate = useNavigate()
  const [heroCardsIconName] = useState([
    {
      title: "Music producing",
      iconName: "media_output"
    },
    {
      title: "Sound Design",
      iconName: "graphic_eq"
    },
    {
      title: "Narration",
      iconName: "adaptive_audio_mic"
    },
    {
      title: "Mix & Master",
      iconName: "instant_mix"
    }
  ])
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        ...heroDefaultCss,
        backgroundImage: 'url("../../static/peakpx 1.png")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          ...heroDefaultCss,
          pt: { xs: 10, sm: 9 },
          pb: { xs: 4, sm: 6 },
          gap: "8px"
        }}
      >
        <motion.div
          initial={{ y: -110 }}
          whileInView={{ y: 0 }}
        >
          <SocialMediaIcons color="secondary" />
        </motion.div>

        <motion.div
          initial={{ y: -200 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.3 }}
          exit={console.log('done')}
        >
          <img style={maminLogo} src={"../../static/mamin.png"} />
        </motion.div>


        <Box
          sx={{
            display: "flex",
            alignItems: {xs:"center",md:'start'},
            flexDirection: "column",
            flexGrow: 1,
            justifyContent: "center",
            alignSelf: { xs: "center", md: "start" }
          }}
          component={motion.div}
          initial={{ x: -300 }}
          whileInView={{ x: 0 }}
        >

          <Box component="section" sx={{ p: 2, background: 'rgba(0,0,0,0.40)', color: 'white', maxWidth: "500px" }}>
            In Maminaudio we make music for animations, motion graphics, short films and commercial videos in all genres (Orghestral, electronics, jazz & ...) and design sound effects suitable for your taste.
          </Box>
          <Button onClick={() => navigate('/about')} variant="contained" size="large" color="primary" sx={{ my: 2 }}>
            About me
          </Button>

        </Box>
        <Box
          maxWidth={{ xs: '500px', md: '100%' }}
          width={"100"}
          component={motion.div}
          initial={{ y: -100 }}
          whileInView={{ y: 0 }}
        style={{ width: "100%" }}
        >
          <Grid container spacing={2}>
            {heroCardsIconName.map((cardDetail, index) => (
              <Grid key={`m_card_${index}`} justifyContent={'space-between'} item xs={6} md={3} > {/* Update alignItems prop here */}
                <MCard iconName={cardDetail.iconName} title={cardDetail.title} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
