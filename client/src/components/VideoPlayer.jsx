import React from "react";
import { Grid, Paper, makeStyles, Typography } from "@material-ui/core";
import { SocketState } from "../context/Context";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    justifyContent: "center",
    marginTop: "150px",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  paper: {
    padding: "10px",
    border: "1px solid lightgrey",
    margin: "10px",
  },
  video: {
    width: "550px",
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },
}));

export default function VideoPlayer() {
  const classes = useStyles();
  const { name, selfVideo, userVideo, stream, call, callAccepted, callEnded } =
    SocketState();

  return (
    <Grid container className={classes.gridContainer}>
      {/* SELF VIDEO */}
      {stream && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {name || "Name"}
            </Typography>
            <video
              playsInline
              autoPlay
              muted
              ref={selfVideo}
              className={classes.video}
            />
          </Grid>
        </Paper>
      )}

      {/* OTHER VIDEO */}
      {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {call.name || "Name"}
            </Typography>
            <video
              playsInline
              autoPlay
              muted
              ref={userVideo}
              className={classes.video}
            />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
}
