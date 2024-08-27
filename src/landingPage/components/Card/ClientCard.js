import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip'
import { Box, Button, CardActionArea, Grid, Skeleton } from '@mui/material';
import { motion } from "framer-motion"
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';


const ClientCard = (props) => {
    const { thumbnail, title, tags, instagram, link } = props
    return (
        <Card sx={{ maxWidth: 345, backgroundColor: "secondary.main", borderRadius: 3 ,mx:"auto"}} >
            <CardActionArea>
                <Box
                    sx={{ p: 2, pb: 0 }}

                >
                    <Box
                        sx={{
                            overflow: 'hidden',
                            borderRadius: 2
                        }}
                    >
                        <motion.div
                            initial={{ x: -100 }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* <Skeleton variant="text" width="100%" height="200px" animation="pulse" /> */}
                            <CardMedia
                                component="img"
                                image={thumbnail}
                                alt="green iguana"
                            />
                        </motion.div>
                    </Box>

                </Box>


                <CardContent sx={{ p: 2, pt: 1 }}>
                    <Typography gutterBottom variant="h5" color="white" component="div">
                        {title}
                    </Typography>
                    <Grid container sx={{ justifyContent: "space-between", alignItems: "center" }}>
                        <Grid>
                            {tags.map(tag => {
                                return <Chip label={tag} size='small' sx={{ fontSize: 12, color: "white", backgroundColor: "rgba(136,136,136,0.5)", mr: 0.5 }} onClick={() => { }} />
                            })}
                        </Grid>
                        <Grid sx={{}}>
                            <InstagramIcon color="secondary" fontSize='large' onClick={()=>window.open(instagram, "_blank")} />
                            <LanguageIcon color="secondary" fontSize='large' onClick={()=>window.open(link, "_blank")}  />
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    )

}

export default ClientCard