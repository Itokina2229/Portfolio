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

        {/* Timeline of educations */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4, position: "relative" }}>
          {/* Vertical line */}
          <Box
            sx={{
              position: "absolute",
              left: { xs: 20, md: 40 },
              top: 0,
              bottom: 0,
              width: 2,
              background: 'linear-gradient(180deg, rgba(255, 138, 101, 0.5) 0%, rgba(255, 138, 101, 0.1) 100%)',
              display: { xs: "block", md: "none" },
            }}
          />

          {educations.map((education, index) => {
            const IconComponent = education.icon;
            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  gap: 4,
                  alignItems: "flex-start",
                  pl: { xs: 12, md: 0 },
                  position: "relative",
                }}
              >
                {/* Timeline dot - Mobile */}
                <Box
                  sx={{
                    position: "absolute",
                    left: 8,
                    top: 6,
                    display: { xs: "flex", md: "none" },
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    bgcolor: 'rgba(26, 40, 71, 1)',
                    border: '3px solid #ff8a65',
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />

                {/* Left content - Desktop */}
                <Box
                  sx={{
                    flex: 1,
                    display: { xs: "none", md: "flex" },
                    justifyContent: "flex-end",
                    pr: 4,
                    pt: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      p: 2.5,
                      bgcolor: 'rgba(255, 138, 101, 0.08)',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 138, 101, 0.15)',
                    }}
                  >
                    <Calendar size={20} color='#ff8a65' strokeWidth={2} />
                    <Typography
                      sx={{
                        color: '#ff8a65',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                      }}
                    >
                      {education.period}
                    </Typography>
                  </Box>
                </Box>

                {/* Center dot - Desktop */}
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    bgcolor: '#ff8a65',
                    flexShrink: 0,
                    mt: 1,
                  }}
                />

                {/* Right content */}
                <Box sx={{ flex: 1 }}>
                  <Card
                    sx={{
                      p: 4,
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 138, 101, 0.2)',
                      bgcolor: 'rgba(26, 40, 71, 0.5)',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 16px 40px rgba(255, 138, 101, 0.15)',
                        borderColor: 'rgba(255, 138, 101, 0.4)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 0, display: 'flex', flexDirection: 'column', gap: 3 }}>
                      {/* Icon and title */}
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
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
                          <IconComponent size={28} color='#ff8a65' strokeWidth={2} />
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            variant='h6'
                            fontWeight={700}
                            sx={{
                              color: '#ffffff',
                              mb: 0.5,
                              fontSize: '1.05rem',
                            }}
                          >
                            {education.title}
                          </Typography>
                          <Typography
                            variant='body2'
                            fontWeight={600}
                            sx={{
                              color: '#ff8a65',
                              fontSize: '0.9rem',
                            }}
                          >
                            {education.institution}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Period - Mobile */}
                      <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1, alignItems: "center" }}>
                        <Calendar size={16} color='#ff8a65' strokeWidth={2} />
                        <Typography sx={{ color: '#ff8a65', fontWeight: 700, fontSize: '0.85rem' }}>
                          {education.period}
                        </Typography>
                      </Box>

                      {/* Description */}
                      <Typography
                        variant='body2'
                        fontWeight={500}
                        sx={{
                          color: '#b0b9c6',
                          lineHeight: 1.8,
                          fontSize: '0.95rem',
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
                            maxHeight: 200,
                            objectFit: "contain",
                            borderRadius: '8px',
                            mt: 2,
                          }}
                        />
                      )}
                    </CardContent>
                  </Card>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </div>
  )
}

export default Diplome
