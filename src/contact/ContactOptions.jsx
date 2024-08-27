import { Grid } from "@mui/material"
import ContactOptionCard from "./ContactOptionCard"
import { useState } from "react"

const ContactOptions = () => {
    const [contactOptions] = useState([
        {
            title: "Give us a call.",
            desc: "1-800-664-9073",
            descTag: 'h5',
            buttons: [
                {
                    title: "Call me",
                    icon: "SmartphoneIcon",
                    link: "tel:+989120353325"
                }
            ]
        },
        {
            title: "Chat with us.",
            desc: "Get product info, and live chat with an agent.",
            descTag: 'p',
            buttons: [
                {
                    title: "WhatsApp",
                    icon: "whatsapp",
                    link: "https://api.whatsapp.com/send?phone=989120353325&text=Hello im coming from website"
                },
                {
                    title: "Telegram",
                    icon: "telegram",
                    link: "https://t.me/mamadaminbeats"
                }
            ]
        }
    ]);
    return (
        <Grid container flexDirection="column" gap={2}>
            {contactOptions.map(datas => {
                return <ContactOptionCard  datas={datas} />
            })}
        </Grid>


    )
}
export default ContactOptions