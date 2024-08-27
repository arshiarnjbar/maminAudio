import Box from "@mui/material/Box"
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import SvgIcon from '@mui/material/SvgIcon';

const SocialMediaIcons = (props) => {
    const { mode, color } = props
    // const [iconColor, setIconColor] = useState('')
    const SocialMediaLinks = [
        { name: "youtube", url: 'https://www.youtube.com/@mamadaminbeats' },
        { name: "instagram", url: 'https://www.instagram.com/maminaudio/' },
        { name: "twitter", url: 'https://x.com/Mamadamineasli' },
        { name: "telegram", url: 'https://t.me/mamadaminbeats' },
        { name: "spotify", url: 'https://www.instagram.com/maminaudio/' }
    ]
    const handleClick = (name) => {
        SocialMediaLinks.map(link=>{
            if(link.name == name){
                window.open(link.url, "_blank")
            }

        })
    }
    return (
        <Box sx={{
            display: "flex",
            flexDirection: mode == "vertical" ? 'column' : 'row',
            gap: 2,
            backgroundColor: "rgba(217,217,217,0.15)",
            backdropFilter: 'blur(10px)',
            py: mode == "vertical" ? 2 : 1,
            px: mode == "vertical" ? 1 : 4,
            borderRadius: 100
        }}>
            <YouTubeIcon onClick={() => handleClick('youtube')} color={color} fontSize="large" />
            <InstagramIcon onClick={() => handleClick('instagram')} color={color} fontSize="large" />
            <TwitterIcon onClick={() => handleClick('twitter')} color={color} fontSize="large" />
            <TelegramIcon onClick={() => handleClick('telegram')} color={color} fontSize="large" />
            <SvgIcon onClick={() => handleClick('spotify')} color={color} fontSize="large">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5s.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2" /></svg>
            </SvgIcon>
        </Box>
    )
}
export default SocialMediaIcons