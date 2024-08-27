import { Box, Container, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import ClientCard from "../landingPage/components/Card/ClientCard"
import { useState } from "react"
const AboutClients = () => {
    const [clients, setClients] = useState([
        {
            title: "Rstopmotion",
            thumbnail: "/static/About/RSteam.gif",
            tags: ["Stopmotion", "2dAnimation"],
            instagram: "https://www.instagram.com/rstopmotion/",
            link: "https://rstopmotion.ir"
        },
        {
            title: "Saad Studio",
            thumbnail: "/static/About/saadStudios.gif",
            tags: ["Stopmotion", "2dAnimation"],
            instagram: "https://www.instagram.com/saad.studio/",
            link: "https://saadstudio.ir"
        },
        {
            title: "OKO Team",
            thumbnail: "/static/About/OkaTeam.gif",
            tags: ["MotionGraphic"],
            instagram: "https://www.instagram.com/okoteam.co",
            link: "https://okoteam.com"
        },
        {
            title: "Beedester",
            thumbnail: "/static/About/beedesters.gif",
            tags: ["Animation", "2dAnimation"],
            instagram: "https://google.com",
            link: "https://google.com"
        },
    ])

    return (
        <Box sx={{ backgroundColor: "primary.main" }}>
            <Container sx={{ py: { xs: 8, sm: 16 } }}>
                <Typography variant="h4" color="white" sx={{ mb: 8 }} textAlign="center">
                    Teams I worked with
                </Typography>
                <Grid container spacing={2} >
                    {clients.map((client, index) => (
                        <Grid xs={12} sm={6} md={4} lg={3} key={`client_card_${index}`}>
                            <ClientCard link={client.link} instagram={client.instagram} thumbnail={client.thumbnail} title={client.title} tags={client.tags} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>

    )
}

export default AboutClients