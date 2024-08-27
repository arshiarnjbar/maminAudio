import { Box, Container, Typography, Grid } from "@mui/material"
import { heroDefaultCss } from "../landingPage/components/data/heroDefaultCss"
import SocialMediaIcons from "../landingPage/components/SocialMediaIcons"
import ContactForm from "./ContactForm"
import ContactOptions from "./ContactOptions"
import { motion } from "framer-motion"
const ContactHero = () => {
    return <Box
        sx={{
            ...heroDefaultCss,
            pt: { xs: 10, sm: 9 },
            pb: { xs: 4, sm: 6 },
            background: "linear-gradient(180deg, #190D1C 25%,  #7A5383 85%)"
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

            <Grid container flexGrow={1} alignItems={"center"} spacing={3}>
                <Grid item xs={12} md={7}>
                    {/* <Typography variant="body1" color="initial">Salam aleyk</Typography>e */}

                    <ContactForm />
                </Grid>
                <Grid item xs={12} md={5}>
                    {/* <Typography variant="body1" color="initial">durud</Typography> */}

                    <ContactOptions />
                </Grid>
            </Grid>

        </Container>

    </Box >
}
export default ContactHero