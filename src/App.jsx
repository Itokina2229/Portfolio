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
     <Header/>
      <Box sx={{ pb:6,pt:6, px: { xs: 4, md: 8 }, maxWidth: "1400px", mx: "auto" }}>
           <Home></Home>
          <About></About>
          <Project></Project>
          <Contact></Contact>
      </Box>
     
    
   </div>
  )
}

export default App