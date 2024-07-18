import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { FontSize, ThemePalette } from '../../theme/theme'

const listSectors = [
  {
    id: 'sec_1',
    title: 'Sector Aduanas',
    img: '/sector-aduana.jpeg',
    listDestruction: [
      {
        id: 'dest_1',
        name: 'Destrucción de producto no conformes'
      },
      {
        id: 'dest_2',
        name: 'Destrucción de producto no aprobado'
      }
    ]
  },
  {
    id: 'sec_2',
    title: 'Sector Agroalimentario',
    img: '/sector-agroali.jpg',
    listDestruction: [
      {
        id: 'dest_1',
        name: 'Destrucción de alimentos'
      },
      {
        id: 'dest_2',
        name: 'Destrucción de bebidas'
      },
      {
        id: 'dest_3',
        name: 'Destrucción de frutas y verduras'
      }
    ]
  },
  {
    id: 'sec_3',
    title: 'Sector Cosmético',
    img: '/sector-cosmetico.jpg',
    listDestruction: [
      {
        id: 'dest_1',
        name: 'Destrucción de colonias'
      },
      {
        id: 'dest_2',
        name: 'Destrucción de jabones'
      },
      {
        id: 'dest_3',
        name: 'Destrucción de cremas'
      },
    ]
  },
  {
    id: 'sec_4',
    title: 'Administración Pública',
    img: '/sector-publico.jpg',
    listDestruction: [
      {
        id: 'dest_1',
        name: 'Destrucción de documentación'
      }
    ]
  },
  {
    id: 'sec_5',
    title: 'Sector de Comunicaciones',
    img: '/sector-comunicacion.jpg',
    listDestruction: [
      {
        id: 'dest_1',
        name: 'Destrucción de producto no conforme'
      },
      {
        id: 'dest_2',
        img: '/sector-comunicacion',
        name: 'Destrucción de mercadería dañada'
      }
    ]
  },
  {
    id: 'sec_6',
    img: '/sector-publico.jpg',
    title: 'Administración Pública',
    listDestruction: [
      {
        id: 'dest_1',
        name: 'Destrucción de documentación'
      }
    ]
  },
]

export const DestruccionResiduosPage = () => {
  return (
    <>
      <Grid container p='35px 50px 41px' rowSpacing='20px' columnSpacing='40px' sx={{ backgroundColor: ThemePalette.WHITE }}>

        
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
              Destrucción de Residuos Sólidos
            </Typography>
            <Divider sx={{ backgroundColor: ThemePalette.GREEN_MEDIUM, width: '150px', margin: 'auto' }} />
          </Box>
          
          <Typography 
            component='p' 
            textAlign='justify' 
            fontSize={FontSize.PARAGRAPH} 
            color={ThemePalette.BLACK_MEDIUM}
            >
              Muchas empresas se encuentran con un producto que esta contaminado, que se ha fabricado de manera incorrecta, que se ha caducado o que esta obsoleto. Puede que sea confidencial o que esté en mal estado.
          </Typography>         
        </Grid>
        <Grid item xs={12} md={6} display='flex' justifyContent='center'>
          <img src='/servicio_transporte_disposicion.png' width='100%' style={{ borderRadius: '20px' }} />
        </Grid>
      </Grid>

      <Box display='flex' p='15px 50px 41px' flexDirection='column'  bgcolor={ThemePalette.GREEN_MEDIUM} gap='30px'>

        <Box>
          <Typography 
            component='h2' 
            fontSize={FontSize.TITLE_SECTION} 
            color={ThemePalette.WHITE} 
            fontWeight='bold' 
            textAlign='center'
          >
            Tipo de Sectores
          </Typography>
          <Divider sx={{ backgroundColor: ThemePalette.WHITE, width: '150px', margin: 'auto' }} />
        </Box>

        <Box bgcolor={ThemePalette.GREEN_MEDIUM} display='flex' gap='30px' flexWrap='wrap' justifyContent='space-between'>
          {
            listSectors.map((res) => (
              <Box key={res.id} display='flex' flexDirection='column' pb='10px' bgcolor={ ThemePalette.WHITE } borderRadius='10px'>
                <img src={res.img} width='350px' height='250px'/>
                <Box display='flex' flexDirection='column' padding='10px' gap='10px'>
                  <Typography 
                    component='h2' 
                    fontSize={FontSize.TITLE_SECTION} 
                    color={ThemePalette.GREEN_MEDIUM} 
                    fontWeight='bold' 
                    textAlign='center'
                  >
                    {res.title}
                  </Typography>
                  <Box>
                    {
                      res.listDestruction.map((dest) => (
                        <Typography 
                          component='p'  
                          fontSize={FontSize.PARAGRAPH} 
                          color={ThemePalette.BLACK_MEDIUM}
                          >
                            - { dest.name }
                        </Typography>   
                      ))
                    }
                  </Box>
                </Box>
                
              </Box>
            ))
          }
        </Box>
      </Box>
    </>
  )
}
