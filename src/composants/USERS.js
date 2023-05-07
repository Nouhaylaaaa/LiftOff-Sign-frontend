import { Paper } from '@mui/material';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

export default function USERS() {
  const [employee, setEmployee] = React.useState([]);
  const paperStyle = {
    padding: 20,
    height: '73vh',
    width: 400,
    margin: '80px auto',
  };

  const [auth, setAuth] = React.useState(false); // define auth state
  const [anchorEl, setAnchorEl] = React.useState(null); // define anchorEl state

  const handleMenu = (event) => { // define handleMenu function
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => { // define handleClose function
    setAnchorEl(null);
  };

  React.useEffect(() => {
    fetch('http://localhost:8080/employee/getAll')
      .then((res) => res.json())
      .then((result) => {
        setEmployee(result);
      });
  }, []);

  return (
    <div>
      <AppBar position="fixed"> {/* add position="fixed" */}
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            USERS
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
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
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>

      <Paper elevation={3} style={paperStyle}>
        {employee.map((employee) => (
          <Paper
            elevation={6}
            style={{ margin: '10px', padding: '15px', textAlign: 'left' }}
            key={employee.id}
          >
            name: {employee.name}
            <br />
            lastName: {employee.lastName}
            <br />
            email: {employee.email}
            <br />
          </Paper>
        ))}
      </Paper>
    </div>
  );
}
