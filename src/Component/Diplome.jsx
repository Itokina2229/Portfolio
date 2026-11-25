
import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { GraduationCap, School, Calendar } from 'lucide-react';


const Diplome = () => {
  const educations = [
    {
      title: "Diplôme Licence – Informatique Statistique et Intelligence Artificielle",
      institution: "INSTITUT SUPERIEUR POLYTECHNIQUE DE MADAGASCAR (ISPM)",
      description: "A program combining computer science, statistics, and artificial intelligence. It enabled me to develop skills in programming, data analysis, and the design of intelligent solutions",
      period: "2022 - 2025",
      
      icon: GraduationCap,
    },
    {
      title: "Baccalauréat - série D",
      institution: "LYCEE PRIVE MIARINTSOA (LPM)",
      description: "A private secondary school dedicated to providing students with an academic education up to the Baccalaureate level, emphasizing academic rigor, scientific disciplines, and skills development",
      period: "2021",
      image: null,
      icon: School,
    },
    {
      title: "Formation en Python",
      institution: "Analamahitsy",
      description: "Training focused on learning the Python programming language, covering programming fundamentals, algorithmic thinking, and the development of practical projects.",
      period: "2023",
      image: null,
      icon: GraduationCap,
    },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, mb: 10,maxWidth: { xs: '100%', sm: '900px' }}}>
      {/* Section Title */}
      <Typography
        variant="h4"
        sx={{
          background: 'linear-gradient(135deg, #ff8a65 0%, #ffb399 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Education and Qualifications
      </Typography>

      {/* Timeline */}
      <Box sx={{ position: 'relative', pl: { xs: 4, sm: 5 } }}>

        {/* Vertical line */}
        <Box
          sx={{
            position: 'absolute',
            left: { xs: 9, sm: 11 },
            top: 12,
            bottom: 12,
            width: '2px',
            background: 'linear-gradient(to bottom, #ff8a65, rgba(255, 138, 101, 0.15))',
          }}
        />

        {educations.map((education, index) => {
          const IconComponent = education.icon;

          return (
            <Box
              key={index}
              sx={{
                position: 'relative',
                mb: index === educations.length - 1 ? 0 : 4,
              }}
            >
              {/* Timeline point */}
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: -36, sm: -43 },
                  top: 24,
                  width: 22,
                  height: 22,
                  borderRadius: '50%',
                  bgcolor: '#ff8a65',
                  border: '4px solid #111827',
                  boxShadow: '0 0 0 2px rgba(255, 138, 101, 0.25)',
                  zIndex: 1,
                }}
              />

              {/* Education card */}
             <Card
                sx={{
                  width: "100%",
                  minWidth: 0,
                  boxSizing: "border-box",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 138, 101, 0.2)",
                  bgcolor: "rgba(26, 40, 71, 0.5)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                  "@media (hover: hover)": {
                    "&:hover": {
                      transform: "translateX(6px)",
                      boxShadow: "0 16px 40px rgba(255, 138, 101, 0.12)",
                      borderColor: "rgba(255, 138, 101, 0.4)",
                    },
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: { xs: 2, sm: 3 },
                    '&:last-child': { pb: { xs: 2, sm: 3 } },
                  }}
                >
                  {/* Header */}
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: '8px',
                        background: 'linear-gradient(135deg, rgba(255, 138, 101, 0.2), rgba(255, 179, 153, 0.1))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <IconComponent size={24} color="#ff8a65" strokeWidth={2} />
                    </Box>

                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography
                        variant="h6"
                        fontWeight={700}
                        sx={{
                          color: '#ffffff',
                          fontSize: { xs: '0.95rem', sm: '1.05rem' },
                          lineHeight: 1.4,
                          mb: 1,
                        }}
                      >
                        {education.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        fontWeight={600}
                        sx={{
                          color: '#ff8a65',
                          fontSize: '0.85rem',
                        }}
                      >
                        {education.institution}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Period */}
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mt: 2 }}>
                    <Calendar size={15} color="#ff8a65" strokeWidth={2} />
                    <Typography
                      sx={{
                        color: '#ff8a65',
                        fontWeight: 700,
                        fontSize: '0.8rem',
                      }}
                    >
                      {education.period}
                    </Typography>
                  </Box>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    sx={{
                      color: '#b0b9c6',
                      lineHeight: 1.7,
                      fontSize: '0.85rem',
                      mt: 2,
                    }}
                  >
                    {education.description}
                  </Typography>

                  {/* Institution image */}
                
                </CardContent>
              </Card>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Diplome;
