import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

const MCard = ({ iconName, title }) => {
    return (
        <Card
            sx={{
                maxWidth: '100%',
                width:223,
                borderRadius: 5,
                textAlign: "center",
                backgroundColor: "rgba(255,255,255,0.6)",
                color: "primary.main",
                height: "100%",
                display:"flex",
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <CardContent>

                <span style={{ fontSize: "66px" }} className="material-symbols-outlined">
                    {iconName}
                </span>
                <Typography variant='h5' fontWeight={500} sx={{ mb: 0 }} gutterBottom>
                    {title}
                </Typography>
            </CardContent>
        </Card>
    )
}
export default MCard