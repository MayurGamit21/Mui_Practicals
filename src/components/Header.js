import React from "react";
import { AppBar, Badge, Grid, IconButton, InputBase, Toolbar } from "@mui/material";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import {border} from "@mui/system";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item>
            <InputBase></InputBase>
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton>
                <Badge badgeContent={4} color="secondary">
                    <NotificationsNoneIcon></NotificationsNoneIcon>
                </Badge>
            </IconButton>
            <IconButton>
                <Badge badgeContent={3} color="primary">
                    <ChatBubbleOutlineIcon></ChatBubbleOutlineIcon>
                </Badge>
            </IconButton>
            <IconButton>
                <Badge>
                    <PowerSettingsNewIcon></PowerSettingsNewIcon>
                </Badge>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
