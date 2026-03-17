import React from 'react'
import { Typography, Box , Button , Stack } from '@mui/material'
import { purple ,orange} from '@mui/material/colors'
import { useNavigate } from 'react-router-dom'
import CV from '../image/Curriculum Vitae.pdf'

const TextDroite = () => {

  const navigate=useNavigate();
  return (
    <div>
      
     <Box sx={{ display: "flex", flexDirection: "column", gap:2}}>
      
      {/* Salutation */}

      {/* Nom complet */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1, // gap-2
          fontWeight: 600,
          fontSize: { xs: "1.125rem", md: "1.5rem" , lg:"50px"}, // text-lg / md:text-2xl
        }}
      >
        <Typography sx={{ color: "" }} fontWeight={600} fontSize={30}>RAKOTOARISOA</Typography>
        <Typography sx={{ color: "" }} fontWeight={600} fontSize={30}>Andrinomena</Typography>
        <Typography sx={{ color: purple[500] }} fontWeight={600} fontSize={30}>ITOKIANA</Typography>
      </Box>

      {/* Titre principal */}
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: { xs: "4rem", md: "3.75rem", lg: "5.5rem" }, // text-4xl / md:text-6xl / lg:text-7xl
            lineHeight: 1,
          }}
        >
          <Box component="span" sx={{ color: purple[600] }} >
           Full-Stack
          </Box>
          <br />
          <Box component="span" sx={{ color: "" }}>
            Developer - DATA/IA
          </Box>
        </Typography>
      </Box>

      {/* Description */}
      <Typography
        sx={{
          color: "gray.700",
          fontSize: { xs: "1rem", md:"1.125rem" }, // text-base / md:text-lg
          maxWidth: "36rem", // max-w-xl
        }}
      >
       Je suis un développeur full-stack, prêt à vous aider dans votre projet
      </Typography>

      {/* Boutons */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
        <Button
         component="a"        // ← important
        href={CV}       // chemin vers ton PDF
        target="_blank"      // ouvre dans un nouvel onglet
         rel="noopener noreferrer" // bonne pratique sécurité
          sx={{
            
            px: 6,
            py: 1.5,
            bgcolor: orange[400],
            color: "#fff",
            fontWeight: "bold",
            borderRadius: 2,
            textTransform: "none",
            boxShadow: 3,
            transition: "0.3s",
            "&:hover": {
              bgcolor: orange[700],
              transform: "translateY(-4px)",
              boxShadow: 6,
            },
          }}
        >
         Voir CV
        </Button>

        <Button
           onClick={() => window.location.href = "#project"}
          sx={{
            px: 6,
            py: 1.5,
            bgcolor: "#fff",
            color: "black",
            fontWeight: "bold",
            borderRadius: 2,
            textTransform: "none",
            border: "2px solid black",
            boxShadow: 3,
            transition: "0.3s",
            "&:hover": {
              bgcolor: "gray.100",
              transform: "translateY(-4px)",
              boxShadow: 6,
            },
          }}
        >
          Voir Projects
        </Button>
      </Box>
    </Box>     
 
      

     
    </div>
  )
}

export default TextDroite