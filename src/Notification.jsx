import React from "react";
import { Alert } from "react-bootstrap";

function Notification({ alert }) {
  return (
    <div className="w-100">
      <Alert variant={alert.type}>{alert.msg}</Alert>
    </div>
  );
}

export default Notification;
