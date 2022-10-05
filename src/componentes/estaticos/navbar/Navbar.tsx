import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Box, MenuItem, Menu } from "@mui/material"
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { cyan } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import "./Navbar.css"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar() 
{
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ borderColor: "white", backgroundColor: cyan[500], color: "white" }}>
      <Toolbar>
        <Box>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Box>

          <Box display="flex" justifyContent="start">
            <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit">
                    Home
                  </Typography>
            </Box>

          <Box mx={1} className="cursor">
            <Typography variant="h6" color="inherit">
              Postagens
            </Typography>
          </Box>

          <Box mx={1} className="cursor">
            <Typography variant="h6" color="inherit">
              Temas
            </Typography>
          </Box>

          <Box mx={1} className="cursor">
            <Typography variant="h6" color="inherit">
              Cadastrar Temas
            </Typography>
          </Box>
          </Box>

          <Typography variant="h6" className={classes.title}></Typography>
          <Box className="cursor" ></Box>

          {auth && (
            <div>
              <IconButton 
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Perfil</MenuItem>
                <MenuItem onClick={handleClose}>Minha conta</MenuItem>

                <Link to="/login" className="text-decorator-none">
                <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Link>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default Navbar;

// type="submit" permite que envie o formulario apenas com o enter. Colocar na parte de cadastro e enviar postagens
// style={{ borderColor: "white", backgroundColor: cyan[500], color: "white" }}
