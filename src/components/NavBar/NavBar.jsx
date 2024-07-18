import { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { KeyboardArrowDown, MenuOutlined } from '@mui/icons-material'
import { AppBar, Box, Container, CssBaseline, IconButton, Menu, MenuItem, Toolbar, Typography, alpha, styled } from '@mui/material'
import { pages } from './constants'
import { ThemePalette } from '../../theme/theme';
import { CButton } from '../Button';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export const NavBar = (props) => {

  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleClick = (event, isMenu) => isMenu ? setAnchorEl(event.currentTarget) : setAnchorEl(null);
  const handleClose = () => setAnchorEl(null);

  const onClickItemMenu = (path) => {
    navigate(path)
    setAnchorEl(null);
  };

  return (
    <>
      <CssBaseline />
      <AppBar sx={{ backgroundColor: '#fff', padding: '2px 30px'}}>
        <Container maxWidth="xl" disableGutters  sx={{ padding: '0px' }}>
          <Toolbar disableGutters sx={{
            justifyContent: 'space-between'
          }}>
            <Typography noWrap component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}>
              <img src='/logo-final21.png' onClick={() => navigate('/')} />
            </Typography>

            {/* View Movil */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="#a34292"
              >
                <MenuOutlined />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color='#a34292'>
                      <Link to={page.path} style={{ textDecoration: 'none'}}>{page.label}</Link></Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography noWrap component="a"
              href="#app-bar-with-responsive-menu" sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}>
              <img src='/logo-text-short.png' width={120} height={48} />
            </Typography>

            {/* View Desktoop */}            
            <Box 
              sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, gap: '12px', alignItems: 'center' }}
            >
              {pages.map((page) => (
                <div key={page.label}>
                  <CButton
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={(event) => handleClick(event, page.menu)}
                    sx={{ my: 2, paddingTop: '8px', paddingBottom: '8px' }}
                    variant={page.background ? 'contained': 'text'}
                    disableElevation
                    endIcon={page.menu && <KeyboardArrowDown />}
                  >
                    {
                      !page.menu ? (
                        <Link to={page.path} style={{ textDecoration: 'none', color: page.background ? ThemePalette.WHITE: ThemePalette.BLACK_MEDIUM, fontWeight: '600'}}>
                          {page.label}
                        </Link>
                      ) : <Typography component='span' fontSize='0.875rem' color={ThemePalette.BLACK_MEDIUM} fontWeight='600'>{page.label}</Typography>
                    }
                  </CButton>
                  {
                    page.menu && (
                      <StyledMenu
                        id="basic-menu"
                        MenuListProps={{
                          'aria-labelledby': 'basic-button',
                        }}
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={() => onClickItemMenu('/transporte-disposicion-final')}>Transporte a disposición final</MenuItem>
                        <MenuItem onClick={() => onClickItemMenu('/comercializacion-residuos')}>Comercialización de residuos</MenuItem>
                        <MenuItem onClick={() => onClickItemMenu('/destruccion-residuos-solidos')}>Destrucción de residuos sólidos</MenuItem>
                      </StyledMenu>
                    )
                  }
                </div>
            ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Outlet />
      {/* <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop> */}
    </>
  )
}
