import React from 'react'
import { Box, Typography, Avatar } from '@mui/material'
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
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 6, lg: 8 },
            alignItems: "center",
            mb: { xs: 8, md: 12 },
            minHeight: { xs: 'auto', md: '70vh' },
            py: { xs: 4, md: 0 },
          }}
        >
          {/* Section texte */}
          <Box sx={{ flex: 1 }}>
            <TextDroite />
          </Box>

          {/* Section image */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: { xs: 300, md: 400, lg: 460 },
                height: { xs: 300, md: 400, lg: 460 },
                borderRadius: "50%",
                background: 'linear-gradient(135deg, #ff8a65 0%, #ffb399 100%)',
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                boxShadow: '0 20px 60px rgba(255, 138, 101, 0.3)',
              }}
            >
              <Box
                component="img"
                src={OK}
                alt="Profile"
                sx={{
                  width: { xs: 290, md: 390, lg: 450 },
                  height: { xs: 290, md: 390, lg: 450 },
                  borderRadius: "50%",
                  objectFit: "cover",
                  position: "relative",
                }}
              />
            </Box>
          </Box>
        </Box>
      </section>
    </div>
  )
}

export default Home
