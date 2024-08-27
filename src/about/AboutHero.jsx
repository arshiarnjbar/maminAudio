import { Box, Container, Typography } from "@mui/material"
import { heroDefaultCss } from "../landingPage/components/data/heroDefaultCss"
import SocialMediaIcons from "../landingPage/components/SocialMediaIcons"
import {motion} from 'framer-motion'

const AboutHero = () => {
    return <Box
        sx={{
            ...heroDefaultCss,
            pt: { xs: 10, sm: 9 },
            background: "linear-gradient(180deg, black, #190D1C)"
        }}
    >
        <Container sx={{
            ...heroDefaultCss,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            gap:2
        }}>

            <motion.div
                initial={{ y: -110 }}
                whileInView={{ y: 0 }}
            >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <SocialMediaIcons color="secondary" />
                </Box>
            </motion.div>
            <Box
                sx={{
                    display: "flex",
                    flexGrow: 1,
                    alignItems: "center",
                    flexDirection: { xs: "column", sm: "row" },
                    gap:2
                }}
            >
                <Box
                    sx={{ flex: 1 }}
                >
                    <Box sx={{ maxWidth: "500px" }}>
                        <Typography sx={{ mb: 2, lineHeight: "52px" }} variant="h3" color="white">
                            Helping businesses succeed though the power of music.
                        </Typography>
                        <Typography background variant="body1" color="white" sx={{ backgroundColor: "rgba(217,217,217,0.15)", px: 2, py: 1 }}>
                            in Maminaudio we make music for animations, motion graphics, short films and commercial videos in all genres (Orghestral, electronics, jazz & ...) and design sound effects suitable for your taste.
                        </Typography>
                    </Box>

                </Box>
                <Box
                    sx={{ flex: 1 }}
                >
                    <center>
                        <img src="./static/About/mamin.png" style={{ "max-width": "100%" }} alt="" />

                    </center>
                </Box>
            </Box>

        </Container>

    </Box>
}
export default AboutHero