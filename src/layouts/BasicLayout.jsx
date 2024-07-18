
import { NavBar } from '../components/NavBar/NavBar'
import { Footer } from '../components/Footer/Footer';
import { Fab, styled } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';
import Carousel from 'react-material-ui-carousel';

const fabStyle = {
  position: 'fixed',
  bottom: 16,
  right: 16,
};

const BoxCarousel = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    backgroundSize: '100% 100%',
  },
  [theme.breakpoints.up('sm')]: {
    backgroundSize: 'contain',
  }
}));

const renderItem = (data) =>  (
  <BoxCarousel key={data.title} sx={{
    backgroundImage: `url(${data.image})`,
    height: '48px',
    // height:'100vh',
    // backgroundPosition: 'center',
    width: '100%',
    backgroundRepeat: 'no-repeat',
  }} />
)

const items = [
  {
    title: 'Image 1',
    image: '/noticias-1.png'
  },
  // {
  //   title: 'Image 2',
  //   image: '/img1_noticia.jpg'
  // },
  // {
  //   title: 'Image 3',
  //   image: '/img2_noticia.jpg'
  // },
  // {
  //   title: 'Image 4',
  //   image: '/img1_noticia.jpg'
  // },
]

export const BasicLayout = () => (
  <>
    <NavBar />
    <Footer />
    <Fab aria-label='Add' sx={fabStyle} color='success' onClick={() => window.open('https://wa.me/51916502605', '_blank')}>
      <WhatsApp fontSize='large' />
    </Fab>
  </>
)
