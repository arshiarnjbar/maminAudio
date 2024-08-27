import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip'
import { Box, Button, CardActionArea, Grid } from '@mui/material';
import { motion } from "framer-motion"
const WorkCard = ({ data, index, setSelectedWork }) => {
    return (
        <>
            <Card
                component={motion.div}
                layoutId={`card_${index}`}
                sx={{ maxWidth: 345, m: "auto", backgroundColor: "secondary.main", borderRadius: 3 }} >
                <CardActionArea>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
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
                                        layoutId={`img_${index}`}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={data.img}
                                            height={240}
                                            alt="green iguana"
                                        />
                                    </motion.div>
                                </Box>

                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <CardContent sx={{ p: 2, pt: 1 }}>
                                <Typography gutterBottom layoutId={`cardTitle_${index}`} variant="h5" color="white" component={motion.div}>
                                    {data.title.slice(0,15)}...
                                </Typography>

                                {data.tags.slice(0,2).map((tag,indexer)=>{
                                    return (
                                        <Chip  component={motion.div}  layoutId={`cardChip_${index}_${indexer}`}  key={`initial_list_chip_${index}_${indexer}`} label={decodeURI(tag)} sx={{ color: "white", backgroundColor: "rgba(136,136,136,0.5)", mr: 1 ,mb:1}} onClick={() => { }} />
                                    )
                                })}
                                {/* <Chip label="Animation" sx={{ color: "white", backgroundColor: "rgba(136,136,136,0.5)" }} onClick={() => { }} /> */}

                                <Button onClick={() => { setSelectedWork(index) }} size="medium" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                                    See more
                                </Button>
                            </CardContent>
                        </Grid>
                    </Grid>




                </CardActionArea>
            </Card>

        </>
    )

}

export default WorkCard