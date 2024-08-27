
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { motion } from 'framer-motion';
import { Button, Chip, Grid, Skeleton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

import ReactPlayer from 'react-player';

const OpenedWorkCard = ({ data, index, setSelectedWork }) => {
    const [videoIsReady, setVideoIsReady] = useState(0)
    const theme = useTheme();
    useEffect(() => {
        setTimeout(() => {

        }, 400);
    }, [])


    const handleVideoIsReady = (value) => {
        setVideoIsReady(value ? 1 : 0)
        console.log('aloo')
    }
    return (
        <>
            <Card
                component={motion.div}
                layoutId={`card_${index}`}
                sx={{
                    display: 'flex',
                    position: 'relative',
                    overflowY: 'auto',
                    backgroundColor: "secondary.main",
                    maxWidth: 900,
                    maxHeight: {
                        xs: "100%",
                        sm: "calc(90vh - 32px)"
                    },
                    width: "100%",
                    borderRadius: {
                        xs: 0,
                        sm: 5
                    },
                    p: 2
                }}>
                <IconButton
                    sx={{
                        position: {
                            xs:'fixed',
                            sm:'absolute'
                        },
                        zIndex:10001,
                        top: 4,
                        right: 4
                    }}
                    aria-label="fingerprint"
                    color="secondary"
                    onClick={() => { setSelectedWork(false) }}
                >
                    <CloseIcon sx={{color:'white'}}/>
                </IconButton>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                // columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    <Grid item xs={12} sm={4}  >
                        <motion.div
                            layoutId={`img_${index}`}
                            style={{
                                height: "100%",
                                overflow:'hidden',
                                padding:'16px'
                            }}
                        >
                            <iframe
                             src={`https://video.maminaudio.com/?videoID=${data.video}`}
                             frameborder="0"
                             style={{
                                maxHeight: "calc(90vh - 32px)",
                                aspectRatio: 6 / 10.5,
                                borderRadius: 20,
                                overflow:'hidden',
                                maxWidth: '100%',
                                width:'100%'
                            }}
                             ></iframe>
                            {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <InstagramEmbed url="https://www.instagram.com/p/C844PaJoJOZ/"  />
                            </div> */}
                            {/* {
                                !videoIsReady &&
                                <Skeleton
                                variant="rounded"
                                animation="wave"
                                width={"100%"}
                                height={"100%"}
                                // opacity={videoIsReady}
                                style={{
                                    transition: "0.3s",
                                    maxHeight: "calc(90vh - 32px)",
                                    borderRadius:5
                                }}
                            />
                            }

                            <ReactPlayer
                                width={"100%"}
                                height={"100%"}
                                style={{
                                    maxHeight: "calc(90vh - 32px)",
                                    aspectRatio: 6 / 10.5,
                                    borderRadius: 20,
                                    overflow:'hidden'
                                }}
                                onReady={() => handleVideoIsReady(true)}
                                playing
                                controls
                                url={data.video}
                            /> */}
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} sm={8}  >

                        <Box sx={{ display: 'flex', flexDirection: 'column' }} height="100%">
                            <CardContent sx={{height:'100%', display:'flex', flexDirection:'column' }}>
                                <Typography component={motion.div} gutterBottom layoutId={`cardTitle_${index}`} color="white" variant="h4">
                                {data.title.slice(0,15)}...
                                </Typography>
                                <Box>
                                    {data.tags.slice(0, 2).map((tag, indexer) => {
                                        return (
                                            <Chip
                                                component={motion.div}
                                                layoutId={`cardChip_${index}_${indexer}`}
                                                key={`initial_chip_${indexer}`}
                                                label={`#${tag}`}
                                                sx={{ color: "white", mb: 1, backgroundColor: "rgba(136,136,136,0.5)", mr: 1 }}
                                                onClick={() => { }}
                                            />
                                        )
                                    })}
                                    {data.tags.slice(2, 10).map((tag, indexer) => {
                                        return (
                                            <Chip
                                                component={motion.div}
                                                key={`dynamic_chip_${indexer}`}
                                                label={`#${tag}`}
                                                sx={{ color: "white", mb: 1, backgroundColor: "rgba(136,136,136,0.5)", mr: 1 }}
                                                onClick={() => { }}
                                                initial={{ opacity: 0, x: -100 }}
                                                whileInView={{ opacity: 100, x: 0 }}
                                                transition={{ duration: 0.4 }}
                                            />
                                        )
                                    })}
                                </Box>
                                <Typography variant="subtitle1" gutterBottom color="white" component="div">
                                    {data.description}
                                </Typography>

                                <Button onClick={() => { window.open("https://www.instagram.com/maminaudio/", "_blank") }} size="medium" variant="contained" color="primary" fullWidth sx={{ mt: "auto" }}>
                                    Check in instagram
                                </Button>
                            </CardContent>

                        </Box>
                    </Grid>
                </Grid>

                {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} >
                        <Box>xs=2</Box>
                    </Grid>
                    <Grid item xs={8} >
                        <Box>xs=2</Box>
                    </Grid>
                </Grid> */}
            </Card>
        </>
    )
}

export default OpenedWorkCard
