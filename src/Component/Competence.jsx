import React from 'react'
import { Box  , Typography , Card , CardContent} from '@mui/material';
import { purple , orange , blue , green } from '@mui/material/colors';
const Competence = () => {
  return (
    <div>
    <Box sx={{display:"flex" , flexDirection:"Column" , gap :2}}>
      <Typography variant='h4' fontWeight={800}> Mes Competences</Typography>
    <Box sx={{display:"flex" , gap:3 , flexDirection:{xs:"column" , md:"row"}} }>
       <Box sx={{minWidth:275}}>
        <Card sx={{p:1 , borderRadius:2 , bgcolor:"#273449" ,color:"whitesmoke" , minHeight:{xs:"auto",md:160}}}>
          <CardContent sx={{ display :"flex" , gap:3 , flexDirection:"column"}}>
            <Typography variant='h6'>Langage de programmation</Typography>
            <Typography variant='body2' fontWeight={400}>CSS, HTML , JavaScript, Python , PHP</Typography>
          </CardContent>
        </Card>
       </Box>
    <Box sx={{minWidth:275}}>
        <Card sx={{p:1 , borderRadius:2 , bgcolor:"white" ,minHeight:{xs:"auto",md:160}}}>
          <CardContent sx={{ display :"flex" , gap:3 , flexDirection:"column"}}>
            <Typography variant='h6'>Framework et Bibliotheques</Typography>
            <Typography variant='body2' fontWeight={400}>  React,Angular,TypeScript, Django , Laravel, Nest.js , Node.js </Typography>
          </CardContent>
        </Card> 
       </Box>
       <Box sx={{minWidth:275}}>
        <Card sx={{p:1 , borderRadius:2 ,minHeight:{xs:"auto",md:160} , bgcolor:"#273449" , color:"white"}}>
          <CardContent sx={{ display :"flex" , gap:3 , flexDirection:"column"}}>
            <Typography variant='h6'>Base de Donné</Typography>
            <Typography variant='body2' fontWeight={400}>MongoDB, MySQL,PostgreSql</Typography>
          </CardContent>
        </Card>
       </Box>
       <Box sx={{minWidth:275}}>
       <Card sx={{p:1 , borderRadius:2 ,minHeight:{xs:"auto",md:160} ,bgcolor:"white"}}>
          <CardContent sx={{ display :"flex" , gap:3, flexDirection:"column"}}>
            <Typography variant='h6'>DATA/IA</Typography>
            <Typography variant='body2' fontWeight={400}> Pandas , Numpy , Matplotlib , sklearn </Typography>
          </CardContent>
        </Card>
       </Box>
    </Box>

    </Box>
      
      
      </div>
  )
}

export default Competence