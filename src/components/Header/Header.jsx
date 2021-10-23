import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Grid from "@mui/material/Grid";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (ev) => {
    if (!anchorEl) setAnchorEl(ev.currentTarget);
    setMenuOpen(!menuOpen);
  };

  const handleClose = () => {
    setMenuOpen(false);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid xs={9} item>
          John Doe
        </Grid>
        <Grid xs={3} item justifyContent="flex-end" display="flex">
          <Tooltip title="notifications">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Badge badgeContent={4} color="primary">
                <NotificationsIcon color="action" />
              </Badge>
            </IconButton>
          </Tooltip>
          <Tooltip title="menu">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>
          <Menu
            elevation={0}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={handleClose}
          >
            <MenuItem>Settings</MenuItem>
            <MenuItem>Sign out</MenuItem>
          </Menu>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
