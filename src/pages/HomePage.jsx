import { useNavigate } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel'
import { Box, Card, CardActions, CardContent, CardMedia, Divider, Grid, Typography, styled, useMediaQuery, useTheme } from '@mui/material'
import { motion } from 'framer-motion';
import { FontSize, ThemePalette } from '../theme/theme'
import { imgsAlianzas, items, listExperiences, listServices } from './constants'
import { CButton } from '../components/Button';
import { TitleSection } from '../components/TitleSection/TitleSection';
import { TypeTitleSection } from '../constants/TitleSection.constant';
import { QueryBuilder, Forest, CorporateFare, Diversity1Outlined, Diversity1, Diversity3, InterpreterMode, LocationCity } from '@mui/icons-material';

export const BoxCarousel = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    backgroundSize: '100% 100%',
  },
  [theme.breakpoints.up('sm')]: {
    backgroundSize: 'contain',
  }
}));

const BoxExperiencesHome = styled(Carousel)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    height: '320px'
  },
  [theme.breakpoints.up('sm')]: {
    height: '500px'
  }
}));

export const HomePage = () =>  {

  const navigate = useNavigate();
  const theme = useTheme();

  const onlySmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const heightCarousel = onlySmallScreen ? '205px' : '500px'
  
  const renderItem = (data) =>  (
    <BoxCarousel key={data.title} sx={{
      backgroundImage: `url(${data.image})`,
      height: onlySmallScreen ? '210px' : '100vh',
      // backgroundPosition: 'center',
      width: '100%',
      backgroundRepeat: 'round'
    }} />
  )
  
  return (
    <>
      <Carousel 
        // sx={{
        //   height: onlySmallScreen ? '285px' : '555px',
        // }}
        height={heightCarousel}
        sx={{
          marginTop: '13px'
        }}
      >
        {
          items.map( (item) => renderItem(item) )
        }
      </Carousel>

      {/* Por que Elegirnos */}
      <Box p='15px 50px 41px' display='flex' flexDirection='column' gap='30px'>

        <Box>
          <Typography 
            component='h2' 
            fontSize={FontSize.TITLE_SECTION} 
            color={ThemePalette.GREEN_MEDIUM} 
            fontWeight='bold'
            textAlign='center'
          >
            ¿Por qué elejirnos?
          </Typography>
          <Divider sx={{ backgroundColor: ThemePalette.GREEN_MEDIUM, width: '140px', margin: 'auto' }} />
        </Box>
        <Grid container rowSpacing='40px' columnSpacing='20px'>
          <Grid item md={4} xs={12} sm={6} gap='20px' display='flex' flexDirection='column' alignItems='center' >
            <QueryBuilder  fontSize='large' color='success' />
            <Typography 
              component='p' 
              fontSize={FontSize.PARAGRAPH} 
              color={ThemePalette.BLACK_MEDIUM}
              textAlign='center'
            >
              Puntualidad y eficaciencia en la recolección, transporte y disposición final de los residuos sólidos
            </Typography>
          </Grid>
          <Grid item md={4} xs={12} sm={6} gap='20px' display='flex' flexDirection='column' alignItems='center' >
            <Forest fontSize='large' color='success' />
            <Typography 
            component='p' 
            fontSize={FontSize.PARAGRAPH} 
            color={ThemePalette.BLACK_MEDIUM}
            textAlign='center'
            >
              Compromiso con la sostenibilidad Y el medio ambiente.
            </Typography>
          </Grid>
          <Grid item md={4} xs={12} sm={6} gap='20px' alignItems='center' display='flex' flexDirection='column' >
            <CorporateFare fontSize='large' color='success' />
            <Typography 
            component='p' 
            fontSize={FontSize.PARAGRAPH} 
            color={ThemePalette.BLACK_MEDIUM}
            textAlign='center'
            >
              Innovación, tecnológica y procesos innovadores en la gestión de residuos sólidos
            </Typography>
          </Grid>
          <Grid item md={4} xs={12} sm={6} gap='20px' alignItems='center' display='flex' flexDirection='column' >
            <Diversity3 fontSize='large' color='success' />
            <Typography 
            component='p' 
            fontSize={FontSize.PARAGRAPH} 
            color={ThemePalette.BLACK_MEDIUM}
            textAlign='center'
            >
              Servicios personalizados y adaptados a las necesidades específicas de cada empresa
            </Typography>
          </Grid>
          <Grid item md={4} xs={12} sm={6} gap='20px' alignItems='center' display='flex' flexDirection='column' >      
            <InterpreterMode fontSize='large' color='success' />
            <Typography 
            component='p' 
            fontSize={FontSize.PARAGRAPH} 
            color={ThemePalette.BLACK_MEDIUM}
            textAlign='center'
            >
              Comunicación constante sobre el proceso de gestión de sus residuos brindando reportes periódicos sobre su impacto ambiental.
            </Typography>
          </Grid>
          <Grid item md={4} xs={12} sm={6} gap='20px' alignItems='center' display='flex' flexDirection='column' >
            <LocationCity fontSize='large' color='success' />
            <Typography 
            component='p' 
            fontSize={FontSize.PARAGRAPH} 
            color={ThemePalette.BLACK_MEDIUM}
            textAlign='center'
            >
              Empresa con registro autoritativo para el manejo de residuos sólidos peligrosos y no peligrosos
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Servicios */}
      <Box p='15px 50px 41px' component="div" flexDirection="column" display="flex" gap="25px" bgcolor={ThemePalette.SECTION_BACKGROUND_GREEN}>
        
        <TitleSection 
          title='Nuestros servicios'
          classname={TypeTitleSection.PURPLE}
        />

        <Grid container spacing='20px'>
          {
            listServices.map((res) => (
              <Grid item md={4} xs={12} sm={6} key={res.id} >
                <Card sx={{ backgroundColor: ThemePalette.SECTION_BACKGROUND_GREEN, boxShadow: 'none' }} >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    image={res.image}
                    sx={{ borderRadius: '30px', width: '100%', height: '270px' }}
                  />
                  <CardContent sx={{ p: '0px', pt: '12px' }}>
                    <Typography gutterBottom component="div" textAlign='center' color={ThemePalette.WHITE} fontSize={FontSize.TITLE_PARAGRAPH}>
                      {res.title}
                    </Typography>
                    {/* <Typography component='p' color={ThemePalette.WHITE} textAlign='center' fontSize={FontSize.PARAGRAPH}>
                      {res.detail}
                    </Typography> */}
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'center', p: '0px', pt: '15px'}}>
                    <CButton 
                      size="small" 
                      variant='contained' 
                      color='info' 
                      sx={{ p: '10px 25px' }} 
                      onClick={() => navigate(res.path)}
                      backgroundColor={ThemePalette.SKYBLUE_MEDIUM}
                    >Más información</CButton>
                  </CardActions>
                </Card>
              </Grid>
            ))
          }
        </Grid>
        
        {/* <BoxExperiences component="div" display="flex" gap="20px" justifyContent="space-between" >
          {
            listServices.map((res) => (
              <motion.div
                initial={{
                  opacity: 0,
                  // if odd index card,slide from right instead of left
                  x: (res.id - 1) % 2 === 0 ? 50 : -50
                }}
                whileInView={{
                  opacity: 1,
                  x: 0, // Slide in to its original position
                  transition: {
                    duration: 1 // Animation duration
                  }
                }}
                viewport={{ once: true }}
                key={res.id}
                style={{
                  display: 'flex',
                  flexDirection: 
                }}
              >
                <Card sx={{ backgroundColor: ThemePalette.PURPLE_LIGHT_CARD, boxShadow: 'none' }} >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    image={res.image}
                    sx={{ borderRadius: '30px', width: '300px' }}
                  />
                  <CardContent sx={{ p: '0px', pt: '12px' }}>
                    <Typography gutterBottom component="div" textAlign='center' color={ThemePalette.WHITE} fontSize={FontSize.TITLE_PARAGRAPH}>
                      {res.title}
                    </Typography>
                    <Typography component='p' color={ThemePalette.WHITE} textAlign='center' fontSize={FontSize.PARAGRAPH}>
                      {res.detail}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'center', p: '0px', pt: '15px'}}>
                    <CButton 
                      size="small" 
                      variant='contained' 
                      color='info' 
                      sx={{ p: '10px 25px' }} 
                      onClick={() => navigate('/contactanos')}
                      backgroundColor={ThemePalette.SKYBLUE_MEDIUM}
                    >Más información</CButton>
                  </CardActions>
                </Card>
              </motion.div>
            ))
          }
        </BoxExperiences> */}
      </Box>

      

      {/* Clients */}
      {/* <Box p='15px 50px 41px' component="div" flexDirection="column" display="flex" gap="25px" bgcolor={ThemePalette.WHITE}>
        
        <TitleSection 
          title='Nuestros Clientes'
          classname={TypeTitleSection.WHITE}
        />

        <Grid container gap='10px' justifyContent='center'>
          <Grid item md={3} xs={12} sm={6}  p='10px' 
            display='flex' alignItems='center' justifyContent='center' borderRadius='15px'>
            <img src='/logo_oechsle.png' width='200px' />
          </Grid>
          <Grid item md={3} xs={12} sm={6}  p='10px' 
            display='flex' alignItems='center' justifyContent='center' borderRadius='15px'>
            <img src='/logo_plazavea.png' width='200px' />
          </Grid>
          <Grid item md={3} xs={12} sm={6}  p='10px' 
            display='flex' alignItems='center' justifyContent='center' borderRadius='15px'>
            <img src='/logo_upc.png' width='200px' />
          </Grid>
          <Grid item md={3} xs={12} sm={6}  p='10px' 
            display='flex' alignItems='center' justifyContent='center' borderRadius='15px'>
            <img src='/logo_falabella.png' width='200px' />
          </Grid>

        </Grid>

      </Box> */}

      <Box p='15px 50px' component="div" display="flex" flexDirection="column" gap="20px">
        <TitleSection 
          title='Alianzas y Convenios'
          classname={TypeTitleSection.WHITE}
        />
        
        
        <Typography component="p" textAlign='justify'>
          Gracias a nuestros <strong>convenios con universidades e instituciones,</strong>
          podemos garantizar una mayor viabilidad en la realización de <strong>prácticas
          profesionales y especializaciones</strong> enfocadas a mejorar su formación,
          brindando terapias actualizadas y efectivas. Asi mismo nuestras alianzas
          con otras instituciones nos permite una adecuada derivación de nuestros
          pacientes.
        </Typography>
        <Box display="flex" gap="30px" justifyContent="center" flexWrap='wrap'>
          {
            imgsAlianzas.map((alianza) => (
              <Box key={alianza.title} component="div" display="flex" flexDirection="column" gap="20px" width="150px" height='130px'>
                <img src={alianza.image} alt={alianza.title} height="120px"/>
                <Typography textAlign='center' fontWeight='bold'>{alianza.title}</Typography>
              </Box>
            ) )
          }
        </Box>        
      </Box>

      {/* Consejos o Recomendaciones */}
      {/* <Grid container p='15px 50px 41px' spacing='30px'>
        
        <Grid item xs={12} md={6} display='flex' justifyContent='center'>
          <img src='/terapias.jpg' width='100%' />
        </Grid>
        <Grid item xs={12} md={6} component='div' display='flex' flexDirection='column' gap='20px'>
          
          <Box>
            <Typography 
              component='h2' 
              fontSize={FontSize.TITLE_SECTION} 
              color={ThemePalette.GREEN_MEDIUM} 
              fontWeight='bold' 
              textAlign='center'
            >
              ¿Por qué elejirnos?
            </Typography>
            <Divider sx={{ backgroundColor: ThemePalette.WHITE, width: '150px', margin: 'auto' }} />
          </Box>
          
          <Typography 
            component='p' 
            textAlign='justify' 
            fontSize={FontSize.PARAGRAPH} 
            color={ThemePalette.BLACK_MEDIUM}
            >
              <ul>
                <li>Porque presentamos un servicio integral, para que el cliente no tenga que preocuparse.</li>
                <li>Por nuestra efectividad, aseguramos resultados.</li>
                <li>Porque somos profesionales y trabajamos para asegurar el éxito de nuestros clientes.</li>
                <li>Porque aseguramos el cumplimiento de los plazos establecidos.</li>
                <li>Porque trabajamos con transparencia, confianza y empatía.</li>
                <li>Porque su empresa y su proyecto son importantes para su nosotros.</li>
                <li>Porque somos flexibles, nos adaptamos a las necesidades de su empresa.</li>
                <li>Porque nos sentimos parte de su empresa.</li>
                <li>Por nuestra efectividad, aseguramos resultados.</li>
              </ul>
          </Typography>         
        </Grid>


      </Grid> */}
    </>
  )
  
}
