import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SocialMediaIcons from './SocialMediaIcons';

import { useMediaQuery, useTheme } from '@mui/material';


import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useState } from 'react';
import  Axios  from 'axios';
import MaminSnack from './universal/MaminSnack';
import { useRef } from 'react';

const schema = yup
  .object({
    email: yup.string().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g).required(),
    // name: yup.string().min(3).required(),
  })
  .required()

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1, alignContent: "end", mb: 2 }}>
      {'Copyright © '}
      <Link href="https://tinybug.dev/">MaminAudio&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}
function DesignedBy() {
  return (
    <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1, alignContent: "end", mb: 2 }}>
      {'Designed by'}
      <Link href="https://tinybug.dev/"> TinyBug</Link>
    </Typography>
  );
}

export default function Footer() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const [disabledForm, setDisabledForm] = useState(false)

  const childRef = useRef();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => {
    setDisabledForm(true)
    Axios.get(`https://maminaudio.com/api/wp-json/my/v1/newsletter/1?email=${data.email}`).then(res=>{
      console.log(JSON.parse(res.data).message)
      childRef.current.getAlert(JSON.parse(res.data).message)
    }).catch(()=>{
      childRef.current.getAlert('error')
    })
    setTimeout(() => {
      setDisabledForm(false)
    }, 1500);
  }




  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        pt: 4,
        px: {
          xs:2,
          md:15
        },
        textAlign: { sm: 'center', md: 'left' },
        position: "relative",
        backgroundColor: "#CABACD"
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', sm: 'row' },
          alignItems: {xs:'center'},
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '33.3333%' },
          }}
        >
          <Box textAlign={'center'}>
            <img src="static/footerlogo.png" alt='' />
          </Box>
          <Box sx={{ width: { xs: '100%', sm: '60%' }, py: 10 }}>
            <img width="124px" src="static/images/footer/lileGirl.svg" style={{
              position: 'absolute',
              bottom: 0
            }} />

          </Box>
        </Box>

        <Box
          sx={{
            display: { sm: 'flex' },
            flexDirection: 'column',
            textAlign:'center',
            minWidth: { xs: '100%', sm: '33.3333%' },
            alignItems: "center"
          }}
        >
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 500 }} color='primary.main'>
            Join to my newsletter
          </Typography>
          <form style={{display:'flex', flexDirection:'column', alignItems:'center'}}  onClick={handleSubmit(onSubmit)}>
            <TextField
              required
              id="outlined-required"
              label="Your email"
              placeholder='Email adress'
              // defaultValue="Hello World"
              error={errors.email}
              {...register("email")}
              sx={{ mb: 2 ,display:'block'}}
            />
            {/* {Object.keys(errors).length !== 0 && !errors.email &&
                      <TextField
                      required
                      id="outlined-required"
                      label="Required"
                      // defaultValue="Hello World"
                      error={errors.name}
                      {...register("name")}
                      sx={{ mb: 2 }}
                    />
          } */}
            <Button type="submit" disabled={disabledForm} variant="contained" sx={{ px: 8,mb:2,mt:2 }} startIcon={<MailOutlineIcon sx={{ color: "white" }} color='success' />}>
              Subscribe
            </Button>
          </form>
          <MaminSnack  ref={childRef} />

          <DesignedBy />
        </Box>
        <Box
          sx={{
            display: { sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
            minWidth: { xs: "auto", sm: '33.3333%' },
            pb: 4,
            alignItems: "end"
          }}
        >
          <SocialMediaIcons color="secondary" mode={isSmallScreen ? '' : 'vertical'} />
        </Box>
      </Box>
    </Box>
  );
}
