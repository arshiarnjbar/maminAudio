import { AccountCircle, Category, ChatBubbleOutline, Email, Subject } from "@mui/icons-material"
import { Box, Button, Grid, InputAdornment, MenuItem, TextField } from "@mui/material"
import TitleIcon from '@mui/icons-material/Title';
import Axios from "axios";
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useRef } from "react";
import MaminSnack from "../landingPage/components/universal/MaminSnack";



const ContactForm = () => {
    // console.log(watch("example"))
    const [loading, setLoading] = useState(false)
    const childRef = useRef();


    const schema = yup.object(
        {
            name: yup.string().required(),
            email: yup.string().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g).required(),
            topic: yup.string().required(),
            subject: yup.string().required(),
            description: yup.string().required(),
        }
    ).required()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({resolver: yupResolver(schema)})

    const onSubmit = (data) =>{
        // console.log(data)
        setLoading(true)
        handleSubmiter(data)
    }


    // const [formDatas, setFormDatas] = useState({ name: "", email: '' })
    const handleSubmiter = (data) => {
        Axios
            .post("https://maminaudio.com/api/wp-json/my/v1/formHandler/1", {
                data,
            },
                { headers: { 'Accept': 'application/json' } })
            .then(res => {
                reset()
                childRef.current.getAlert(JSON.parse(res.data).message)
                setLoading(false)
            })
            .catch(error => {
                childRef.current.getAlert('error')
                setLoading(false)
            })
    }
    return (
        <Box sx={{ background: "rgb(255 255 255 / 75%)", py: 4, px: 3, borderRadius: 5 }}>
          <MaminSnack  ref={childRef} />
            <form onSubmit={handleSubmit(onSubmit)}>

            {/* {formDatas} */}
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Name"
                        placeholder="Full Name"
                        id="outlined-start-adornment"
                        fullWidth
                        error={errors.name}
                        {...register("name")}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><AccountCircle color={"primary"} /></InputAdornment>,
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Email"
                        placeholder="info@mamina..."
                        id="outlined-start-adornment"
                        fullWidth
                        error={errors.email}
                        {...register("email")}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><Email color={"primary"} /></InputAdornment>,
                        }}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField

                        label="Topic"
                        placeholder="Select topic"
                        error={errors.topic}
                        {...register("topic")}
                        fullWidth
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><Category color={"primary"} /></InputAdornment>,
                        }}
                        select>
                        <MenuItem value="Producing">Producing</MenuItem>
                        <MenuItem value="Mix mastering">mix mastering</MenuItem>
                        <MenuItem value="Both">both</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="select"
                        label="Subject"
                        placeholder="Write about your project subject"
                        error={errors.subject}
                        {...register("subject")}
                        fullWidth
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><TitleIcon color={"primary"} /></InputAdornment>,
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Description"
                        placeholder="Write about your project"
                        error={errors.description}
                        {...register("description")}
                        fullWidth
                        multiline
                        minRows={3}
                        maxRows={8}
                        InputProps={{
                            startAdornment: <InputAdornment sx={{ alignSelf: "baseline", pt: 1 }} position="start"><Subject color={"primary"} /></InputAdornment>,
                        }}
                    >
                    </TextField>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: "center" }}>
                    <Button disabled={loading} type="submit" sx={{ px: 10 }} variant="contained" disableElevation>
                        <ChatBubbleOutline sx={{ mr: 0.5 }} />Send
                    </Button>
                </Grid>
            </Grid>
            </form>
        </Box>
    )
}

export default ContactForm