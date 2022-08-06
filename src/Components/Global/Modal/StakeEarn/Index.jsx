import { Fragment } from "react";
import CRO from "../../../../assets/cro.png";
import LOC from "../../../../assets/unknown.png";
import USDC from "../../../../assets/usdc.png";

import Select from "react-select";
// import Question from "../../../../assets/question.png";
import "./stakeEarn.css";

const Index = () => {
  const options = [
    {
      value: "CRO",
      label: (
        <div className="image-stake-earn-main">
          <img src={CRO} alt="CRO.png" className="image2-earn-stake" />
          CRO
        </div>
      ),
    },
    {
      value: "LOC",
      label: (
        <div className="image-stake-earn-main">
          <img src={LOC} alt="LOC.png" className="image2-earn-stake" />
          LOC
        </div>
      ),
    },
    {
      value: "USDC",
      label: (
        <div className="image-stake-earn-main">
          <img src={USDC} alt="USDC.png" className="image2-earn-stake" />
          USDC
        </div>
      ),
    },
  ];

  const customStylesStake = {
    indicatorsContainer: (base) => ({
      ...base,
      // marginLeft: "-8px",
    }),

    dropdownIndicator: (base) => ({
      paddingTop: "0.4vw",
      fontSize: "large",
      marginLeft: "-1.2vw",
    }),

    control: (base, state) => ({
      ...base,
      background: "transparent",
      border: "none",
      color: "white",
      boxShadow: "none",
      fontFamily: "SourceSansPro-Regular",
      fontWeight: "600",
      lineHeight: "2vw",
      paddingLeft: "1.4vw",
      fontSize: "1.4vw",
    }),
    // container: (base) => ({
    //   ...base,
    //   // marginLeft: "12px",
    // }),

    option: (base, state) => ({
      ...base,
      color: "black",
      fontFamily: "SourceSansPro-Regular",
      fontSize: "1.2vw",
      marginTop: "-0.25vw",
      marginBottom: "-0.25vw",
      display: "flex",
      background: "transparent",
      overFlowY: "hidden",
      justifyContent: "space-between",
      // marginLeft: "-1vw",

      "&:hover": {
        background: "#7851a9",
      },
    }),

    SelectContainer: (base) => ({
      ...base,
      // backgroundColor: "red",
    }),

    singleValue: (base) => ({
      ...base,
      color: "#FFFFFF",
      backgroundColor: "transparent",
      border: "none",
      // marginRight: "-16px",
      // paddingLeft: "12px",
    }),

    menu: (base) => ({
      ...base,
      backgroundColor: "#f2f2f2",
      marginLeft: "2.8vw",
      padding: "0px",
      width: "80%",
      // color: "red",
      border: "none",
    }),
  };

  return (
    <Fragment>
      <div className="image-content-cloc">
        {/* <img src={Question} alt="notfound.png" className="img1" /> */}
        <div>Stake your token in an instant</div>
      </div>
      <hr className="hr-line-stake-earn"></hr>
      <div className="drop-down-menu-stake-earn ">
        <Select
          options={options}
          defaultValue={options[1]}
          className="select-value "
          styles={customStylesStake}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </div>
      <div className="staked-value-earn-now">0.0 Staked</div>
      <div className="input-field-earn-now">
        <input
          type="text"
          defaultValue="0.0"
          className="input-data-earn-now "
        />
      </div>
      <div className="max-value-earn-now">Max</div>
      <div className="footer-stake-earn">
        <div className="footer-header-earn-now">Price and Pool Share</div>
        <div className="footer-data-earn-now">
          <div className="footer-data1-earn-now">
            <span className="currency-val">123</span>
            <span className="footer-value">Interest LOC </span>
          </div>
          <div className="footer-data2-earn-now">
            <span className="currency-val">0%</span>
            <span className="footer-value">Share of pool</span>
          </div>
        </div>
        <div className="footer-button">
          <button className="btn-earn-now-modal">Earn Now</button>
        </div>
      </div>
    </Fragment>
  );
};
export default Index;
