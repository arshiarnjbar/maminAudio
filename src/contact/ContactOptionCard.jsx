import { Typography, Button, Grid, Stack } from "@mui/material"
import SmartphoneIcon from '@mui/icons-material/Smartphone';

import { Suspense, lazy } from "react";

const getIton = (icon) => {
    switch (icon) {
        case "whatsapp":
            return lazy(() => import('@mui/icons-material/WhatsApp'));
        case "telegram":
            return lazy(() => import('@mui/icons-material/Telegram'));
        default:
            return SmartphoneIcon
    }
}
const ContactOptionCard = (props) => {
    console.log(props)
    const { title, desc, buttons ,desctag} = props.datas
    return (
        <Grid
            container
            alignItems={"start"}
            flexDirection={"column"}
            gap={1}
            sx={{
                background: "rgb(255 255 255 / 75%)",
                borderRadius: 4,
                py: 4,
                px: {xs: 3 ,sm :8},
                display: 'flex'
            }}
        >
            <Typography variant="h5" color="initial">{title}</Typography>
            <Typography variant={desctag} color="grey">{desc}</Typography>
            <Stack direction="row" spacing={1}>
            {buttons.map(button => {
                const SelectedIcon = getIton(button.icon)
                return <Button onClick={()=>window.open(`${button.link}`)} variant="contained" color="primary">
                    <Suspense fallback={<>loading</>}>
                        <SelectedIcon sx={{mr:"8px"}} color="inherit" />
                    </Suspense>
                    {button.title}
                </Button>
            })}
            </Stack>



        </Grid>
    )
}

export default ContactOptionCard