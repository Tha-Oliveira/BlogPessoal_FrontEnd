import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Box, MenuItem, Menu } from "@mui/material"
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css"
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { addToken } from '../../../store/tokens/Action';
import { toast } from 'react-toastify';



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
  const token = useSelector<TokenState, TokenState ["tokens"] >(
    (state) => state.tokens
)
const dispach = useDispatch();
  let navigate = useNavigate()
  
  function goLogout()
  {
    dispach(addToken(""))
    toast.info("Volte sempre 😉", {
      position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "colored", progress: undefined})
    navigate("/login")
  }

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
  
  var navbarComponent;

  if(token !== "")
  {
    navbarComponent = 
    <div className={classes.root}>
      <AppBar position="static" style={{ borderColor: "black", backgroundColor: "#154194", color: "white" }}>
        <Toolbar>
          <Box>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            </IconButton>
          </Box>

          <Box display="flex" justifyContent="start" className="menu">
            <Link to="/home" className="text-decorator-none">
            <Box mx={1} className="cursor">
              <Typography color="white">
                Home
              </Typography>
            </Box>
            </Link>

            <Link to="/posts" className="text-decorator-none">
            <Box mx={1} className="cursor">
              <Typography color="white">
                Postagens
              </Typography>
            </Box>
            </Link>

            <Link to="/temas" className="text-decorator-none">
            <Box mx={1} className="cursor">
              <Typography color="white">
                Temas
              </Typography>
            </Box>
            </Link>

            <Link to="/formularioTema" className="text-decorator-none">
            <Box mx={1} className="cursor"> {/* mx é o espaçamento entre os elementos */}
              <Typography color="white">
                Cadastrar Temas
              </Typography>
            </Box>
            </Link>
          </Box>

          <Typography className={classes.title}></Typography>
          <Box className="cursor" ></Box>

            {auth && (
              <div>
                <IconButton aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit">
                  <AccountCircle />
                </IconButton>
                <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{vertical: 'top', horizontal: 'right',}} keepMounted transformOrigin={{vertical: 'top', horizontal: 'right',}}
                    open={open} onClose={handleClose}>
                  <MenuItem onClick={handleClose}>Perfil</MenuItem>
                  <MenuItem onClick={handleClose}>Minha conta</MenuItem>
                  <MenuItem onClick={goLogout}>Logout</MenuItem>
                </Menu>
              </div>)}
          </Toolbar>
      </AppBar>
    </div>
}

  return (
    <>
      {navbarComponent}
    </>
  );
}


export default Navbar;

// type="submit" permite que envie o formulario apenas com o enter. Colocar na parte de cadastro e enviar postagens
// style={{ borderColor: "white", backgroundColor: cyan[500], color: "white" }}
