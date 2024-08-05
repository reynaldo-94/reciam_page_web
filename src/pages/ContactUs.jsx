import { Box, Button, Card, CardActions, CardContent, Divider, Grid, TextField, Typography, styled, useMediaQuery, useTheme } from '@mui/material'
import { FontSize, ThemePalette } from '../theme/theme'
import { AccessTime, Edit, LocationOn, MailOutline, PhoneInTalk, Send } from '@mui/icons-material';
import { CButton } from '../components/Button';
import { useForm } from 'react-hook-form';
import emailjs from "@emailjs/browser";
import { useState } from 'react';

// const ColorButton = styled(Button)(({ theme }) => ({
//   color: theme.palette.getContrastText(ThemePalette.PURPLE_LIGHT),
//   backgroundColor: ThemePalette.PURPLE_LIGHT,
//   '&:hover': {
//     backgroundColor: ThemePalette.PURPLE_LIGHT,
//   },
// }));

const defaultValues = {
  name: "",
  lastname: "",
  telephone: "",
  email: "",
  message: "",
};

const msgRequired = "Este campo es requerido";

export const ContactUs = () => {
  
  console.log('Contact us')

  const [isLoading, setIsLoading] = useState(false);
  const [isSendEmail, setIsSendEmail] = useState(false);
  const [errorSendEmail, setErrorSendEmail] = useState(false);

  const theme = useTheme();
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ defaultValues });

  const onSubmit = (data, e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('data', data)
    console.log('e.target', e.target)
    emailjs
      .sendForm(
        "gmail",
        "template_x36aq78",
        e.target,
        {
          publicKey: "5yhrWv1mNfLgSDV8H"
        }
      )
      .then(
        (result) => {
          console.log('ok', result)
          setIsLoading(false);
          setIsSendEmail(true);
          reset(defaultValues);
        },
        (error) => {
          console.log('error', error)
          
          setIsLoading(false);
          setErrorSendEmail(true);
          reset(defaultValues);
        }
      );
  }

  

  return (
    <Box marginTop='20px' p='10px 50px' display='flex' flexDirection='column' gap='50px'>
      <Box>
        {/* <Typography component='h2' fontSize='26px' color={ThemePalette.PURPLE_LIGHT} fontWeight='bold' textAlign='center'>Contacto Administrativo</Typography> */}
      
        <Box display='flex' flexDirection='column' gap='20px'>
          <Box>
            <Typography 
              component='h2' 
              fontSize={FontSize.TITLE_SECTION} 
              color={ThemePalette.GREEN_MEDIUM} 
              fontWeight='bold' 
              textAlign='center'
            >
              Contacto Administrativo
            </Typography>
            <Divider sx={{ backgroundColor: ThemePalette.GREEN_MEDIUM, width: '190px', margin: 'auto' }} />
          </Box>
          
        </Box>
          
        <Box pt='30px' display='flex' gap='50px' flexWrap='wrap'>

          <Box display='flex' flex={1} justifyContent='center'>
            <img src='./logo_form.png' width='400px' />
          </Box>
          <Box flex={1}>
            <Typography component='p' mb='20px'>Cuéntanos en el siguiente formulario como te podemos ayudar</Typography>
            <Grid container component='form' spacing='20px' onSubmit={handleSubmit(onSubmit)}>
              <Grid item xs={12} md={6}>
                <TextField 
                  id="outlined-basic" 
                  label="Nombres" 
                  variant="outlined" 
                  fullWidth 
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <Typography component='span' color={ThemePalette.RED} fontSize={FontSize.FORM_ERROR}>{msgRequired}</Typography>
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField 
                  id="outlined-basic" 
                  label="Apellidos" 
                  variant="outlined" 
                  fullWidth 
                  {...register("lastname", { required: true })}
                />
                {errors.lastname && (
                  <Typography component='span' color={ThemePalette.RED} fontSize={FontSize.FORM_ERROR}>{msgRequired}</Typography>
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField 
                  id="outlined-basic" 
                  label="Teléfono o Celular" 
                  variant="outlined" 
                  fullWidth
                  {...register("telephone", { required: true })}
                />
                {errors.phone && (
                  <Typography component='span' color={ThemePalette.RED} fontSize={FontSize.FORM_ERROR}>{msgRequired}</Typography>
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField 
                  id="outlined-basic" 
                  label="Correo electrónico" 
                  variant="outlined" 
                  type='email'
                  fullWidth
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <Typography component='span' color={ThemePalette.RED} fontSize={FontSize.FORM_ERROR}>{msgRequired}</Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-multiline-static"
                  label="Mensaje"
                  multiline
                  rows={4}
                  fullWidth
                  {...register("message", { required: true })}
                />
                {errors.message && (
                  <Typography component='span' color={ThemePalette.RED} fontSize={FontSize.FORM_ERROR}>{msgRequired}</Typography>
                )}
              </Grid>
              <Grid item xs={12} textAlign='center'>
                <CButton
                  startIcon={<Send />} 
                  variant='contained'
                  type='submit'
                  disabled={isLoading ? true : false}
                >
                  {isLoading ? "Cargando..." : "Enviar"}
                </CButton>
              </Grid>
              {
                isSendEmail && (
                  <Grid item xs={12} textAlign='justify'>
                    <Typography component="p">
                      Gracias por contactarnos, en unos momentos nos estaremos comunicando con usted
                    </Typography>
                  </Grid>
                )
              }
              {
                errorSendEmail && (
                  <Grid item xs={12} textAlign='justify'>
                    <Typography component="p">
                      En estos momentos no se puede enviar el email, por favor intente
                      nuevamente o contactenos a 975703863
                    </Typography>
                  </Grid>
                )
              }
              
            </Grid>
          </Box>
          
        </Box>
      </Box>
      <Box>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.73250623452878!2d-77.02306830166974!3d-12.199438808764658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b742c4a54653%3A0xf0b601e1f88e464!2sCapricornio!5e0!3m2!1ses-419!2spe!4v1718145153941!5m2!1ses-419!2spe" width='100%' height="450" style={{ border: '0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </Box>
      
    </Box>
  )
}
