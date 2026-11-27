import React from 'react'
import { Grid, Box, Typography, Chip, Fade, Slide , Tooltip } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import GlobalJob from "../image/GlobalJob.PNG"
import Mentorshow from "../image/Mentorshow.PNG"
import Dagomovie from "../image/DagoMovie.png"
import ScrollReveal from '../Component/ScrollReveal'
import { Github } from 'lucide-react'


const Project = () => {
  const projects = [
    {
      title: "Job Application Management System",
      company: "TCC",
      chips: ["REACT", "Express JS", "MongoDB", "Material UI"],
      description: "Completed a three-month internship as a Full Stack Web Developer Intern** at TCC, located in Mahamasina. During this internship, I worked on the end-to-end development of a web application dedicated to application management. I designed and developed REST APIs, handled front-end and back-end integration, and implemented a user authentication system. I also developed a notification system to manage the creation, updating, and status changes of applications.",
      image: GlobalJob,
      href:"https://github.com/Itokina2229/Application-de-gestion-candidature",
      direction: "right",
       technologies: [
      { name: "JavaScript", icon: "/image/tech/js.svg" },
      { name: "React", icon: "/image/tech/react.svg" },
      { name: "Node.js", icon: "/image/tech/node-js-svgrepo-com.svg" },
      { name: "MongoDB", icon: "/image/tech/mongodb-svgrepo-com (1).svg" },
      { name: "Material UI", icon: "/image/tech/material-ui-svgrepo-com.svg" },
      {name:"vite" , icon : "/image/tech/vite-svgrepo-com.svg"},
    ]
    },
    {
      title: "Test QA Mentorshow",
      company: "Globale Freelance",
      chips: ["QA Testing", "Web", "Mobile"],
      description: "Conducted functional testing on Mentorshow web and mobile applications, verifying key features such as login, registration, authentication, and navigation. Contributed to improving application stability and overall user experience.",
      image: Mentorshow,
      direction: "left",
      href:"https://github.com/Itokina2229/",
       technologies: [
      { name: "Android", icon: "/image/tech/android-svgrepo-com.svg" },
      { name: "IOS", icon: "/image/tech/apple-173-svgrepo-com.svg" },
      { name: "Testing", icon: "/image/tech/web-svgrepo-com.svg" },
    ]
    },
     {
      title: "DagoMovie – Movie Streaming Platform",
      company: "Globale Freelance",
      description: "Developed a movie streaming web application that allows users to browse and watch movies.",
      image: Dagomovie,
      direction: "left",
      href:"https://github.com/Itokina2229/MadaFilm",
       technologies: [
      { name: "JavaScript", icon: "/image/tech/js.svg" },
      { name: "React", icon: "/image/tech/react.svg" },
      { name: "Material UI", icon: "/image/tech/material-ui-svgrepo-com.svg" },
       {name:"vite" , icon : "/image/tech/vite-svgrepo-com.svg"},
       { name: "Python", icon: "/image/tech/python-svgrepo-com.svg" },
      { name: "Django", icon: "/image/tech/django-svgrepo-com.svg" },
      { name: "Postgresql", icon: "/image/tech/postgresql-logo-svgrepo-com.svg" },
      
    ]
    },
  ];

  return (
    <div>
      <section id='project'>
        <Box sx={{ display: "flex", gap: 6, flexDirection: "column", mb: 10 }}>
          {/* Section Title */}
          <Box sx={{ mt: 4 }}>
            <Typography
              variant='h4'
              sx={{
                background: 'linear-gradient(135deg, #ff8a65 0%, #ffb399 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',mb:2
              }}
            >
             Projects and Professional Experience
            </Typography>
            <Typography
                        variant='body1'
                        fontWeight={500}
                        sx={{
                          color: '#b0b9c6',
                          lineHeight: 1.8,
                          fontSize: { xs: '0.95rem', md: '1rem' },
                        }}
                      >
             A collection of my recent work, side projects, and experiments. Built from scratch with a focus on clean code and great user experiences.
            </Typography>

          </Box>

         <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
              },
              gap: { xs: 3, sm: 4 },
              mt: 3,
              placeItems:"center"
            }}
          >
           {projects.map((project , idx)=>(
                 <Box
  role="link"
  tabIndex={0}
  sx={{
    display: "flex",
    flexDirection: "column",
    gap: 1,
     bgcolor: "rgba(26, 40, 71, 0.5)",
     border: "1px solid rgba(255, 138, 101, 0.2)",
    py:0.75,
    px:1,
    borderRadius: "12px",
    width: "100%",
    maxWidth:{xs:"420px" , sm:"none"},
    overflow: "hidden",
    cursor: "pointer",
    transition: "all 0.2s",
    "&:hover": {
      bgcolor: "action.hover",
    },
  }}
>
<Box
  component="img"
  src={project.image}
  loading="lazy"
  sx={{
    display: "block",
    width: "100%",
    pt:1,
    borderRadius: "10px",
    objectFit: "cover",
    transition: "all 0.5s ease-out",
    ".group\\/image:hover &": {
      filter: "blur(4px)",
    },
  }}
/>
<Box sx={{ px: 2, mt: 4 }}>
  <Typography
    variant="h6"
    sx={{  fontSize: "1.25rem", fontWeight: 500,   letterSpacing: "-0.025em", }}
  >
   {project.title}
  </Typography>
   <Typography
    component="p"
    sx={{  mt: 1,  fontSize: "0.875rem",
      fontWeight: 300,    display: "-webkit-box",   WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    }}
  >
   {project.description}
  </Typography>
</Box>
<Box
  sx={{
    display: "flex",
    alignItems: "center",
    gap:2,
    px: 2,
    mt: 4,
  }}
>
  {/* Icônes des technologies */}

 {project.technologies.map((tech, index) => (
    <Tooltip
      key={index}
      title={tech.name}
      placement="top"
      arrow
    >
      <Box
        component="span"
        sx={{
          display: "inline-flex",
          flexShrink: 0,
          cursor: "default",
        }}
      >
        <Box
          component="img"
          src={tech.icon}
          alt={tech.name}
          sx={{
            display: "block",
            width: 22,
            height: 22,
            objectFit: "contain",
          }}
        />
      </Box>
    </Tooltip>
  ))}

</Box>
<Box
  sx={{
    width: "100%",
    height: "1px",
    bgcolor: "white",
    mt: 2,
    mb: 1,
  }}
/>
<Box
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mt: 1,
    px: 2,
    pb: 2,
  }}
>
  {/* Liens Live et Github */}
  <Box
  component="a"
  target="_blank"
  href={project.href}
  rel="noreferrer"
  sx={{
    display: "flex",
    alignItems: "center",
    gap: 1,
    textDecoration: "none",
    cursor: "pointer",
    transition: "color 0.2s",
  }}
>
  <Github size={18}></Github>
  <Typography sx={{ fontSize: "15px", fontWeight: 200 }}>
    Github
  </Typography>
</Box>
</Box>

</Box>

  

           ))}
          </Box>
       
        </Box>
      </section>
    </div>
   
  )
}

export default Project
