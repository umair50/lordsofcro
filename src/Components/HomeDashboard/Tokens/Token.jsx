import React, { Fragment } from "react";
import MyToken from "../../MyToken";
import MyPools from "../../MyPool/Index";
import MyFarm from "../../MyFarm/MyFarm";

const Token = ({ setIsOpen, isOpen }) => {
  return (
    <Fragment>
      <MyToken value="My Tokens" />
      <MyPools value="My Pool" setIsOpen={setIsOpen} isOpen={isOpen} />
      <MyFarm value="My Farm" setIsOpen={setIsOpen} isOpen={isOpen} />

      {/* <Farms value="Top Farms" /> */}
    </Fragment>
  );
};

export default Token;
