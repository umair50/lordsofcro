import React, { Fragment } from "react";
import Pool from "../../pools";

const LiquidityPool = ({ setIsOpen, isOpen }) => {
  return (
    <Fragment>
      <Pool
        value="Top Pools"
        setIsOpen={setIsOpen}
        isOpen={{ ...isOpen, ModalType: "pool" }}
      />
    </Fragment>
  );
};

export default LiquidityPool;
