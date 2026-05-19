import React from 'react'
import { Typography, Box, Button, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import CV from '../image/Curriculum Vitae.pdf'

const TextDroite = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {/* Name section */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography
            sx={{
              color: '#b0b9c6',
              fontSize: { xs: "0.95rem", md: "1rem" },
              fontWeight: 600,
              letterSpacing: 1,
              textTransform: 'uppercase',
            }}
          >
            RAKOTOARISOA Andrinomena
          </Typography>
          <Typography
            sx={{
              background: 'linear-gradient(135deg, #ff8a65 0%, #ffb399 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: "0.85rem", md: "0.9rem" },
              fontWeight: 700,
              letterSpacing: 0.5,
              textTransform: 'uppercase',
            }}
          >
            ITOKIANA
          </Typography>
        </Box>

        {/* Main title */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4.5rem" },
              lineHeight: 1.2,
              color: '#ffffff',
              textShadow: '0 10px 30px rgba(255, 138, 101, 0.1)',
            }}
          >
            <Box component="span">
              Full-Stack Developer
            </Box>
            <br />
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #ff8a65 0%, #ffb399 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              DATA / IA
            </Box>
          </Typography>
        </Box>

        {/* Description */}
        <Typography
          sx={{
            color: '#b0b9c6',
            fontSize: { xs: "1rem", md: "1.1rem" },
            lineHeight: 1.8,
            maxWidth: "500px",
            fontWeight: 500,
          }}
        >
          Je suis un développeur full-stack, prêt à vous aider dans votre projet
        </Typography>

        {/* CTA Buttons */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, pt: 2 }}>
          <Button
            component="a"
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              px: { xs: 4, md: 6 },
              py: 1.75,
              background: 'linear-gradient(135deg, #ff8a65 0%, #ffb399 100%)',
              color: "#fff",
              fontWeight: 700,
              borderRadius: '8px',
              textTransform: "none",
              fontSize: '1rem',
              boxShadow: '0 10px 30px rgba(255, 138, 101, 0.3)',
              transition: "all 0.3s ease",
              border: 'none',
              cursor: 'pointer',
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: '0 15px 50px rgba(255, 138, 101, 0.4)',
              },
            }}
          >
            Voir CV
          </Button>

          <Button
            onClick={() => {
              const element = document.querySelector("#project");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            sx={{
              px: { xs: 4, md: 6 },
              py: 1.75,
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              color: "#ff8a65",
              fontWeight: 700,
              borderRadius: '8px',
              textTransform: "none",
              fontSize: '1rem',
              border: '2px solid rgba(255, 138, 101, 0.3)',
              transition: "all 0.3s ease",
              cursor: 'pointer',
              "&:hover": {
                bgcolor: 'rgba(255, 138, 101, 0.1)',
                borderColor: 'rgba(255, 138, 101, 0.6)',
                transform: "translateY(-4px)",
              },
            }}
          >
            Voir Projets
          </Button>
        </Box>
      </Box>
    </div>
  )
}

export default TextDroite
