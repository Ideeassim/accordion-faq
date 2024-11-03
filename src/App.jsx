import { useState } from 'react'
import {Stack, Paper, Typography, createTheme,ThemeProvider} from '@mui/material';
import Accordionbox from './components/accordionbox';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'

function App() {
  const theme= createTheme({
    typography:{
      fontFamily:'Roboto'
    }
  })

  return (
    <>
    <ThemeProvider theme={theme}>
      <Stack sx={{justifyContent:'center', alignItems:'center', paddingTop:'40px'}}>
        <Stack><Typography variant='h5' fontWeight={700} gutterBottom>Project 2: Accordion/FAQ</Typography></Stack>
        <Accordionbox />
      </Stack>
    </ThemeProvider>
    </>
  )
}

export default App
