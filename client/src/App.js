import React from "react";
import { Typography, AppBar, makeStyles } from "@material-ui/core";
import VideoPlayer from "./components/VideoPlayer";
import Notifications from "./components/Notifications";
import Options from "./components/Options";

const useStyles = makeStyles((theme) => ({
  appContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  appBar: {
    padding: "5px",
  },
  brand: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.appContainer}>
      <AppBar position="static" color="inherit" className={classes.appBar}>
        <Typography variant="h4" className={classes.brand}>
          Vroom
        </Typography>
      </AppBar>

      <VideoPlayer />

      <Options>
        <Notifications />
      </Options>
    </div>
  );
}
