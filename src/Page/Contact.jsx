import React from 'react'
import { Box , Typography , Card , CardContent} from '@mui/material'
import { Facebook } from 'lucide-react';
import { Github } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Mail } from 'lucide-react';

export const Contact = () => {

    const cards = [
  {
    title: <Facebook size={40} color="#1877F2"/>,
    description:"Andry itokina",
    link: "https://www.facebook.com/andry.itokiana.73/",
  },
  {
    title:<Mail size={40} color="black" />,
    description: "itokinarakotoarisoa@gmail.com",
  },
  {
    title: <Linkedin size={40} color="#1877F2"/>,
    description: "Mon profil LinkedIn",
    link: "https://www.linkedin.com/in/itokina-rakotoarisoa-991966340/",
  },
  {
    title: <Phone size={40}  />,
    description: "034 94 269 42",
   
  },
];
  return (
    <div>
       <Box sx={{display : "flex" , gap:5 , flexDirection:"column"}}>
         <Box sx={{display:"flex", gap: 1 , justifyContent:"center" , mt:8}}>
           <Typography variant='h4' fontWeight={800}>Contactez-moi</Typography>
        </Box>

        

          <Box
              sx={{
              display: "flex",
              gap: 3,
             flexWrap: "wrap",
             justifyContent: "center",
           }}
             >
                  {cards.map((card, index) => (
        <Card
          key={index}
          onClick={() => {
            if (card.link) {
              window.open(card.link, "_blank");
             }
                }}
          sx={{
            width: 250,
            height: 150,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            transition: "0.3s",
            "&:hover": {
              transform: "translateY(-10px)",
              boxShadow: 6,
            },
          }}
        >
          <CardContent>
            <Typography variant="h6" fontWeight="bold">
              {card.title}
            </Typography>
            <Typography
                 sx={{
               fontSize: card.description.includes("@") ? "0.90rem" : "1rem",
                     }}
              fontWeight={600}
                >
                {card.description}
</Typography>
          </CardContent>
        </Card>
      ))}
         



    </Box>
       </Box>
    </div>
  )
}
