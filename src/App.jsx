import './App.css'
import { Header} from './Page/Header'
import Home from './Page/Home'
import Project from './Page/Project'
import About from './Page/About'
import { Box } from '@mui/material'
import { Contact } from './Page/Contact'


function App() {
  return (
   <div>
<Box
  sx={{
    width: "100%",
    minHeight: "100vh",
    overflowX: { xs: "hidden", sm: "visible" },
  }}
>
  <Box
    component="main"
    sx={{
      mx: "auto",
      display: "flex",
      width: "100%",
      maxWidth: "60rem",
      flexDirection: "column",
      gap: { xs: 3, sm: 5 },
      px: { xs: 2, sm: 3 },
      pb: { xs: 3, sm: 10 },
      boxSizing: "border-box",
    }}
  >
    <Header />
    <Home />
    <About />
    <Project />
    <Contact />
  </Box>
</Box>
    
      
     
    
   </div>
  )
}

export default App