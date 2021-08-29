import React, { useState } from 'react';
import { BiMenu, BiHome, BiWallet } from 'react-icons/bi';
import { FaGg } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from '@material-ui/core';

import { useStyles } from '../../utils/global-style';

const Header: React.FC = () => {
  const classes = useStyles();

  const isBrowser = typeof window !== 'undefined';
  const iOS = isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => setOpenDrawer(!openDrawer)}
            >
              <BiMenu />
            </IconButton>
            <Typography variant="h6" className={classes.whiteTitle}>
              Blockchain SV
            </Typography>
            <Button color="inherit" to="/login" component={Link}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <div>
        <SwipeableDrawer
          anchor="left"
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
          open={openDrawer}
          onOpen={() => setOpenDrawer(true)}
          onClose={() => setOpenDrawer(false)}
        >
          <List className={classes.list}>
            <ListItem
              button
              to="/"
              component={Link}
              onClick={() => {
                setOpenDrawer(false);
              }}
            >
              <ListItemIcon>
                <BiHome size={30} color="#2196f3" />
              </ListItemIcon>
              <ListItemText className={classes.menuText}>
                <Typography className={classes.menuText}>Inicio</Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              button
              to="/wallet"
              component={Link}
              onClick={() => {
                setOpenDrawer(false);
              }}
            >
              <ListItemIcon>
                <BiWallet size={30} color="#2196f3" />
              </ListItemIcon>
              <ListItemText>
                <Typography className={classes.menuText}>Billetera</Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              button
              to="/blockchain"
              component={Link}
              onClick={() => {
                setOpenDrawer(false);
              }}
            >
              <ListItemIcon>
                <FaGg size={30} color="#2196f3" />
              </ListItemIcon>
              <ListItemText>
                <Typography className={classes.menuText}>Blockchain</Typography>
              </ListItemText>
            </ListItem>
          </List>
        </SwipeableDrawer>
      </div>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
