import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2


import Typography from '@mui/material/Typography';

import WorkCard from './Card/WorkCard';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import OpenedWorkCard from './Card/OpenedWorkCard';
import Axios from 'axios';
import { useEffect } from 'react';
import WorkCardSkeleton from './Card/WorkCardSkeleton';


// import ButtonGroup from '@mui/icons-material/ButtonGroup';


export default function Features() {
  // fetch("http://catfact.ninja/fact").then(res=> res.json).then(data=>{
  //   console.log()
  // })
  const [catFact, setCatFact] = useState()


  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = ()=>{
    setLoading(true)
    const urlemoon = `https://maminaudio.com/api/wp-json/my/v1/crte/1?tags=${activeCategory}`
    console.log(urlemoon)
    Axios.get(urlemoon).then(res => {
      setCatFact(res.data)
      setWorks(JSON.parse(res.data))
      console.log(JSON.parse(res.data))
      setLoading(false)
    }).catch(err=>{
      console.log({err})
      setLoading(false)
    })
  }


  const [works, setWorks] = useState([
    {
      img: "/static/images/cards/chi.png",
      title: "Lizard",
      tags: ["Motion Graphic", "Animation", "Animation"],
      description: "its gonna be a long long texxtits gonna be a long long texxtits gonna be a long long texxtits gonna be a long long texxt"
    },
    {
      img: "/static/images/cards/chi.png",
      title: "Lizard",
      tags: ["Motion Graphic", "Animation", "Animation", "Animation", "Animation"],
      description: "its gonna be a long long texxtits gonna be a long long texxtits gonna be a long long texxtits gonna be a long long texxt"
    },
    {
      img: "/static/images/cards/chi.png",
      title: "Lizard",
      tags: ["Motion Graphic", "Animation"],
      description: "its gonna be a long long texxtits gonna be a long long texxtits gonna be a long long texxtits gonna be a long long texxt"
    },
    {
      img: "/static/images/cards/chi.png",
      title: "Lizard",
      tags: ["Motion Graphic", "Animation"],
      description: "its gonna be a long long texxtits gonna be a long long texxtits gonna be a long long texxtits gonna be a long long texxt"
    },
    {
      img: "/static/images/cards/chi.png",
      title: "Lizard",
      tags: ["Motion Graphic", "Animation"],
      description: "its gonna be a long long texxtits gonna be a long long texxtits gonna be a long long texxtits gonna be a long long texxt"
    },
    {
      img: "/static/images/cards/chi.png",
      title: "Lizard",
      tags: ["Motion Graphic", "Animation"],
      description: "its gonna be a long long texxtits gonna be a long long texxtits gonna be a long long texxtits gonna be a long long texxt"
    },
    {
      img: "/static/images/cards/chi.png",
      title: "Lizard",
      tags: ["Motion Graphic", "Animation"],
      description: "its gonna be a long long texxtits gonna be a long long texxtits gonna be a long long texxtits gonna be a long long texxt"
    },
    {
      img: "/static/images/cards/chi.png",
      title: "Lizard",
      tags: ["Motion Graphic", "Animation"],
      description: "its gonna be a long long texxtits gonna be a long long texxtits gonna be a long long texxtits gonna be a long long texxt"
    },
    {
      img: "/static/images/cards/chi.png",
      title: "Lizard",
      tags: ["Motion Graphic", "Animation"],
      description: "its gonna be a long long texxtits gonna be a long long texxtits gonna be a long long texxtits gonna be a long long texxt"
    },
    {
      img: "/static/images/cards/chi.png",
      title: "Lizard",
      tags: ["Motion Graphic", "Animation"],
      description: "its gonna be a long long texxtits gonna be a long long texxtits gonna be a long long texxtits gonna be a long long texxt"
    },
    {
      img: "/static/images/cards/chi.png",
      title: "Lizard",
      tags: ["Motion Graphic", "Animation"],
      description: "its gonna be a long long texxtits gonna be a long long texxtits gonna be a long long texxtits gonna be a long long texxt"
    },
    {
      img: "/static/images/cards/chi.png",
      title: "Lizard",
      tags: ["Motion Graphic", "Animation"],
      description: "its gonna be a long long texxtits gonna be a long long texxtits gonna be a long long texxtits gonna be a long long texxt"
    },
  ])
  const [selectedWork, setSelectedWork] = useState(false)

  const handleSetSelectedWork = (value) => {
    const html = document.querySelector('html');
    const body = document.querySelector('body');

    if (value !== false) {
      html.style['overflow'] = 'hidden'
      body.style['paddingRight'] = '16px'
    } else {
      html.style['overflow'] = ''
      body.style['paddingRight'] = ''
    }
    setSelectedWork(value)
  }

  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState([
    { name: 'All', slug: 'All' },
    { name: 'Motion graphic', slug: 'motiongraphic' },
    { name: 'Animation', slug: 'animation' },
    { name: 'StopMotion', slug: 'stopmotion' },
    { name: '2D', slug: '2danimation' }
  ])
  const [activeCategory, setActiveCategory] = useState('All')

  const handleSetCategory = (slug) => {
    try {
      console.log('try')
      setActiveCategory(slug)
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(true)
      getPosts()
      // setTimeout(() => {
      //   setLoading(false)
      // }, 3000);
    }

  }
  return (
    <Box sx={{ background: "#DFD5EC" }}>
      {/* {catFact} */}
      <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
        <Typography variant="h3" sx={{ textAlign: "center", mb: 2 }} color="primary">Latest works</Typography>
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          mb: 8,
          gap: "20px"
        }}>
          {categories.map(({ name, slug }) => {
            return (
              <Button
                key={`cat_${slug}`}
                variant="text"
                sx={{
                  color: slug !== activeCategory && 'black'
                }}
                onClick={() => handleSetCategory(slug)}
              >
                {name}
              </Button>
            )
          })}
        </Box>
        <Grid container spacing={2} >
          {works.map((work, index) => (
            <Grid xs={12} sm={6} md={4} lg={3}  key={`work_card_${index}`}>
              <AnimatePresence>
                {loading ?

                  <WorkCardSkeleton index={index} />
                  :
                  <WorkCard data={work} index={index} setSelectedWork={handleSetSelectedWork} />
                }
              </AnimatePresence>

            </Grid>
          ))}
        </Grid>
      </Container>
      <AnimatePresence>
        {selectedWork !== false && (
          <Box
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10000
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                background: "black",
                opacity: 0.5
              }}
            />

            <OpenedWorkCard data={works[selectedWork]} index={selectedWork} setSelectedWork={handleSetSelectedWork} />

            {/* <Typography variant="h1" color="">bache koon</Typography> */}
          </Box>
        )}
      </AnimatePresence>

    </Box>

  );
}
