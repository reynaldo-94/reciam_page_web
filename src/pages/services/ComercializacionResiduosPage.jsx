import { Box, Divider, Grid, Typography } from '@mui/material'
import { FontSize, ThemePalette } from '../../theme/theme'

export const ComercializacionResiduosPage = () => {
  return (
    <>
      <Grid container p='35px 50px 41px' rowSpacing='20px' columnSpacing='40px' sx={{ backgroundColor: ThemePalette.WHITE }}>

        <Grid item xs={12} md={6} display='flex' justifyContent='center'>
          <img src='./comer_residuos.png' width='100%' style={{ borderRadius: '20px' }} />
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
              color={ThemePalette.GREEN_MEDIUM} 
              fontWeight='bold' 
              textAlign='center'
            >
              Comercialización de residuos
            </Typography>
            <Divider sx={{ backgroundColor: ThemePalette.GREEN_MEDIUM, width: '150px', margin: 'auto' }} />
          </Box>
          
          <Typography 
            component='p' 
            textAlign='justify' 
            fontSize={FontSize.PARAGRAPH} 
            color={ThemePalette.BLACK_MEDIUM}
            >
              Nos caracterizamos por ofrecer los servicios con los más altos estándares de calidad, con los profesionales mejor preparados del país, certificados y con una dilatada experiencia en el Gestión y transporte de residuos sólidos y líquidos, servicio de  saneamiento ambienta
          </Typography>         
        </Grid>
      </Grid>

      <Box display='flex' p='15px 50px 41px' flexDirection='column'  bgcolor={ThemePalette.GREEN_MEDIUM} gap='20px'>

        <Box>
          <Typography 
            component='h2' 
            fontSize={FontSize.TITLE_SECTION} 
            color={ThemePalette.WHITE} 
            fontWeight='bold' 
            textAlign='center'
          >
            Tipo de Residuos
          </Typography>
          <Divider sx={{ backgroundColor: ThemePalette.WHITE, width: '150px', margin: 'auto' }} />
        </Box>
        
        <Box display='flex' justifyContent='space-around' flexWrap='wrap' gap='10px'>
          <Box display='flex' flexDirection='column' bgcolor={ThemePalette.WHITE} borderRadius='10px' p='20px'>
            <img src='./residuo_nopeligro.png' style={{ margin: 'auto' }} width='150px' />
            <Typography 
              component='h2' 
              fontSize={FontSize.TITLE_SECTION} 
              color={ThemePalette.GREEN_MEDIUM} 
              fontWeight='bold' 
              textAlign='center'
            >
              Residuos peligrosos
            </Typography>
            <ul>
              <li>Papel</li>
              <li>Cartón</li>
              <li>Cilindro metálicos</li>
              <li>Envases de plástico</li>
              <li>Bolsas de papel</li>
              <li>Plástico transporte limpio</li>
              <li>Saco o costalesde rafia</li>
              <li>Madera (parihuela, tablas, etc)</li>
            </ul>
          </Box>
          <Box display='flex' flexDirection='column' bgcolor={ThemePalette.WHITE} borderRadius='10px' p='20px'>
            <img src='./residuo_peligro.png' style={{ margin: 'auto' }} width='150px' />
            <Typography 
              component='h2' 
              fontSize={FontSize.TITLE_SECTION} 
              color={ThemePalette.GREEN_MEDIUM} 
              fontWeight='bold' 
              textAlign='center'
            >
              Residuos no peligrosos
            </Typography>
            <ul>
              <li>Papel</li>
              <li>Cartón</li>
              <li>Cilindro metálicos</li>
              <li>Envases de plástico</li>
              <li>Bolsas de papel</li>
              <li>Plástico transporte limpio</li>
              <li>Saco o costalesde rafia</li>
              <li>Madera (parihuela, tablas, etc)</li>
            </ul>
          </Box>
        </Box>
        
      </Box>
    </>
  )
}
