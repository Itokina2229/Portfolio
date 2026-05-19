import React from 'react'
import { Box, Typography } from '@mui/material'
import { User } from 'lucide-react';

const Profil = () => {
  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4, mb: 8 }}>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <User size={32} color='#ff8a65' strokeWidth={2} />
            <Typography
              variant='h4'
              fontWeight={800}
              sx={{
                background: 'linear-gradient(135deg, #ff8a65 0%, #ffb399 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Profil
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            p: 4,
            borderRadius: '12px',
            border: '1px solid rgba(255, 138, 101, 0.2)',
            bgcolor: 'rgba(26, 40, 71, 0.5)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Typography
            variant='body1'
            fontWeight={500}
            sx={{
              color: '#b0b9c6',
              lineHeight: 1.8,
              fontSize: { xs: '0.95rem', md: '1rem' },
            }}
          >
            Étudiant en Informatique, Statistique et Intelligence Artificielle à l&apos;ISPM, passionné par le développement web et l&apos;analyse de données. Expérimenté dans la création d&apos;applications et la manipulation avancée de datasets pour l&apos;exploration statistique, le feature engineering et la préparation pour Machine Learning.
          </Typography>
        </Box>
      </Box>
    </div>
  )
}

export default Profil
