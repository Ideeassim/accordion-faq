import {Stack, Paper, Typography} from '@mui/material';
import faqtext from './faqtext';
import Faqbox from './faqbox';

function Accordionbox() {
    return  <Paper elevation={2} sx={{width:'50%', height: 'auto', padding:'15px', backgroundColor:'#0a1bb8'}}>
          <Stack spacing={2} paddingBottom={2}>
                <Stack sx={{alignItems:'center', color:'white'}}>
                    <Typography variant='h6'>Frequently Asked Questions</Typography>
                </Stack>
                <Faqbox Q={faqtext.Q1} Ans={faqtext.Ans1}/>
                <Faqbox Q={faqtext.Q2} Ans={faqtext.Ans2}/>
                <Faqbox Q={faqtext.Q3} Ans={faqtext.Ans3}/>           
          </Stack>
    </Paper>
}

export default Accordionbox;