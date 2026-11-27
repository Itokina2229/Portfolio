import React from 'react'
import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { User } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Profil = () => {
  return (
     <ScrollReveal direction="up">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 8 }}>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Typography
              variant='h4'
              sx={{
                background: 'linear-gradient(135deg, #ff8a65 0%, #ffb399 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              About us
            </Typography>
         
        </Box>

        <Box
          sx={{
            p: 1,
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
            Computer Science, Statistics, and Artificial Intelligence graduate from ISPM, passionate about web development and data analysis. Experienced in building applications and performing advanced dataset manipulation for statistical exploration, feature engineering, and machine learning data preparation.
          </Typography>
        </Box>
      </Box>
        </ScrollReveal>
  )
}

export default Profil
