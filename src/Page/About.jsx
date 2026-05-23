import React from 'react'
import { Box,} from '@mui/material'
import Profil from '../Component/Profil'
import Diplome from '../Component/Diplome'
import Competence from '../Component/Competence'



const About = () => {
  return (
    <div> 
      <section id='about'>
        <Box sx={{mb:10}}>
        <Profil></Profil>
        <Diplome></Diplome>
        <Competence></Competence>

      {/*competence*/}
     

    </Box>
     
     
      
      </section>
    
      
    </div>
  )
}

export default About