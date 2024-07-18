import { Button as ButtonMui, styled } from '@mui/material'
import { ThemePalette } from '../theme/theme';
import { motion } from 'framer-motion';

const ColorButton = styled(ButtonMui)(({ backgroundcolorparam }) => {
  return (
    ({
      backgroundColor: backgroundcolorparam,
      '&:hover': {
        // backgroundColor: ThemePalette.PURPLE_LIGHT,
        backgroundColor: backgroundcolorparam,
      },
    })
  )})
;

export const CButton = ({
  variant = 'text',
  onClick = () => {},
  sx={},
  children = null,
  endIcon = null,
  startIcon = null,
  color='info',
  backgroundColor = ThemePalette.BUTTON_NAVBAR,
  sxDiv = {},
  type='button',
  disabled = false
}) => {
  return (
    variant === 'contained' ? (
      // <motion.div style={sxDiv}>
      <ColorButton variant={variant} onClick={onClick} sx={sx} startIcon={startIcon} endIcon={endIcon} color={color} backgroundcolorparam={backgroundColor} type={type} disabled={disabled}>
        {children}
      </ColorButton>
      // </motion.div>
    ) : (
      // <motion.div>
      <ButtonMui variant={variant} onClick={onClick} sx={sx} startIcon={startIcon} endIcon={endIcon} color={color} disabled={disabled}>
        {children}
      </ButtonMui>
      // </motion.div>
      
    )
  )
}
