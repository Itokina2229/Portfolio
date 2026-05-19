import React from 'react'
import { Box, Typography, Card, CardContent } from '@mui/material';
import { Code, Layers, Database, BarChart3 } from 'lucide-react';

const Competence = () => {
  const skills = [
    {
      title: "Langage de programmation",
      description: "CSS, HTML, JavaScript, Python, PHP",
      icon: Code,
      color: '#ff8a65',
    },
    {
      title: "Framework et Bibliothèques",
      description: "React, Angular, TypeScript, Django, Laravel, Nest.js, Node.js",
      icon: Layers,
      color: '#ffb399',
    },
    {
      title: "Base de Données",
      description: "MongoDB, MySQL, PostgreSQL",
      icon: Database,
      color: '#ff8a65',
    },
    {
      title: "Data/IA",
      description: "Pandas, Numpy, Matplotlib, sklearn",
      icon: BarChart3,
      color: '#ffb399',
    },
  ];

  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4, mb: 8 }}>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
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
            Mes Compétences
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" },
            gap: 3,
          }}
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Card
                key={index}
                sx={{
                  p: 3,
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 138, 101, 0.2)',
                  bgcolor: 'rgba(26, 40, 71, 0.5)',
                  backdropFilter: 'blur(10px)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  minHeight: 200,
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 16px 40px rgba(255, 138, 101, 0.15)',
                    borderColor: 'rgba(255, 138, 101, 0.4)',
                  },
                }}
              >
                <CardContent sx={{ p: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <IconComponent size={28} color={skill.color} strokeWidth={2} />
                    <Typography
                      variant='h6'
                      fontWeight={700}
                      sx={{
                        color: '#ffffff',
                        fontSize: '1rem',
                      }}
                    >
                      {skill.title}
                    </Typography>
                  </Box>

                  <Typography
                    variant='body2'
                    fontWeight={500}
                    sx={{
                      color: '#b0b9c6',
                      lineHeight: 1.6,
                      fontSize: '0.9rem',
                    }}
                  >
                    {skill.description}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </Box>
    </div>
  )
}

export default Competence
