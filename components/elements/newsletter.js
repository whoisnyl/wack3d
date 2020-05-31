import React, { useState } from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Row from "../utils/row";
import Input from "../utils/input";
import Button from "../utils/button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.length > 0) {
      try {
        await fetch(process.env.BACKEND_URL + "/api/sendy", {
          method: "POST",
          body: JSON.stringify({ email: email }),
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          mode: "cors",
        })
          .then((response) => response.text())
          .then((data) =>
            !data ? setResponse(data.toString()) : setResponse("success")
          );
      } catch (e) {
        console.log("An error occurred", e);
        setResponse("An error occured while submitting the form");
      }
    } else {
      setResponse("Please enter your Email Address");
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
