import { Box } from "@mui/material";
import { motion, useMotionValue, useTransform, animate, inView, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { visuallyHidden } from "@mui/utils"


// export default function AnimText({ delay, text }) {
//     // const [done, setDone] = useState(false);
//     const baseText = text;
//     var count = useMotionValue(0);
//     const rounded = useTransform(count, (latest) => Math.round(latest));
//     const displayText = useTransform(rounded, (latest) =>
//         baseText.slice(0, latest)
//     );
//     const updateThisRound = useMotionValue(true)



//     useEffect(() => {
//         console.log({ count })
//         console.log({ baseText })
//         animate(count, baseText.length, {
//             type: "tween",
//             delay: delay,
//             duration: 1,
//             ease: "easeInOut",
//             onComplete: () => {
//                 // setDone(true);
//             }
//         })
//     }, [text]);

//     useEffect(() => {
//         console.log('im here')
//         // updateThisRound.set(false)
//         count.set(0)
//     }, [text]);

//     return (
//         <motion.span
//             whileInView={() => {

//             }}
//         >
//             {displayText}
//         </motion.span>
//     );
// }



export default function AnimText({ delay, text }) {
    const [lastText, setLastText] = useState("")
    const controls = useAnimation()
    const defaultAnimations = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        }
    }
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 0.5 })
    useEffect(() => {
        console.log(isInView)
        if (isInView && lastText !== text) {
            controls.start('visible')
            setLastText(text)
        } 
    }, [isInView])
    useEffect(() => {
        controls.start('hidden')
        setTimeout(() => {
            controls.start('visible')
        }, 400);
    }, [text])
    return (
        <span>
            <Box sx={visuallyHidden}>{text}</Box>
            <motion.span
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                    visible: {transition: {staggerChildren: delay} },
                    hidden: {transition: 0.001}
                }}
                aria-hidden
            >
                {text.split('').map(t => {
                    return <motion.span variants={defaultAnimations}>{t}</motion.span>
                })}
            </motion.span>
        </span >
    )
}