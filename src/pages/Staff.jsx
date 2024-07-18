import React from 'react'
import { Box, Card, CardContent, CardMedia, Divider, Grid, ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material'
import { FontSize, ThemePalette } from '../theme/theme'
import { TitleSection } from '../components/TitleSection/TitleSection';
import { TypeTitleSection } from '../constants/TitleSection.constant';

const itemData = [
  {
    id: '1',
    img: '/staff1.jpg',
    title: 'Julia Salas',
    profession: 'Terapista',
  },
  {
    id: '2',
    img: '/staff2.jpg',
    title: 'Maria Sotomayor',
    profession: 'Pisocología',
  },
  {
    id: '3',
    img: '/staff3.jpg',
    title: 'Renata Olivares',
    profession: 'Pisocología',
  },
  {
    id: '4',
    img: '/staff1.jpg',
    title: 'Melany Jimenez',
    profession: 'Doctora',
  },
  {
    id: '5',
    img: '/staff2.jpg',
    title: 'Fabiola Quispe',
    profession: 'Asistenta Social',
  },
  {
    id: '6',
    img: '/staff3.jpg',
    title: 'Sofía Solis',
    profession: 'Pisocología',
  },
  {
    id: '7',
    img: '/staff1.jpg',
    title: 'Martha Flores',
    profession: 'Terapista',
  },
];

const imgListSX = {
  // border: `1px solid ${ThemePalette.PURPLE_LIGHT}`, 
  // borderRadius: '30px',
  '&:hover': {
    boxShadow: 8,
  }
};

export const Staff = () => {
  return (
    <>
      {/* <Grid container marginTop='20px' p='30px 50px' columnSpacing={10}>
        <Grid item xs={12} md={6}>
          <Grid container rowSpacing={4}>            
            <Grid item xs={12}>
              <Typography component='h2' fontSize='26px' color={ThemePalette.PURPLE_LIGHT} fontWeight='bold' textAlign='center'>CONTAMOS CON LOS MEJORES TERAPEUTAS DE LIMA</Typography>            
            </Grid>  
            <Grid item xs={12} >
              <Typography component='p' textAlign='justify'>
                En Oftalmosalud siempre ha sido nuestra prioridad mantener el estándar más alto empezando por el Staff Médico, para brindarte diagnósticos: Rápidos, Seguros y con Sustento Científico.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita placeat qui facilis recusandae delectus, iste dolores perferendis quo nesciunt aliquid vero sed doloribus a modi est accusamus obcaecati cum dolore!
              </Typography>        
            </Grid>          
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src='/terapias.jpg'  width='100%' style={{ height: '80vh' }} />
        </Grid>
      </Grid> */}
      <Grid container marginTop='0px' p='10px 50px' display='flex' flexDirection='column' gap='20px' spacing='20px'>
        <Grid item xs={12}>
          {/* <Typography component='h2' fontSize='26px' color={ThemePalette.PURPLE_LIGHT} fontWeight='bold' textAlign='center'>STAFF MÉDICOS</Typography>   */}
            
            <Box display='flex' gap='20px' flexDirection='column'>
              {/* <TitleSection 
                title='Staff Médicos'
                classname={TypeTitleSection.WHITE}
              /> */}
              <Box>
                <Typography 
                  component='h2' 
                  fontSize={FontSize.TITLE_SECTION} 
                  color={ThemePalette.PURPLE_LIGHT} 
                  fontWeight='bold' 
                  textAlign='center'
                >
                  Staff Médicos
                </Typography>
                <Divider sx={{ backgroundColor: ThemePalette.PURPLE_LIGHT, width: '100px', margin: 'auto' }} />
              </Box>
              <Typography component='div' color={ThemePalette.BLACK_MEDIUM} fontSize={FontSize.PARAGRAPH}>
                Contamos con un equipo, Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, veniam aliquid ipsam error magni vel, ratione exercitationem quisquam, delectus recusandae illo vero. Dolores deleniti recusandae corporis libero reiciendis ipsum sit:
              </Typography>
            </Box>
            
        </Grid>
        <Grid xs={12}>
          <Grid container component="div" display="flex" spacing='40px' justifyContent='center'>
            {itemData.map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.id}>
                <img style={{ borderRadius: '30px' }} src={item.img} alt={item.title} width='100%'/>
                <Box>
                  <Typography component="div" textAlign='center' fontWeight='bold' color={ThemePalette.PURPLE_LIGHT} fontSize={FontSize.TITLE_PARAGRAPH}>
                    {item.title}
                  </Typography>
                  <Typography gutterBottom component="div" textAlign='center' color={ThemePalette.BLACK_MEDIUM} fontSize={FontSize.PROFESSION_IMAGE_STAFF}>
                    {item.profession}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          

          {/* <ImageList cols={4} gap={30} >
            {itemData.map((item) => (
              <ImageListItem 
                key={item.img} 
                sx={imgListSX}
              >
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                  style={{ height: '100%' }}
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={<span style={{ color: ThemePalette.BLACK_MEDIUM, fontSize: FontSize.PROFESSION_IMAGE_STAFF }}>{item.profession}</span>}
                  position="below"
                  sx={{ textAlign: 'center', color: ThemePalette.PURPLE_LIGHT, fontWeight: 'bold', fontSize: FontSize.TITLE_PARAGRAPH  }}
                  
                />
              </ImageListItem>
            ))}
          </ImageList> */}
          {/* {itemData.map((res) => (
            <Card sx={{ backgroundColor: ThemePalette.WHITE, boxShadow: 'none' }} >
              <CardMedia
                component="img"
                alt="green iguana"
                
                image={res.img}
                // sx={{ borderRadius: '30px' }}
              />
              <CardContent sx={{ p: '0px', pt: '12px' }}>
                <Typography gutterBottom component="div" textAlign='center' color={ThemePalette.PURPLE_LIGHT} fontSize={FontSize.TITLE_PARAGRAPH}>
                  {res.title}
                </Typography>
                <Typography component='p' color={ThemePalette.BLACK_MEDIUM} textAlign='center' fontSize={FontSize.PARAGRAPH}>
                  {res.profession}
                </Typography>
              </CardContent>
            </Card>
          ))} */}
          
        </Grid>
      </Grid>
      
    </>
  )
}
