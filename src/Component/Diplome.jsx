import React from 'react'
import { Box, Typography, Card, CardContent } from '@mui/material'
import { GraduationCap, School, Calendar } from 'lucide-react';
import ispm from '../image/ispm-sn.png'

const Diplome = () => {
  const educations = [
    {
      title: "Diplôme Licence – Informatique Statistique et Intelligence Artificielle",
      institution: "INSTITUT SUPERIEUR POLYTECHNIQUE DE MADAGASCAR (ISPM)",
      description: "Filière combinant informatique, statistique et intelligence artificielle. Elle m'a permis de développer des compétences en programmation, analyse de données et conception de solutions intelligentes.",
      period: "2022 - Actuellement",
      image: ispm,
      icon: GraduationCap,
    },
    {
      title: "Baccalauréat - série D",
      institution: "LYCEE PRIVE MIARINTSOA (LPM)",
      description: "Établissement d'enseignement secondaire privé dédié à la formation académique des élèves jusqu'au Baccalauréat, en mettant l'accent sur la rigueur, les disciplines scientifiques et le développement des compétences.",
      period: "2021",
      image: null,
      icon: School,
    },
    {
      title: "Formation en Python",
      institution: "Analamahitsy",
      description: "Formation axée sur l'apprentissage du langage Python, couvrant les bases de la programmation, la logique algorithmique et la réalisation de petits projets pratiques.",
      period: "2023",
      image: null,
      icon: GraduationCap,
    },
  ];

  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 6, mb: 10 }}>
        {/* Section Title */}
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <School size={32} color='#ff8a65' strokeWidth={2} />
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
            Diplôme et Études
          </Typography>
        </Box>

        {/* Horizontal grid of educations */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
            gap: 3,
          }}
        >
          {educations.map((education, index) => {
            const IconComponent = education.icon;
            return (
              <Card
                key={index}
                sx={{
                  p: 3,
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 138, 101, 0.2)',
                  bgcolor: 'rgba(26, 40, 71, 0.5)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 16px 40px rgba(255, 138, 101, 0.15)',
                    borderColor: 'rgba(255, 138, 101, 0.4)',
                  },
                }}
              >
                <CardContent sx={{ p: 0, display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {/* Icon and title */}
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2.5 }}>
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: '8px',
                        background: 'linear-gradient(135deg, rgba(255, 138, 101, 0.2) 0%, rgba(255, 179, 153, 0.1) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <IconComponent size={24} color='#ff8a65' strokeWidth={2} />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant='h6'
                        fontWeight={700}
                        sx={{
                          color: '#ffffff',
                          mb: 0.5,
                          fontSize: '0.95rem',
                          lineHeight: 1.4,
                        }}
                      >
                        {education.title}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Institution */}
                  <Typography
                    variant='body2'
                    fontWeight={600}
                    sx={{
                      color: '#ff8a65',
                      fontSize: '0.85rem',
                    }}
                  >
                    {education.institution}
                  </Typography>

                  {/* Period */}
                  <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                    <Calendar size={14} color='#ff8a65' strokeWidth={2} />
                    <Typography sx={{ color: '#ff8a65', fontWeight: 700, fontSize: '0.8rem' }}>
                      {education.period}
                    </Typography>
                  </Box>

                  {/* Description */}
                  <Typography
                    variant='body2'
                    fontWeight={500}
                    sx={{
                      color: '#b0b9c6',
                      lineHeight: 1.6,
                      fontSize: '0.85rem',
                    }}
                  >
                    {education.description}
                  </Typography>

                  {/* Image if available */}
                  {education.image && (
                    <Box
                      component="img"
                      src={education.image}
                      sx={{
                        width: "100%",
                        height: "auto",
                        maxHeight: 120,
                        objectFit: "contain",
                        borderRadius: '8px',
                        mt: 1,
                      }}
                    />
                  )}
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </Box>
    </div>
  )
}

export default Diplome
