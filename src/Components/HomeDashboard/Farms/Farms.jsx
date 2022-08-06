import React, { Fragment } from "react";
import Farm from "../../Farms";

function Farms({ setIsOpen, isOpen }) {
  return (
    <Fragment>
      <Farm value="Top Farms" setIsOpen={setIsOpen} isOpen={isOpen} />
    </Fragment>
  );
}

export default Farms;
