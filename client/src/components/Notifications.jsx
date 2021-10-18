import React from "react";
import { Button } from "@material-ui/core";
import { SocketState } from "../context/Context";

export default function Notifications() {
  const { call, answerCall, callAccepted } = SocketState();

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h1>{call.name} is calling: </h1>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
    </>
  );
}
