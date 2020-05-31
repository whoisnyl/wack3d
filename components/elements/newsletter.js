import React, { useState, useEffect } from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Row from "../utils/row";
import Input from "../utils/input";
import Button from "../utils/button";

// var Sendy = require("sendy-api");
// const sendy = new Sendy("https://sendy.purplelogo.ph/", "NWbKOoVCxJhlMUrNXaLG");

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/sendy", {
        method: "POST",
        body: JSON.stringify({ email: email }),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        mode: "no-cors",
      });

      const json = await res.json();

      if (json.success) {
        setResponse({
          type: "success",
          message: "Thank you for reaching out to us.",
        });
      } else {
        setResponse({
          type: "error",
          message: json.message,
        });
      }
    } catch (e) {
      console.log("An error occurred", e);
      setResponse({
        type: "error",
        message: "An error occured while submitting the form",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="ticker_newsletter">
      <Row classNames="row-direction-column row-direction-xl-row row-align-center row-justify-xl-between">
        <Input
          id="emailAddress"
          type="email"
          name="email"
          placeholder="Email Address"
          variance="primary"
          icon={faEnvelope}
          changeEvent={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" classNames="btn btn-primary">
          notify me
        </Button>
      </Row>
    </form>
  );
}
