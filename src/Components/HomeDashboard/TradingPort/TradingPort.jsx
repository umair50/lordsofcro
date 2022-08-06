import React from "react";
import Token from "../../tokens";
import Pool from "../../pools";
import Farms from "../../Farms";

const TradingPort = ({ setIsOpen, isOpen }) => {
  return (
    <div>
      <Token value="Top Tokens" />
      <Pool value="Top Pools" setIsOpen={setIsOpen} isOpen={isOpen} />
      <Farms value="Top Farms" setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
};

export default TradingPort;
