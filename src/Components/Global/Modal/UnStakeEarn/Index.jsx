import { Fragment } from "react";
import CRO from "../../../../assets/cro.png";
import LOC from "../../../../assets/unknown.png";
import USDC from "../../../../assets/usdc.png";

import Select from "react-select";
import "./unStakeEarn.css";

const Index = () => {
  const options = [
    {
      value: "CRO",
      label: (
        <div className="image-un-stake-earn-main">
          <img src={CRO} alt="CRO.png" className="image2" />
          CRO
        </div>
      ),
    },
    {
      value: "LOC",
      label: (
        <div className="image-un-stake-earn-main">
          <img src={LOC} alt="LOC.png" className="image2" />
          LOC
        </div>
      ),
    },
    {
      value: "USDC",
      label: (
        <div className="image-un-stake-earn-main">
          <img src={USDC} alt="USDC.png" className="image2" />
          USDC
        </div>
      ),
    },
  ];

  const customStyles = {
    indicatorsContainer: (base) => ({
      ...base,
      marginLeft: "-8px",
    }),

    dropdownIndicator: (base) => ({
      paddingTop: "0.4vw",
      fontSize: "large",
      marginLeft: "-1.2vw",
      // marginRight: "0.2vw",
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

      "&:hover": {
        background: "#7851a9",
      },
    }),

    SelectContainer: (base) => ({
      ...base,
      backgroundColor: "red",
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
      <div className="image-content-un-stake-earn">
        {/* <img src={Question} alt="notfound.png" className="img1" /> */}
        <div>Un-Stake to claim the reward</div>
      </div>
      <hr className="hr-line-un-stake-earn"></hr>
      <div className="drop-down-un-stake-menu">
        <Select
          options={options}
          defaultValue={options[1]}
          className="select-value"
          styles={customStyles}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </div>

      <div className="un-staked-value">0.0 Staked</div>
      <div className="input-field-un-stake-earn">
        <input
          type="text"
          defaultValue="0.0"
          className="input-data-un-stake-earn"
        />
      </div>

      <div className="max-value-un-stake-earn">Max</div>

      <div className="input-field-beloe-un-stake-earn">
        Max you can Claim are “N”
      </div>
      <div className="footer-cloc">
        <div className="footer-button-un-stake-earn">
          <button className="btn-un-stake-earn-modal">
            Unstake &#38; Claim
          </button>
        </div>
      </div>
    </Fragment>
  );
};
export default Index;
