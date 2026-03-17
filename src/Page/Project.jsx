import React from 'react'
import { Grid , Box ,Typography , Chip , Fade , Slide} from '@mui/material'
import { purple , deepOrange} from '@mui/material/colors'
import GlobalJob from "../image/GlobalJob.PNG"
import Mentorshow from "../image/Mentorshow.png"



const Project = () => {
  return (
 <div>
  <section id='project'>
     <Box sx={{display:"flex" , gap:10 , flexDirection:"column" , mb:10}}>
    
         {/* Gestion de Candidature */}
             <Box sx={{display:"flex", gap: 1 , justifyContent:"center" , mt:8}}>
               <Typography variant='h4' fontWeight={800}>Projet et expérience professionnelle</Typography>
             </Box>
        
        <Grid container alignItems="stretch">
       <Grid size={{xs:12 , md:6}}>
   <Slide in direction="right" timeout={700}>
       <Box sx={{display:"flex" , flexDirection:"column" , gap:3}}>
         <Box sx={{display:"flex" , gap:1}}>
        <Typography fontWeight={600} variant='h6' color={deepOrange[300]}>Application de Gestion de candidature</Typography>
       <Typography variant='h6'>-TCC</Typography>
       </Box>
       <Box sx={{display:"flex" ,gap:2}}>
        <Chip label="REACT" sx={{bgcolor:"white"}}></Chip>
        <Chip label="Express JS" sx={{bgcolor:"white"}}></Chip>
        <Chip label="MongoDB" sx={{bgcolor:"white"}}></Chip>
        <Chip label="Materiel UI" sx={{bgcolor:"white"}}></Chip>

       </Box>
       <Typography variant='body1' fontWeight={600}>
       Stage de trois mois en tant que stagiaire Développeur Web Full Stack au sein de TCC à Mahamasina. Durant ce stage, j’ai travaillé sur le développement complet d’une application web dédiée à la gestion des candidatures
         J’ai conçu et développé des API REST, assuré l’intégration entre le front-end et le back-end, et mis en place un système d’authentification des utilisateurs. J’ai également développé un système de notifications permettant de gérer la création, la mise à jour et le changement de statut des candidatures.
       </Typography>
       

      </Box>
   </Slide>
       </Grid>

      <Grid size={1}>

      </Grid>

    <Grid size={{ xs: 12, md: 5 }} sx={{ mt: { xs: 4, md: 0 } }}>
        <Slide in direction="left" timeout={700}>
    <Box
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#0f172a",
      }}
    >
      <Box
        component="img"
        src={GlobalJob}
        sx={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
        }}
      />
    </Box>
    </Slide>
  </Grid>
    </Grid>

 

         
             
    
    {/* TEST QA */}
           <Grid container alignItems="stretch">
    <Grid size={{ xs: 12, md: 5 }} sx={{ mt: { xs: 4, md: 0 } }}>
      <Box sx={{display:"flex" , flexDirection:"column" , gap:2}}>
           <Box sx={{display:"flex" , gap:1}}>
        <Typography fontWeight={600} variant='h6' color={deepOrange[300]}>Test QA de Mentorshow </Typography>
       <Typography variant='h6'>-Globale Freelance</Typography>
       </Box>
    <Box
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#0f172a",
      }}
    >
      <Box
        component="img"
        src={Mentorshow}
        sx={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
        }}
      />
    </Box>
        
        
      
      </Box>  
    
  </Grid>

   <Grid size={1}>

      </Grid>
         <Grid size={{xs:12 , md:6}}>
      <Box sx={{display:"flex" , flexDirection:"column" , p:5 , gap:3}}>
        
       
       <Typography variant='body1' fontWeight={600}>
        1-Test fonctionnel de l’application web et mobile Mentorshow  
       </Typography>
        <Typography variant='body1' fontWeight={600}>
        2-Vérification des fonctionnalités critiques: login, inscription, 
authentification, navigation
       </Typography>
        <Typography variant='body1' fontWeight={600}>
        3-Contribution à l’amélioration de la stabilité et de l’expérience utilisateur 
       </Typography>
       

      </Box>
       </Grid>

   
    </Grid>
         

    
     <Grid container>
      <Grid size={12}>
          <Box sx={{display:"flex"  , flexDirection:"column", gap:4}}>
           <Box sx={{display:"flex"  , flexDirection:"column", gap:1}}>
             <Typography variant='h6' color={deepOrange[300]}>
            Projet : Développeur Web – Connectopia 
          </Typography>

       <Typography alignItems="center" color='green' fontWeight={800} fontSize="17px">
ISPM, Antsobolo | 2024(2eme année) 
          </Typography>
        
           </Box>
                <Box sx={{display:"flex" ,gap:2}}>
        <Chip label="REACT" sx={{bgcolor:"white"}}></Chip>
        <Chip label="Express JS" sx={{bgcolor:"white"}}></Chip>
        <Chip label="PostreSQL" sx={{bgcolor:"white"}}></Chip>
        <Chip label="Talwind CSS" sx={{bgcolor:"white"}}></Chip>

       </Box>
                 <Typography alignItems="center"> 
 • Dans le cadre de ma deuxième année à l’ISPM Antsobolo, j’ai contribué au développement de Connectopia, une plateforme de réseau social permettant aux utilisateurs de se connecter, de partager du contenu et d’interagir. Ce projet m’a permis de travailler en équipe sur l’intégration front-end et back-end, en respectant une répartition efficace des tâches. J’ai également pris part à la conception et à la gestion de la base de données, ainsi qu’au développement des fonctionnalités CRUD, renforçant ainsi mes compétences en développement web, en collaboration technique et en structuration d’applications complètes.  
          </Typography>
          </Box>


      </Grid>
     </Grid>

     



    </Box>
  </section>
   
    
 </div>
  )
}

export default Project