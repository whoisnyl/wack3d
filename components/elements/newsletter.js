import React, { useState, useContext } from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { LayoutContext } from "../shared/context";

import Row from "../utils/row";
import Input from "../utils/input";
import Button from "../utils/button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const {
    loading,
    setLoading,
    error,
    setError,
    response,
    setResponse,
    setModal,
  } = useContext(LayoutContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.length > 0) {
      setLoading(true);
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
          .then((data) => {
            if (data.ok) {
              setResponse(data);
              setError(false);
            } else {
              setResponse(data);
              setError(true);
            }
            setLoading(false);
            setModal(true);
          });
      } catch (e) {
        setError(true);
        setLoading(false);
        setModal(true);
        setResponse("An error occured while submitting the form");
      }
    } else {
      setModal(true);
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
          disabled={response == "true" ? true : false}
        />
        {response == "true" ? (
          <Button type="button" classNames="btn btn-primary">
            Success!
          </Button>
        ) : (
          <Button type="submit" classNames="btn btn-primary">
            {loading ? "please wait..." : "notify me"}
          </Button>
        )}
      </Row>
    </form>
  );
}
