import { Box, Button, Container, Grid, Typography } from "@mui/material"
import { memo, useEffect, useState } from "react"
import { motion } from "framer-motion"

import AnimText from "./AnimText"

const StoryOfMamin = () => {

    const [storyData, setStoryData] = useState([
        {
            img: './static/About/studioMoon.png',
            year: 2005,
            title: "Studio Moon as a producer and Recorder",
            desc: "Working with sound can come with various challenges. We have to remember visuals are only half of the experience when some one watches your video. So we design the sounds with sensitivity to make it suitable for your video and help it to be more attractive and comprehensible.",
        },
        {
            img:'./static/About/2.jpg',
            year: 2012,
            title: "FlatMode as a producer and Sound designer",
            desc: "aIt's all about How do you want the audience to feel? We can control your audience feelings when she/he is whatching your video. The important thing is the music should be in tune with your video so we pick a appropriate genre and make a suitable main theme melody for it.",
        },
        {
            img:'./static/About/3.webp',
            year: 2017,
            title: "ounja as a producer and Sound designer",
            desc: "Working with sound can come with various challenges. We have to remember visuals are only half of the experience when some one watches your video. So we design the sounds with sensitivity to make it suitable for your video and help it to be more attractive and comprehensible.",
        },
        {
            img:'./static/About/4.jpg',
            year: 2022,
            title: "inja as a producer and Sound designer",
            desc: "It's important to all of the tracks sounds good together. In mixing process we mix music, sound effects and the voice over together and add a suitable sauce on it to it can be hear the best in all speakers and headphones. ",
        }
    ])
    useEffect(() => {
        console.log('aa')

        return () => {
            console.log('a2a')

        }
    }, [storyData])

    const [activeStory, setActiveStory] = useState(2005)

    const changeYearOfStory = (year) => setActiveStory(year)

    return (
        <Box
            sx={{
                background: "linear-gradient(180deg,#190D1C,#7A5383)",
            }}
        >
            <Container sx={{ py: { xs: 8, sm: 16 } }}>
                <Grid container spacing={2}>
                    <Grid item xs="3" >
                    </Grid>
                    <Grid item xs="9">
                        <Typography variant="h4" sx={{ mb: 4 }} color="white">The story of <Box sx={{ color: "primary.main", display: "inline" }}><AnimText text={"MaminAudio"} delay={0.1} /></Box></Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs="12" md="3">
                        <MaminStoryYearBottons storyData={storyData} changeYearOfStory={changeYearOfStory} activeStory={activeStory} />
                    </Grid>
                    <Grid item xs="12" md="9">
                        {storyData.filter(story => story.year == activeStory).map(story => {
                            return <Box>

                                <motion.img initial={{ x: 10 }} whileInView={{ x: 0 }} width="100%" style={{borderRadius: '25px'}} src={story.img} alt="" />

                                <Typography variant="h5" sx={{ mb: 1, mt: 4 }} color="white"><AnimText text={story.title} delay={0.1} /></Typography>
                                <Typography variant="body1" color="white">{story.desc}</Typography>

                            </Box>
                        })}

                    </Grid>
                </Grid>
            </Container>

        </Box>

    )
}
const MaminStoryYearBottons = (props) => {
    const { storyData, changeYearOfStory, activeStory } = props

    return (
        <Grid
            container
            gap={1}
            sx={{
                flexDirection: { xs: "row", sm: "column" },
                flexWrap: { xs: "nowrap", sm: "wrap" }
            }}


        >
            {storyData.map(story => {
                return (
                        <Button
                            size="large"
                            onClick={() => changeYearOfStory(story.year)}
                            // sx={{ transition: "0.5s", }}
                            variant="contained"
                            component={motion.div}
                            initial={{ width: "100%" }}
                            whileInView={{ width: story.year == activeStory ? "100%" : "70%" }}
                            color={story.year == activeStory ? "primary" : "inherit"}
                        >
                            <Typography variant="h5">{story.year}</Typography>
                        </Button>

                )
            })}
        </Grid>
    )
}



export default StoryOfMamin