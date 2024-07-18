import { FacebookOutlined, Instagram, YouTube } from '@mui/icons-material';
import { Grid, Link, Typography, styled } from '@mui/material';
import { GridInfoDetailFooter, GridInfoLogoFooter, GridInfoSocialFooter } from './constants';
import { ThemePalette } from '../../theme/theme';

export const Footer = () => (
  <Grid container marginTop='20px' p='20px 50px' component="footer" bgcolor={ThemePalette.PURPLE_LIGHT} rowSpacing={2} color={ThemePalette.WHITE}>        
    <GridInfoLogoFooter item xs={12} md={2}>
      <img src='/logo-text-short.png' height={48} />
    </GridInfoLogoFooter>

    <GridInfoDetailFooter item xs={12} md={6} component="div" flexDirection="column" gap="3px" pl={20}>
      <Typography>Escribenos a</Typography>
      <Typography>info@centrocrecemos.com</Typography>
      <Typography>+51 957064401</Typography>
      <Typography>Lima, Perú</Typography>
    </GridInfoDetailFooter>

    <GridInfoSocialFooter item xs={12} md={4} component="div" display="flex" gap="10px">
      <Link href="https://www.facebook.com/CentrodeTerapiasCrecemos" rel="noopener" color={ThemePalette.WHITE}>
        <FacebookOutlined fontSize='large'  />
      </Link>
      <Link href="https://www.instagram.com/centro_crecemos" rel="noreferrer" color={ThemePalette.WHITE}>
        <Instagram fontSize='large' />
      </Link>
      <Link href="https://www.youtube.com/@centrodeterapiacrecemos677" rel="noreferrer" color={ThemePalette.WHITE}>
        <YouTube fontSize='large' />
      </Link>
    </GridInfoSocialFooter>        
  </Grid>
)