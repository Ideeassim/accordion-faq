import { Stack, Typography, ThemeProvider, createTheme } from "@mui/material";
import {React, useState} from "react";
import '@fontsource/roboto/700.css'; 


function Faqbox(props) {
const [togglebtn, setTogglebtn]= useState(false);
function toggleHandler(params) {
    
    return setTogglebtn(prevValue =>{
        return !prevValue;
    })
}
// const theme= createTheme({
//     typography:{
//       fontFamily:'Roboto'
//     }
//   })

   return <Stack sx={{backgroundColor: 'white'}} padding={2}>
   
        <Stack >
            <Stack direction='row' sx={{justifyContent: 'space-between', backgroundColor: togglebtn? 'rgba(128, 128, 128, 0.066)':'white'}}>
                <Typography variant='subtitle1' fontWeight={700} paddingLeft={1}>{props.Q}</Typography> <div className='toggle' onClick={toggleHandler} id={props.id}>{togglebtn? "\uFF0D" : "\uFF0B"}</div>
                
            </Stack>
            <Stack sx={{display: togglebtn? 'block': 'none'}}>
            <Typography variant='body2'>{props.Ans}</Typography>
            </Stack>
        </Stack>

       
    </Stack>
    
};

export default Faqbox;

