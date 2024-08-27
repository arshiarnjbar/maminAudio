import { Card, CardContent, Skeleton, Box, Typography, Stack } from "@mui/material"
import { motion } from "framer-motion"

function WorkCardSkeleton({ index }) {
    return (
        <>
            <Card
                component={motion.div}
                layoutId={`card_${index}`}
                sx={{ maxWidth: 345, m: "auto", backgroundColor: "secondary.main", borderRadius: 3 }}
            >
                <Box
                    sx={{ p: 2, pb: 0 }}
                >
                    <motion.div
                        layoutId={`img_${index}`}
                    >
                        <Skeleton sx={{ height: 240, borderRadius: 2 }} animation="wave" variant="rectangular" />
                    </motion.div>
                </Box>

                <CardContent>
                    <Typography component="div" variant="h5">
                        <Skeleton />
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        <Skeleton variant="rounded" width={70} height={25} />
                        <Skeleton variant="rounded" width={70} height={25} />
                    </Stack>
                    <Skeleton sx={{ mt: 3 }} variant="rounded" width={"100%"} height={35} />


                </CardContent>
            </Card>
        </>
    )
}

export default WorkCardSkeleton
