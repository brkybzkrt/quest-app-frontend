import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <div style={{backgroundColor:"white"}}>
      <Navbar/>
      <Container >
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
        <Component {...pageProps} />
        </Box>
        
      </Container>
      
      </div>
  ) 
  
}
