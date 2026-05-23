import React from 'react'
import { Box, Typography, Card, CardContent } from '@mui/material'
import { Facebook, Github, Phone, Linkedin, Mail } from 'lucide-react';

export const Contact = () => {
  const cards = [
    {
      title: "Facebook",
      description: "Andry itokina",
      icon: Facebook,
      link: "https://www.facebook.com/andry.itokiana.73/",
      color: "#1877F2",
    },
    {
      title: "Email",
      description: "itokinarakotoarisoa@gmail.com",
      icon: Mail,
      link: null,
      color: "#ff8a65",
    },
    {
      title: "LinkedIn",
      description: "Mon profil LinkedIn",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/itokina-rakotoarisoa-991966340/",
      color: "#0077B5",
    },
    {
      title: "Téléphone",
      description: "034 94 269 42",
      icon: Phone,
      link: null,
      color: "#ff8a65",
    },
  ];

  return (
    <div>
      <Box sx={{ display: "flex", gap: 6, flexDirection: "column", py: 8 }}>
        {/* Section Title */}
        <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
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
            Contactez-moi
          </Typography>
        </Box>

        {/* Contact Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" },
            gap: 3,
          }}
        >
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <Card
                key={index}
                onClick={() => {
                  if (card.link) {
                    window.open(card.link, "_blank");
                  }
                }}
                sx={{
                  p: 3,
                  cursor: card.link ? "pointer" : "default",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 138, 101, 0.2)',
                  bgcolor: 'rgba(26, 40, 71, 0.5)',
                  backdropFilter: 'blur(10px)',
                  minHeight: 200,
                  '&:hover': {
                    transform: 'translateY(-12px)',
                    boxShadow: '0 20px 50px rgba(255, 138, 101, 0.2)',
                    borderColor: 'rgba(255, 138, 101, 0.4)',
                  },
                }}
              >
                <CardContent sx={{ p: 0, display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center' }}>
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${card.color}20 0%, ${card.color}10 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IconComponent size={32} color={card.color} strokeWidth={2} />
                  </Box>

                  <Box>
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      sx={{
                        color: '#ffffff',
                        mb: 1,
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant='body2'
                      fontWeight={500}
                      sx={{
                        color: '#b0b9c6',
                        fontSize: '0.9rem',
                        lineHeight: 1.5,
                      }}
                    >
                      {card.description}
                    </Typography>
                  </Box>

                  {card.link && (
                    <Typography
                      sx={{
                        color: card.color,
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        mt: 1,
                      }}
                    >
                      Ouvrir →
                    </Typography>
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

