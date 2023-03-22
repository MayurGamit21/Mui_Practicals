import React from "react";
import { makeStyles, withStyles } from "@mui/styles";

// withStyles & makeStyles
//Type 2
const style = makeStyles({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "320px",
    height: "100%",
    backgroundColor: "#253053",
  },
});

const SideMenu = (props) => {
  const classes = style();
  console.log(classes);
  return (
    <>
      <div className={classes.sideMenu}>SideMenu</div>
    </>
  );
};

export default withStyles(style)(SideMenu);
