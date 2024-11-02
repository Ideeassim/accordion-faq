import { Stack, Typography } from "@mui/material";



function Faqbox(props) {
   return <Stack className='faqbox' direction='row' sx={{justifyContent: 'space-between'}}>
    <Stack>
        <Typography variant='subtitle2'>{props.Q}</Typography>
        <Typography variant='caption'>{props.Ans}</Typography>
    </Stack>

    <div>{"\u208A"}</div>
</Stack>
};

export default Faqbox;

