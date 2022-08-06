import React, { useState } from "react";
import Tab from "../Tab";
import Search from "../search";
import TradingPort from "./TradingPort/TradingPort";
import LiquidityPool from "./LiquidityPool/LiquidtiyPool";
import StakeToken from "./StakeToken/StakeToken";
import Farms from "./Farms/Farms";
import Token from "./Tokens/Token";
// import { useEffect } from "react";
const HomeDashboard = () => {
  const [CurrentTab, setCurrentTab] = useState("TradingPort");
  const [isOpen, setIsOpen] = useState({
    ModalType: "",
    isOpen: false,
  });

  return (
    <div>
      <Tab CurrentTab={CurrentTab} setCurrentTab={setCurrentTab} />
      <Search value="Search pools or token" />
      {CurrentTab === "TradingPort" && (
        <TradingPort setIsOpen={setIsOpen} isOpen={isOpen} />
      )}
      {CurrentTab === "LiquidtyPool" && (
        <LiquidityPool setIsOpen={setIsOpen} isOpen={isOpen} />
      )}
      {CurrentTab === "StakeToken" && (
        <StakeToken setIsOpen={setIsOpen} isOpen={isOpen} />
      )}
      {CurrentTab === "Farm" && <Farms setIsOpen={setIsOpen} isOpen={isOpen} />}
      {CurrentTab === "MyToken" && (
        <Token setIsOpen={setIsOpen} isOpen={isOpen} />
      )}
    </div>
  );
};

export default HomeDashboard;
