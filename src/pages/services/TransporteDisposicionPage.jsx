import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { FontSize, ThemePalette } from '../../theme/theme'

export const TransporteDisposicionPage = () => {
  return (
    <>
      <Grid container p='35px 50px 41px' rowSpacing='20px' columnSpacing='40px' sx={{ backgroundColor: ThemePalette.WHITE }}>

        <Grid item xs={12} md={6} display='flex' justifyContent='center'>
          <img src='/servicio_transporte_disposicion.png' width='100%' style={{ borderRadius: '20px' }} />
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
              Servicio de transporte a disposición final
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
    </>
  )
}
