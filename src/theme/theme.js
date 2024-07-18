import { createTheme } from "@mui/material"

export const ThemePalette = {
  PURPLE_LIGHT: '#c36fbfe3',
  FONT_GLOBAL: 'Open Sans',
  PURPLE_MEDIUM: '#f3eaea',
  PURPLE_HARD: '#dcb7d5',
  // WHITE: '#fff',
  BLACK_MEDIUM: '#000',
  SKYBLUE_MEDIUM: '#0496da',
  PURPLE_LIGHT_CARD: '#ca7fc6',
  GREEN_MEDIUM: '#60BB46',
  RED: '#ff0000',

  BUTTON_NAVBAR: '#60BB46',
  BACKGROUND_FOOTER: '#60BB46',
  WHITE: '#fff',
  
  SECTION_BACKGROUND_GREEN: '#60BB46',
  FOOTER_BACKGROUND_GREEN: '#60BB46',
  US_BACKGROUND_GREEN: '#60BB46',


} 

export const DEFAULT_THEME = createTheme({
  typography: {
    fontFamily: ThemePalette.FONT_GLOBAL,
  },
})

export const FontSize = {
  PARAGRAPH: '16px',
  TITLE_SECTION: '24px',
  TITLE_PARAGRAPH: '18px',
  TITLE_BUTTON: '16px',
  FOOTER_TITLE: '16px',
  FOOTER_TEXT: '14px',
  PROFESSION_IMAGE_STAFF: '14px',
  FORM_ERROR: '12px'
}