import React from 'react'
import { Box, Typography, Card, CardContent, Chip } from '@mui/material';
import { Code, Layers, Database, BarChart3 } from 'lucide-react';

const Competence = () => {
  const colorPalettes = {
    0: { bg: '#ff8a6520', text: '#ff8a65', border: '#ff8a6550' }, // Orange
    1: { bg: '#4ade8020', text: '#4ade80', border: '#4ade8050' }, // Green
    2: { bg: '#60a5fa20', text: '#60a5fa', border: '#60a5fa50' }, // Blue
    3: { bg: '#f472b620', text: '#f472b6', border: '#f472b650' }, // Pink
    4: { bg: '#fbbf2420', text: '#fbbf24', border: '#fbbf2450' }, // Yellow
    5: { bg: '#a78bfa20', text: '#a78bfa', border: '#a78bfa50' }, // Purple
    6: { bg: '#06b6d420', text: '#06b6d4', border: '#06b6d450' }, // Cyan
  };

  const skills = [
    {
      title: "Langage de programmation",
      items: ["CSS", "HTML", "JavaScript", "Python", "PHP"],
      icon: Code,
      color: '#ff8a65',
      categoryColor: 0,
    },
    {
      title: "Framework et Bibliothèques",
      items: ["React", "Angular", "TypeScript", "Django", "Laravel", "Nest.js", "Node.js"],
      icon: Layers,
      color: '#4ade80',
      categoryColor: 1,
    },
    {
      title: "Base de Données",
      items: ["MongoDB", "MySQL", "PostgreSQL"],
      icon: Database,
      color: '#60a5fa',
      categoryColor: 2,
    },
    {
      title: "Data/IA",
      items: ["Pandas", "Numpy", "Matplotlib", "sklearn"],
      icon: BarChart3,
      color: '#f472b6',
      categoryColor: 3,
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
            const categoryColor = colorPalettes[skill.categoryColor];
            return (
              <Card
                key={index}
                sx={{
                  p: 3,
                  borderRadius: '12px',
                  border: `1px solid ${categoryColor.border}`,
                  background: `linear-gradient(135deg, rgba(26, 40, 71, 0.8) 0%, ${categoryColor.bg} 100%)`,
                  backdropFilter: 'blur(10px)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  minHeight: 200,
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 16px 40px ${categoryColor.bg}80`,
                    borderColor: categoryColor.text,
                  },
                }}
              >
                <CardContent sx={{ p: 0, display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: '8px',
                        background: `${categoryColor.bg}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <IconComponent size={28} color={skill.color} strokeWidth={2} />
                    </Box>
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

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                    {skill.items.map((item, idx) => {
                      const itemColor = colorPalettes[(idx + skill.categoryColor) % 7];
                      return (
                        <Chip
                          key={idx}
                          label={item}
                          sx={{
                            bgcolor: itemColor.bg,
                            color: itemColor.text,
                            fontWeight: 700,
                            border: `1px solid ${itemColor.border}`,
                            fontSize: '0.8rem',
                            height: 'auto',
                            padding: '6px 12px',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              bgcolor: itemColor.text,
                              color: '#0f172a',
                              transform: 'scale(1.05)',
                              fontWeight: 800,
                            },
                          }}
                        />
                      );
                    })}
                  </Box>
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
