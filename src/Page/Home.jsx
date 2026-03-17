import React from 'react'
import { Box , Typography ,Avatar} from '@mui/material'
import TextDroite from '../Component/TextDroite'
import OK from "../image/OK.png"
import { orange } from '@mui/material/colors'


const Home = () => {
  return (
    <div>
      <section id='home'>
             <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // colonne mobile, ligne desktop
          gap: 3, // espace entre texte et image
          alignItems: "center",
          mb:10
        }}
      >
        {/* Section texte */}
        <Box sx={{ flex: 1 }}>
          <TextDroite />
        </Box>

        {/* Section image */}
       
             <Box
    sx={{
      width: { xs: 300, md: 400, lg: 460 },
      height: { xs: 300, md: 400, lg: 460 },
      borderRadius: "50%",
      bgcolor: orange[400], // 👈 couleur du cercle
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative", 
    }}
  >
        <Box
            component="img"
            src={OK}
            alt="Profile"
            sx={{
              width: { xs: 300, md: 384, lg: 450 }, 
              height: { xs: 300, md: 384, lg: 450 },
               // arrondi
              objectFit: "cover",
              pt:2,
              position :"relative"
   
            
            }}
          />
        </Box>
  </Box>

          
          
      
   
      </section>
     
 
    </div>
  )
}

export default Home