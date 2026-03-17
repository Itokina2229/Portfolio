import React from 'react'
import { Box , Typography } from '@mui/material'
import { User } from 'lucide-react';

const Profil = () => {
  return (
    <div>
        <Box sx={{display:"flex" , flexDirection:"column" ,gap:2 , mb:5}}>
                <Box sx={{display:"flex", gap: 1}}>
                   <Typography variant='h4' fontWeight={800}>Profil</Typography>
                   <Box sx={{display:"flex" , alignItems:"center"}}>
                    <User size={30} color='orange' strokeWidth={3}/>
                   </Box>
                </Box>
               
             <Typography variant='h6' fontWeight={0}>Étudiant en Informatique, Statistique et Intelligence Artificielle a 
l’ISPM, passionné par le développement web et l’analyse de 
données. Expérimenté dans la création d’applications et la 
manipulation avancée de datasets pour l’exploration statistique, le 
feature engineering et la préparation pour Machine Learning.</Typography>
              </Box>
    </div>
  )
}

export default Profil