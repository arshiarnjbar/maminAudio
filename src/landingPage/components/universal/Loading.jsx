import { Box } from '@mui/system'
import React from 'react'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Loading() {
    const location = useLocation();
    const [loadingPage, setLoadingPage] = React.useState(true)

    useEffect(() => {
        // execute on location change
        // handleLoading()
        console.log('Location changed!', location.pathname);
    }, [location]);



    const handleLoading = () => {
        setLoadingPage(true)
        setTimeout(() => {
            setLoadingPage(false)
        }, 2000);
    }
    React.useEffect(() => {
        if (document.readyState === 'complete') {
            handleLoading()
        } else {
            document.addEventListener('DOMContentLoaded', handleLoading());
        }
    }, [])
    React.useEffect(() => {
        window.scroll(0, 0)
        document.querySelector('html').style.paddingTop = loadingPage ? "100vh" : "0"
        document.querySelector('html').style.overflow = loadingPage ? "hidden" : ""
    }, [loadingPage])


    return (
        <>
            {loadingPage && <Box
                component={motion.div}
                animate={{
                    backgroundColor: [
                        "#553a5b",
                        "#7A5383",
                        "#553a5b"
                    ]
                }}
                transition={{
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 2
                }}
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    // backgroundColor: "secondary.main",
                    textAlign: 'center',
                    alignContent: 'center',
                    zIndex: 10000
                }}
            >
                <MusicNoteIcon
                    color='secondary'
                    component={motion.svg}
                    style={{
                        fontSize: '64px'
                    }}
                    animate={{
                        y: [0, -10, 0],
                    }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: .5
                    }}

                />

            </Box>}
        </>

    )
}

export default Loading
