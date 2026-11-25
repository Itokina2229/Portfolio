import React from 'react'
import { Box, Typography, Avatar , Divider} from '@mui/material'
import TextDroite from '../Component/TextDroite'
import OK from "../image/OK.png"
import { BadgeCheck } from 'lucide-react'
import { orange } from '@mui/material/colors'
import { socials } from '../data/Social'

const Home = () => {
  return (
    <div>
      <section id='home'>
        <Box
          sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            pt:{xs:16,sm:8},
            pb:{xs:10,sm:6}
            
          }}
        >
    
          <Box
            sx={{
              flex: 1,
              display: "flex",
              gap:5,
            }}
          >
 
            <Box
              sx={{
                width: { xs: 150, md: 200, lg: 200 },
                height: { xs: 150, md: 200, lg: 200 },
                borderRadius: "50%",
                background: 'linear-gradient(135deg, #ff8a65 0%, #ffb399 100%)',
               boxShadow: '0 0 0 4px rgba(255, 138, 101, 0.25)',
                border: '5px solid #0f172a',
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
                  width: { xs: 150, md: 200, lg: 200 },
                  height: { xs: 150, md: 200, lg: 200 },
                  borderRadius: "50%",
                  objectFit: "cover",
                  position: "relative",
                }}
              />
              
            </Box>
             {/* Name section */}
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent:"center",gap: 1 }}>
                     <Typography component="h1" sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: { xs: '1.5rem', sm: '1.5rem', md: '1.875rem' }, fontWeight: 400, letterSpacing: '-0.025em' }}>
                      Andry Itokiana
                    <Box component="span" sx={{ display: 'flex', flexShrink: 0, color: 'background.default' }}>
                    <BadgeCheck color="currentColor" fill="#3b82f6" size={24} />
                    </Box>
                    </Typography>
                    <Box sx={{display:"flex" , alignItems:"flex-start",gap:2.5}}>
                      {socials.map(({ name, icon, darkIcon, href }) => (
                   <Box
  component="a"
  key={name}
  href={href}
  target="_blank"
  rel="noopener noreferrer"
  sx={{ display: 'inline-flex', border: 0, transition: 'opacity 0.2s ease', '&:hover': { opacity: 0.8 } }}
>
  <Box
    component="img"
    src={darkIcon}
    alt={name}
    sx={{ width: { xs: 15, sm: 20 }, height: { xs: 15, sm: 20 }, borderRadius: 2, p: 0.5, objectFit: 'contain' }}
  />
</Box>
              ))}


                    </Box>
                    </Box>
                    
          </Box>
          
          {/* Section texte */}
          <Box sx={{ flex: 1  , pt:4}}>
            <TextDroite />
          </Box>

          {/* Section image */}
          
        </Box>
      </section>
    </div>
  )
}

export default Home
