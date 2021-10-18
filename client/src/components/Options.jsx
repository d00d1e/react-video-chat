import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  Button,
  TextField,
  Grid,
  Typography,
  Container,
  Paper,
  makeStyles,
} from "@material-ui/core";
import { Assignment, Phone, PhoneDisabled } from "@material-ui/icons";
import { SocketState } from "../context/Context";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "600px",
    margin: "35px 0",
    padding: 0,
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
  paper: {
    padding: "10px 20px",
    border: "1px solid lightgrey",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  gridContainer: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  padding: {
    padding: 20,
  },
  margin: {
    marginTop: 20,
  },
}));

export default function Options({ children }) {
  const [idToCall, setIdToCall] = useState("");
  const { self, callAccepted, name, setName, leaveCall, callUser, callEnded } =
    SocketState();
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Paper elevation={10} className={classes.paper}>
        <form className={classes.form} noValidate autoComplete="off">
          <Grid container className={classes.gridContainer}>
            <Grid item xs={12} md={6} className={classes.padding}>
              <Typography variant="h6" gutterBottom>
                Account Info
              </Typography>
              <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
              />
              <CopyToClipboard text={self} className={classes.margin}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  startIcon={<Assignment fontSize="large" />}
                >
                  Copy ID
                </Button>
              </CopyToClipboard>
            </Grid>

            <Grid item xs={12} md={6} className={classes.padding}>
              <Typography variant="h6" gutterBottom>
                Make a Call
              </Typography>
              <TextField
                label="ID to call"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
                fullWidth
              />
              {callAccepted && !callEnded ? (
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.margin}
                  startIcon={<PhoneDisabled fontSize="large" />}
                  onClick={leaveCall}
                  fullWidth
                >
                  End Call
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.margin}
                  startIcon={<Phone fontSize="large" />}
                  onClick={() => callUser(idToCall)}
                  fullWidth
                >
                  Call
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  );
}
