import React from 'react'
import { Box , Typography , Accordion , AccordionSummary , AccordionActions , AccordionDetails, withTheme } from '@mui/material'
import {  GraduationCap ,School ,ChevronDown} from 'lucide-react';
import { purple ,orange} from '@mui/material/colors'
import ispm from '../image/ispm-sn.png'

const Diplome = () => {
  return (
    <div>
         <Box sx={{display:"flex" , flexDirection:"column",gap :2 ,mb:5 }}>
                 <Box sx={{display:"flex", gap: 1 , justifyContent:"center" , mt:8}}>
                 <Typography variant='h4' fontWeight={800}>Diplôme et Études</Typography>
                  <Box sx={{display:"flex" , alignItems:"center"}}>
                    <School size={30} color='orange' strokeWidth={2.5}/>
                   </Box>
               </Box>

                 <Box sx={{display:"flex" ,  flexDirection:{xs:"column" , lg:"row"},gap:5, mt:8}}>
                <Box sx={{minWidth:"30%" , display:"flex" , justifyContent:"center"}}>
                  <Box
                   component="img"
                    src={ispm}
                    sx={{ objectFit: "cover",
             width: { xs: 300, md: 200, lg: 300}, 
              height: { xs: 300, md:200, lg: 300},}}

                              />
                </Box>
                <Box sx={{p:2}}> 
                     <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                     <Box sx={{ 
                    bgcolor: purple[400], 
                    borderRadius: '50%', 
                    p: 1, 
                    display: 'flex',
                    color: 'white',
                    flexShrink: 0 // Empêche l'icône de rétrécir
                  }}>
                    <GraduationCap size={40} />
                  </Box>

                   <Typography 
                    variant='subtitle1' 
                    
                    sx={{ 
                      fontWeight: 600,
                      color:'white',
                      letterSpacing: '0.5px',
                      fontSize:"20px"
                    }}
                  >
                   Diplôme Licence – Informatique Statistique et Intelligence Artificielle
                  </Typography>
                  </Box>
                   <Typography 
                  fontWeight={500}
                  sx={{ 
                    pl: 9,
                    color: 'white',
                    fontSize: '0.95rem'
                  }}
                >
                  
                   INSTITUT SUPERIEUR POLYTECHNIQUE DE MADAGASCAR (ISPM)
                </Typography>
                </Box>
                 <Box sx={{ 
                pl: 5, 
                pr: 2,
                borderLeft: '3px solid',
                borderColor: 'primary.main',
                bgcolor: 'rgba(0, 0, 0, 0.02)',
                borderRadius: 1,
                py: 2,
                mt: 1
              }}>
                <Typography 
                  variant="body2" 
                  color="white" 
                  sx={{ lineHeight: 1.8 }}
                >
                  Filieres combinant informatique, statistique et intelligence artificielle.
                  Elle m'a permis de développer des compétences en programmation,
                  analyse de données et conception de solutions intelligentes.
                </Typography>
              </Box>
               
                
                </Box>

               </Box >

               <Box sx={{display:"flex",flexDirection:{xs:"column" , lg:"row"} , gap : 5 }}>
                <Box sx={{minWidth:""}}>
                     <Box sx={{p:2}}> 
                     <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                     <Box sx={{ 
                    bgcolor: purple[400], 
                    borderRadius: '50%', 
                    p: 1, 
                    display: 'flex',
                    color: 'white',
                    flexShrink: 0 // Empêche l'icône de rétrécir
                  }}>
                    <GraduationCap size={40} />
                  </Box>

                   <Typography 
                    variant='subtitle1' 
                    
                    sx={{ 
                      fontWeight: 600,
                      color:'white',
                      letterSpacing: '0.5px',
                      fontSize:"20px"
                    }}
                  >
                  Baccalauréat - série D
                  </Typography>
                  </Box>
                   <Typography 
                  fontWeight={500}
                  sx={{ 
                    pl: 9,
                    color: 'white',
                    fontSize: '0.95rem'
                  }}
                >
                  
                   LYCEE PRIVE MIARINTSOA (LPM)
                </Typography>
                </Box>
                 <Box sx={{ 
                pl: 5, 
                pr: 2,
                borderLeft: '3px solid',
                borderColor: 'primary.main',
                bgcolor: 'rgba(0, 0, 0, 0.02)',
                borderRadius: 1,
                py: 2,
                mt: 1
              }}>
                <Typography 
                  variant="body2" 
                  color="white" 
                  sx={{ lineHeight: 1.8 }}
                >
                 Établissement d’enseignement secondaire privé dédié à la formation académique des élèves jusqu’au Baccalauréat, en mettant l’accent sur la rigueur, les disciplines scientifiques et le développement des compétences des élèves.
                </Typography>
              </Box>
               
                
                </Box>
                </Box>

                <Box>
                     <Box sx={{p:2}}> 
                     <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                     <Box sx={{ 
                    bgcolor: purple[400], 
                    borderRadius: '50%', 
                    p: 1, 
                    display: 'flex',
                    color: 'white',
                    flexShrink: 0 // Empêche l'icône de rétrécir
                  }}>
                    <GraduationCap size={40} />
                  </Box>

                   <Typography 
                    variant='subtitle1' 
                    
                    sx={{ 
                      fontWeight: 600,
                      color:'white',
                      letterSpacing: '0.5px',
                      fontSize:"20px"
                    }}
                  >
                  Formation en Python 
                  </Typography>
                  </Box>
                   <Typography 
                  fontWeight={500}
                  sx={{ 
                    pl: 9,
                    color: 'white',
                    fontSize: '0.95rem'
                  }}
                >
                  
                   Analamahitsy
                </Typography>
                </Box>
                 <Box sx={{ 
                pl: 5, 
                pr: 2,
                borderLeft: '3px solid',
                borderColor: 'primary.main',
                bgcolor: 'rgba(0, 0, 0, 0.02)',
                borderRadius: 1,
                py: 2,
                mt: 1
              }}>
                <Typography 
                  variant="body2" 
                  color="white" 
                  sx={{ lineHeight: 1.8 }}
                >
                  Formation axée sur l’apprentissage du langage Python, couvrant les bases de la programmation, la logique algorithmique et la réalisation de petits projets pratiques. 
                </Typography>
              </Box>
               
                
                </Box>
                </Box>

               </Box>
                
              </Box>
        
    </div>
  )
}

export default Diplome