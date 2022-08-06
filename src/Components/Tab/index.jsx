import "./index.css";

const Tab = ({ setCurrentTab, CurrentTab }) => {
  const changeindex = (value) => {
    if (value === "TradingPort") {
      setCurrentTab("TradingPort");
    } else if (value === "LiquidtyPool") {
      setCurrentTab("LiquidtyPool");
    } else if (value === "StakeToken") {
      setCurrentTab("StakeToken");
    } else if (value === "Farm") {
      setCurrentTab("Farm");
    } else if (value === "MyToken") {
      setCurrentTab("MyToken");
    }
  };
  return (
    <div className="main-tab">
      <div
        className={`${
          CurrentTab === "TradingPort" ? "selectedTab" : "unselectedTab"
        }`}
        onClick={() => changeindex("TradingPort")}
      >
        Trading Port
      </div>

      <div
        className={`${
          CurrentTab === "LiquidtyPool" ? "selectedTab" : "unselectedTab"
        } `}
        onClick={() => changeindex("LiquidtyPool")}
      >
        Liquidity Pool
      </div>

      <div
        className={`${
          CurrentTab === "StakeToken" ? "selectedTab" : "unselectedTab"
        }`}
        onClick={() => changeindex("StakeToken")}
      >
        Stake Token
      </div>

      <div
        className={`${CurrentTab === "Farm" ? "selectedTab" : "unselectedTab"}`}
        onClick={() => changeindex("Farm")}
      >
        Farms
      </div>

      <div
        className={`${
          CurrentTab === "MyToken" ? "selectedTab" : "unselectedTab"
        }`}
        onClick={() => changeindex("MyToken")}
      >
        My Tokens
      </div>

      
      
    </div>
  );
};
export default Tab;
