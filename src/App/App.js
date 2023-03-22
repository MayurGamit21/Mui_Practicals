import "./App.css";
import SideMenu from "../components/SideMenu";
import SideMenuTwo from "../components/SideMenuTwo";
import { makeStyles, withStyles } from "@mui/styles";
import Header from "../components/Header";
import { CssBaseline } from "@mui/material";

const useStyle = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

function App() {
  const classes = useStyle();
  return (
    <>
      <SideMenuTwo></SideMenuTwo>
      <div className={classes.appMain}>
        <Header></Header>
      </div>
      <CssBaseline></CssBaseline>
    </>
  );
}

export default App;
