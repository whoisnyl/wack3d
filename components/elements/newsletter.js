import React, { useState } from "react";
import queryString from "query-string";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Row from "../utils/row";
import Input from "../utils/input";
import Button from "../utils/button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://sendy.purplelogo.ph/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        // mode: "no-cors",
        body: queryString.stringify({
          name: "",
          email: email,
          hp: "",
          list: process.env.SENDY_LIST_ID,
          subform: "yes",
          submit: "",
        }),
      }).then((response) => {
        if (response.ok) {
          response.text().then((text) => {
            console.log(text);
          });
        } else {
          console.log(response);
        }
      });
    } catch (error) {
      setResponse("failed to fetch");
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
        {response != "" ? (
          response
        ) : (
          <Button type="submit" classNames="btn btn-primary">
            notify me
          </Button>
        )}
      </Row>
    </form>
  );
}
