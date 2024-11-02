import {Stack, Paper, Typography} from '@mui/material';


function Accordionbox() {
    return  <Paper elevation={2} sx={{width:'70%', padding:'15px', backgroundColor:'#0a1bb8'}}>
          <Stack spacing={2}>
            <Stack>
                <Typography variant='h6'>Frequently Asked Questions</Typography>
            </Stack>
            <Stack className='faqbox'>
                <Typography variant='h6'>Is this a good product?</Typography>
            </Stack>
            <Stack className='faqbox'>
                <Typography variant='h6'>How much does it cost?</Typography>
            </Stack>
            <Stack className='faqbox'>
                <Typography variant='h6'>When can I get it?</Typography>
            </Stack>
          </Stack>
    </Paper>
}

export default Accordionbox;