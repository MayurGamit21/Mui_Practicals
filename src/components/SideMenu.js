import React from "react";
import { makeStyles, withStyles } from "@mui/styles";

// withStyles & makeStyles
//Type 1
const style = {
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "320px",
    height: "100%",
    backgroundColor: "#253053",
  },
};

const SideMenu = (props) => {
  const {classes}=props;
  return <div className={classes.sideMenu}>SideMenu</div>;
};


export default withStyles(style)(SideMenu);
