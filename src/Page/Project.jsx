import React from 'react'
import { Grid, Box, Typography, Chip, Fade, Slide } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import GlobalJob from "../image/GlobalJob.PNG"
import Mentorshow from "../image/Mentorshow.PNG"

const Project = () => {
  const projects = [
    {
      title: "Application de Gestion de candidature",
      company: "TCC",
      chips: ["REACT", "Express JS", "MongoDB", "Material UI"],
      description: "Stage de trois mois en tant que stagiaire Développeur Web Full Stack au sein de TCC à Mahamasina. Durant ce stage, j'ai travaillé sur le développement complet d'une application web dédiée à la gestion des candidatures. J'ai conçu et développé des API REST, assuré l'intégration entre le front-end et le back-end, et mis en place un système d'authentification des utilisateurs. J'ai également développé un système de notifications permettant de gérer la création, la mise à jour et le changement de statut des candidatures.",
      image: GlobalJob,
      direction: "right"
    },
    {
      title: "Test QA de Mentorshow",
      company: "Globale Freelance",
      chips: ["QA Testing", "Web", "Mobile"],
      description: "1-Test fonctionnel de l'application web et mobile Mentorshow\n\n2-Vérification des fonctionnalités critiques: login, inscription, authentification, navigation\n\n3-Contribution à l'amélioration de la stabilité et de l'expérience utilisateur",
      image: Mentorshow,
      direction: "left"
    },
  ];

  return (
    <div>
      <section id='project'>
        <Box sx={{ display: "flex", gap: 6, flexDirection: "column", mb: 10 }}>
          {/* Section Title */}
          <Box sx={{ display: "flex", gap: 1, justifyContent: "center", mt: 4 }}>
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
              Projet et expérience professionnelle
            </Typography>
          </Box>

          {/* Projects */}
          {projects.map((project, idx) => (
            <Grid
              container
              alignItems="stretch"
              key={idx}
              spacing={{ xs: 2, md: 4 }}
              sx={{
                mb: 6,
              }}
            >
              {project.direction === "right" ? (
                <>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Slide in direction="right" timeout={700}>
                      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                        <Box>
                          <Typography
                            fontWeight={700}
                            variant='h5'
                            sx={{
                              background: 'linear-gradient(135deg, #ff8a65 0%, #ffb399 100%)',
                              backgroundClip: 'text',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              mb: 1,
                            }}
                          >
                            {project.title}
                          </Typography>
                          <Typography variant='h6' sx={{ color: '#b0b9c6', fontWeight: 500 }}>
                            {project.company}
                          </Typography>
                        </Box>

                        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                          {project.chips.map((chip, i) => (
                            <Chip
                              key={i}
                              label={chip}
                              sx={{
                                bgcolor: 'rgba(255, 138, 101, 0.15)',
                                color: '#ff8a65',
                                fontWeight: 600,
                                border: '1px solid rgba(255, 138, 101, 0.3)',
                              }}
                            />
                          ))}
                        </Box>

                        <Typography
                          variant='body1'
                          fontWeight={500}
                          sx={{
                            color: '#b0b9c6',
                            lineHeight: 1.8,
                            whiteSpace: 'pre-line',
                          }}
                        >
                          {project.description}
                        </Typography>
                      </Box>
                    </Slide>
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <Slide in direction="left" timeout={700}>
                      <Box
                        sx={{
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: '12px',
                          border: '1px solid rgba(255, 138, 101, 0.2)',
                          bgcolor: 'rgba(26, 40, 71, 0.5)',
                          p: 3,
                          overflow: 'hidden',
                        }}
                      >
                        <Box
                          component="img"
                          src={project.image}
                          sx={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            objectFit: "contain",
                            borderRadius: '8px',
                          }}
                        />
                      </Box>
                    </Slide>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Slide in direction="left" timeout={700}>
                      <Box
                        sx={{
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: '12px',
                          border: '1px solid rgba(255, 138, 101, 0.2)',
                          bgcolor: 'rgba(26, 40, 71, 0.5)',
                          p: 3,
                          overflow: 'hidden',
                        }}
                      >
                        <Box
                          component="img"
                          src={project.image}
                          sx={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            objectFit: "contain",
                            borderRadius: '8px',
                          }}
                        />
                      </Box>
                    </Slide>
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <Slide in direction="right" timeout={700}>
                      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                        <Box>
                          <Typography
                            fontWeight={700}
                            variant='h5'
                            sx={{
                              background: 'linear-gradient(135deg, #ff8a65 0%, #ffb399 100%)',
                              backgroundClip: 'text',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              mb: 1,
                            }}
                          >
                            {project.title}
                          </Typography>
                          <Typography variant='h6' sx={{ color: '#b0b9c6', fontWeight: 500 }}>
                            {project.company}
                          </Typography>
                        </Box>

                        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                          {project.chips.map((chip, i) => (
                            <Chip
                              key={i}
                              label={chip}
                              sx={{
                                bgcolor: 'rgba(255, 138, 101, 0.15)',
                                color: '#ff8a65',
                                fontWeight: 600,
                                border: '1px solid rgba(255, 138, 101, 0.3)',
                              }}
                            />
                          ))}
                        </Box>

                        <Typography
                          variant='body1'
                          fontWeight={500}
                          sx={{
                            color: '#b0b9c6',
                            lineHeight: 1.8,
                            whiteSpace: 'pre-line',
                          }}
                        >
                          {project.description}
                        </Typography>
                      </Box>
                    </Slide>
                  </Grid>
                </>
              )}
            </Grid>
          ))}

          {/* Connectopia Project */}
          <Box
            sx={{
              p: 4,
              borderRadius: '12px',
              border: '1px solid rgba(255, 138, 101, 0.2)',
              bgcolor: 'rgba(26, 40, 71, 0.5)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Box>
                <Typography
                  fontWeight={700}
                  variant='h5'
                  sx={{
                    background: 'linear-gradient(135deg, #ff8a65 0%, #ffb399 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 1,
                  }}
                >
                  Projet : Développeur Web – Connectopia
                </Typography>
                <Typography variant='body2' sx={{ color: '#4ade80', fontWeight: 700 }}>
                  ISPM, Antsobolo | 2024 (2e année)
                </Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                {["REACT", "Express JS", "PostgreSQL", "Tailwind CSS"].map((chip, i) => (
                  <Chip
                    key={i}
                    label={chip}
                    sx={{
                      bgcolor: 'rgba(255, 138, 101, 0.15)',
                      color: '#ff8a65',
                      fontWeight: 600,
                      border: '1px solid rgba(255, 138, 101, 0.3)',
                    }}
                  />
                ))}
              </Box>

              <Typography
                variant='body1'
                fontWeight={500}
                sx={{
                  color: '#b0b9c6',
                  lineHeight: 1.8,
                }}
              >
                Dans le cadre de ma deuxième année à l&apos;ISPM Antsobolo, j&apos;ai contribué au développement de Connectopia, une plateforme de réseau social permettant aux utilisateurs de se connecter, de partager du contenu et d&apos;interagir. Ce projet m&apos;a permis de travailler en équipe sur l&apos;intégration front-end et back-end, en respectant une répartition efficace des tâches. J&apos;ai également pris part à la conception et à la gestion de la base de données, ainsi qu&apos;au développement des fonctionnalités CRUD, renforçant ainsi mes compétences en développement web, en collaboration technique et en structuration d&apos;applications complètes.
              </Typography>
            </Box>
          </Box>
        </Box>
      </section>
    </div>
  )
}

export default Project
