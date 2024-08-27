import React, { forwardRef, useImperativeHandle } from 'react'
import { Snackbar } from '@mui/material';
import { useState } from 'react';


const MaminSnack = forwardRef((props, ref) => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');




    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    useImperativeHandle(ref, () => ({

        getAlert(imported) {
            // console.log({imported})
            setTitle(imported)
            // alert()
            setOpen(true);
        }

    }));
    return (
        <>
            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                message={title}
            />
        </>
    )
})

export default MaminSnack
