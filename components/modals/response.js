import React, { useContext } from "react";

import { LayoutContext } from "../shared/context";

import Heading from "../utils/heading";

export default function Response({ classNames, status, message }) {
  const { setModal } = useContext(LayoutContext);

  return (
    <div className={`modal ${classNames}`} onClick={() => setModal(false)}>
      <div className={`modal-content ${classNames}`}>
        <div className="modal_status">
          <canvas
            style={{ backgroundImage: `url('/images/icon-${status}.png')` }}
          ></canvas>
        </div>
        <div className="modal_message">
          <Heading tag="h4" classNames={status}>
            {message}
          </Heading>
        </div>
      </div>
    </div>
  );
}
