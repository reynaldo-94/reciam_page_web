import { Box, Divider, Grid, Paper, Typography } from "@mui/material"
import Carousel from "react-material-ui-carousel"
import { imgCarouselUs, items } from "./constants"
import { FontSize, ThemePalette } from "../theme/theme"
import { BoxCarousel } from "./HomePage"
import { useNavigate } from "react-router-dom"
import { CButton } from "../components/Button"
import { TitleSection } from "../components/TitleSection/TitleSection"
import { TypeTitleSection } from "../constants/TitleSection.constant"
import { CorporateFare, Forest, QueryBuilder } from "@mui/icons-material"

export const UsPage = () => {  

  const navigate = useNavigate();

  const renderItem = (data) =>  (    
    <BoxCarousel key={data.title} sx={{
      backgroundImage: `url(${data.image})`,
      height:'100vh',
      // backgroundPosition: 'center',
      width: '100%',
      backgroundRepeat: 'no-repeat'
    }} />
  )

  return (
    <>
      {/* Nuestra Historia */}      
      <Grid container p='35px 50px 41px' rowSpacing='20px' columnSpacing='40px' sx={{ backgroundColor: ThemePalette.US_BACKGROUND_GREEN }}>

        <Grid item xs={12} md={6} display='flex' justifyContent='center'>
          <img src='./reciclaje_chatarra.png' width='100%' style={{ borderRadius: '20px' }} />
        </Grid>
        <Grid item xs={12} md={6} component='div' display='flex' flexDirection='column' gap='20px'>
          {/* <TitleSection 
            title='Nuestra Historia'
            classname={TypeTitleSection.WHITE}
          />   */}
          <Box>
            <Typography 
              component='h2' 
              fontSize={FontSize.TITLE_SECTION} 
              color={ThemePalette.WHITE} 
              fontWeight='bold' 
              textAlign='center'
            >
              QUIENES SOMOS
            </Typography>
            <Divider sx={{ backgroundColor: ThemePalette.WHITE, width: '150px', margin: 'auto' }} />
          </Box>
          
          <Typography 
            component='p' 
            textAlign='justify' 
            fontSize={FontSize.PARAGRAPH} 
            color={ThemePalette.WHITE}
            >
              Somos una empresa dedicada a la compra de chatarra, merma, limpieza de almacenes, reciclaje de plástico, cartón, papel, saldos a nivel nacional y manejo de residuos sólidos.<br /><br />Nuestro objetivo es brindar un servicio seguro, rentable y ordenado cumpliendo los parámetros de seguridad y ambiental.
          </Typography>         
        </Grid>
      </Grid>     

      {/* <Grid container marginTop='20px'>
        <Grid item xs={6} component='div' display='flex' flexDirection='column' gap='25px' justifyContent='center'>
          <Typography component='h2' fontSize='26px' color={ThemePalette.PURPLE_LIGHT} fontWeight='bold'>CONOCE NUESTRA HISTORIA</Typography>
          <Typography component='p'>Somos una institución de salud especializada en el diagnóstico y tratamiento de trastornos del neurodesarrollo y discapacidad infantil. Tenemos 35 años de experiencia, más de 100,000 niños atendidos y 5 millones de consultas y terapias realizadas.</Typography>          
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='center'>
          <img src='/terapias.jpg' width={570} height={321} />
        </Grid>
        
      </Grid> */}

      <Box p='15px 50px 41px' display='flex' flexDirection='column' gap='30px'>
        <Typography 
          component='h2' 
          fontSize={FontSize.TITLE_SECTION} 
          color={ThemePalette.GREEN_MEDIUM} 
          fontWeight='bold' 
          textAlign='center'
        >
          Nuestra Filosofía
        </Typography>
        
        <Box display='flex' flexWrap='wrap' >
          <Box display='flex' flexDirection='column' flex={1}>
            <Box display='flex' justifyContent='center'>
              <img src='./mision_1.jpg' width={220} />
            </Box>
            
            <Box display='flex' flexDirection='column' gap='5px'>
              <Typography component='h2' fontSize={FontSize.TITLE_SECTION} color={ThemePalette.GREEN_MEDIUM} fontWeight='bold' textAlign='center'>Misión</Typography>
              <Typography component='p' textAlign='justify' fontSize={FontSize.PARAGRAPH} padding='0px 50px'>Brindar un servicio de calidad y excelencia, cumpliendo con las necesidades y expectativas de nuestros clientes proporcionandoles soluciones en el manejo de sus residuos con nuestro personal altamente capacitado</Typography>
            </Box>
          </Box>
          <Box display='flex' flexDirection='column' flex={1}>
            <Box display='flex' justifyContent='center'>
              <img src='./mision_2.jpg' width={220} height={220} />
            </Box>

            <Box display='flex' flexDirection='column' gap='5px'>
              <Typography component='h2' fontSize={FontSize.TITLE_SECTION} color={ThemePalette.GREEN_MEDIUM} fontWeight='bold' textAlign='center'>Visión</Typography>
              <Typography component='p' textAlign='justify' fontSize={FontSize.PARAGRAPH} padding='0px 50px'>Actividades de comercialización de productos reciclables, limpieza de almacenes, compra de todo tipo de saldos y mermas.</Typography>
            </Box>
          </Box>
        </Box>

      </Box>
      
      <Box p='15px 50px 41px' sx={{ backgroundColor: ThemePalette.US_BACKGROUND_GREEN }} display='flex' flexDirection='column' gap='30px'>

        <TitleSection 
          title='Nuestros Objetivos'
          classname={TypeTitleSection.PURPLE}
        />

        <Grid container rowSpacing='40px' columnSpacing='20px' justifyContent='center'>
          <Grid item md={4} xs={12} sm={6} gap='20px' display='flex' flexDirection='column' alignItems='center' >
            <QueryBuilder  fontSize='large' color='inherit' />
            <Typography 
              component='p' 
              fontSize={FontSize.PARAGRAPH} 
              color={ThemePalette.WHITE}
              textAlign='center'
            >
              Atraer a nuestroso clientes, cumpliendo con sus requisitos, aumentando su nivel de satisfacción, superando sus necesidades y expectativas con la calidad de nuestro servicios.
            </Typography>
          </Grid>
          <Grid item md={4} xs={12} sm={6} gap='20px' display='flex' flexDirection='column' alignItems='center' >
            <Forest fontSize='large' color='inherit' />
            <Typography 
            component='p' 
            fontSize={FontSize.PARAGRAPH} 
            color={ThemePalette.WHITE}
            textAlign='center'
            >
              Mejorar continuamente nuestros servicios con la ayuda de un equipo de trabajo comprometido.
            </Typography>
          </Grid>
          <Grid item md={4} xs={12} sm={6} gap='20px' alignItems='center' display='flex' flexDirection='column' >
            <CorporateFare fontSize='large' color='inherit' />
            <Typography 
            component='p' 
            fontSize={FontSize.PARAGRAPH} 
            color={ThemePalette.WHITE}
            textAlign='center'
            >
              Capacitar nuestros colaboradores, aumentando su nivel de competencia y compromiso.
            </Typography>
          </Grid>
          <Grid item md={4} xs={12} sm={6} gap='20px' alignItems='center' display='flex' flexDirection='column' >
            <CorporateFare fontSize='large' color='inherit' />
            <Typography 
            component='p' 
            fontSize={FontSize.PARAGRAPH} 
            color={ThemePalette.WHITE}
            textAlign='center'
            >
              Ser una compañía reconocida en todos los servicios
            </Typography>
          </Grid>
        </Grid>

      </Box>
      
    </>
  )
  
}
