import React from 'react'
import { Typography, Box, Button, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import CV from '../image/Cv_itokiana.pdf'
import { skills } from "../data/tech";
import TechIcon from "../helpers/Techicon";
import { ChevronRight } from 'lucide-react';
import { useState , useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const TextDroite = () => {
  const navigate = useNavigate();
  const [showVibe, setShowVibe] = useState(false);

useEffect(() => {
  const interval = setInterval(() => {
    setShowVibe(prev => !prev);
  }, 4000);

  return () => clearInterval(interval);
}, []);


  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>

        {/* Main title */}
        
      <Typography
  component="h1"
  sx={{
    maxWidth: "100%",
    fontSize: { xs: "1.7rem", sm: "2.05rem", md: "2.15rem" },
    fontWeight: 400,
    letterSpacing: "-0.005em",
    lineHeight: 1.1,
  }}
>
  <Box
    component="span"
    sx={{
      display: "inline-block",
      overflow: "hidden",
      verticalAlign: "bottom",
    }}
  >
    <AnimatePresence mode="wait">
      <motion.span
        key={showVibe ? "vibe" : "developer"}
        initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -15, filter: "blur(5px)" }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        style={{ display: "inline-block" }}
      >
        {showVibe ? "Not a vibe coder 🤍" : "FullStack Developer"}
      </motion.span>
    </AnimatePresence>
  </Box>

  <Box
    component="span"
    sx={{
      fontSize: "0.80em",
      fontWeight: 100,
      color: "#FAFAFA",
      ml: 0.5,
    }}
  >
    - learning how systems actually work, and how clean code gets written
  </Box>
</Typography>

<Box>

<Typography component="p" sx={{ fontSize: { xs: "1rem", sm: "1.125rem" }, letterSpacing: "0em", fontWeight: 300, lineHeight: { xs: 1.75, sm: 1.5 }, color: "#FAFAFA" }}>
  I build backend systems and clean interfaces with{" "}
  <Box component="span" sx={{ display: "inline", verticalAlign: "middle" }}>
    {skills.map((skill) => (
      <Box key={skill.name} component="span" sx={{ display: "inline-flex", alignItems: "center", gap: "6px", bgcolor: "#11131A", border: "1px dashed #363636", borderRadius: "6px", px: "8px", py: "4px", ml: "4px", mr: "4px", fontSize: "0.8rem", color: "#FAFAFA", verticalAlign: "middle", transition: "border-color 0.2s", "&:hover": { borderColor: "#FAFAFA" } }}>
        <TechIcon item={skill} sx={{ width: 16, height: 16 }} />
        {skill.name}
      </Box>
    ))}
  </Box>{" "}
  — with a keen eye for detail and responsiveness. Also exploring blockchain out of curiosity.
</Typography>


  
</Box>
       

        {/* Description */}
        

        {/* CTA Buttons */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, pt: 2 }}>
        <Button href={CV} endIcon={<ChevronRight />} sx={{ display: "inline-flex", flexShrink: 0,
           alignItems: "center", justifyContent: "center", borderRadius: "8px", 
           border: "1px solid transparent", 
           bgcolor: "primary.main", 
           color: "primary.contrastText", fontSize: "0.875rem", fontWeight: 500, whiteSpace: "nowrap",
            textTransform: "none", transition: "all 0.2s", 
            height: "36px", gap: "6px", px: "12px",background: 'linear-gradient(135deg, #ff8a65 0%, #ffb399 100%)',
             minWidth: "auto", "&:hover": { bgcolor: "primary.main", opacity: 0.8 },
              "&:active": { transform: "translateY(1px)" }, 
              "&:focus-visible": { outline: "none", boxShadow: "0 0 0 3px rgba(128,128,128,0.5)" }, 
              "&:disabled": { pointerEvents: "none", opacity: 0.5 }, "& .MuiButton-endIcon": { m: 0 }, 
              "& svg": { width: 16, height: 16, flexShrink: 0, pointerEvents: "none" } }}>
        View my CV </Button>
          <Button
            onClick={() => {
              const element = document.querySelector("#project");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
           sx={{ display: "inline-flex", flexShrink: 0,bgcolor: 'rgba(255, 255, 255, 0.1)',color: "#ff8a65",border: '2px solid rgba(255, 138, 101, 0.3)',
           alignItems: "center", justifyContent: "center", borderRadius: "8px", 
           border: "1px solid transparent", 
           fontSize: "0.875rem", fontWeight: 500, whiteSpace: "nowrap",
            textTransform: "none", transition: "all 0.2s", 
            height: "36px", gap: "6px", px: "12px",
             minWidth: "auto", "&:hover": {opacity: 0.8 },
              "&:active": { transform: "translateY(1px)" }, 
              "&:focus-visible": { outline: "none", boxShadow: "0 0 0 3px rgba(128,128,128,0.5)" }, 
              "&:disabled": { pointerEvents: "none", opacity: 0.5 }, "& .MuiButton-endIcon": { m: 0 }, 
              "& svg": { width: 16, height: 16, flexShrink: 0, pointerEvents: "none" } }}
          >
            View Project
          </Button>
        </Box>
      </Box>
    </div>
  )
}

export default TextDroite
