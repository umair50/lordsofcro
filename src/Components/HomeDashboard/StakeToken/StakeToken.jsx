import React, { Fragment } from "react";
import Stake from "../../Stake";

const StakeToken = ({ setIsOpen, isOpen }) => {
  return (
    <Fragment>
      <Stake value="Top Tokens" setIsOpen={setIsOpen} isOpen={isOpen} />
    </Fragment>
  );
};

export default StakeToken;
