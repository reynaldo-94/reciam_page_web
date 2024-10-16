import { Email, FacebookOutlined, Instagram, WhatsApp, YouTube } from '@mui/icons-material';
import { Box, Divider, Grid, Link, TextField, Typography, styled, useMediaQuery, useTheme } from '@mui/material';
import { GridInfoDetailFooter, GridInfoLogoFooter, GridInfoSocialFooter } from './constants';
import { FontSize, ThemePalette } from '../../theme/theme';
import { CButton } from '../Button';
import { pages, services } from '../NavBar/constants';
import { useNavigate } from 'react-router-dom';

const dataFooter = [
  {
    title: 'DONDE ESTAMOS'
    
  }
]

export const Footer = () => {

  const theme = useTheme();

  const navigate = useNavigate();

  const onlySmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
  <Box marginTop='20px' p='20px 50px' component="footer" display='flex' flexDirection='column' sx={{ backgroundColor: ThemePalette.SECTION_BACKGROUND_GREEN }} color={ThemePalette.TEXT_WHITE} gap='7px' >
    <Box display='flex' justifyContent='space-between' flexWrap='wrap' gap='10px'>
      <Box display='flex' flexDirection='column' gap='8px' flex={1}>
        <Box display='flex' flexDirection='column' gap='2px'>
          <Typography color={ThemePalette.WHITE} fontWeight='bold' >Información</Typography>
          <Divider sx={{
            bgcolor: ThemePalette.WHITE,
            width: '100px'
          }} />
        </Box>
        
        
        <Box>
          {
            pages.map((res) => {
              return !res.menu && (
                <Typography color={ThemePalette.WHITE} key={res.id}
                  onClick={() => navigate(res.path)}
                  sx={{
                    cursor: 'pointer'
                  }}
                >
                  {res.label}
                </Typography>
              )
            })
          }
        </Box>
      </Box>

      <Box display='flex' flexDirection='column' gap='10px' flex={1}>
        <Box display='flex' flexDirection='column' gap='6px'>
          
          <Box display='flex' flexDirection='column' gap='2px'>
            <Typography color={ThemePalette.WHITE} fontWeight='bold' >Oficina Principal</Typography>
            <Divider sx={{
              bgcolor: ThemePalette.WHITE,
              width: '150px'
            }} />
          </Box>

          <Box>
            <Typography color={ThemePalette.WHITE}>Marquez de Corpac Mz A Lote 1 Chorrillos</Typography>
          </Box>
        </Box>
        <Box display='flex' flexDirection='column' color={ThemePalette.WHITE}>
          <Box display='flex' flexDirection='column' gap='2px'>
            <Typography color={ThemePalette.WHITE} fontWeight='bold' >Email</Typography>
            <Divider sx={{
              bgcolor: ThemePalette.WHITE,
              width: '50px'
            }} />
          </Box>
          <Box display='flex' gap='8px'>
            <Email />
            <Typography>reciamsac20@gmail.com</Typography>
          </Box>
        </Box>
      </Box>
      <Box display='flex' flexDirection='column' gap='10px' flex={1} alignItems={onlySmallScreen ? 'start' : 'end'}>
        <Box display='flex' gap='5px'>
          <WhatsApp fontSize='large' sx={{ color: '#fff' }} />
          <Box display='flex' flexDirection='column' color={ThemePalette.WHITE}>
            <Typography>Escríbenos ahora</Typography>
            <Typography textAlign='center' onClick={() => window.open('https://wa.me/51916502605', '_blank')} sx={{
              cursor: 'pointer'
            }} >931227372</Typography>
          </Box>
        </Box>
        {/* <Box display='flex' justifyContent='center'>
          <CButton variant='contained' sx={{  }}>
            Donaciones            
          </CButton>
        </Box> */}
        
      </Box>
    </Box>
    <Divider sx={{ borderColor: ThemePalette.WHITE }} />
    <Box display='flex' alignItems='center' justifyContent='center'>
      <Typography pt='5px'  color={ThemePalette.WHITE}>Copyrights 2024</Typography>
    </Box>
  </Box>
  )

}