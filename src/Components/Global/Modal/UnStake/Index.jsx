import CRO from "../../../../assets/cro.png";
import LOC from "../../../../assets/unknown.png";
import USDC from "../../../../assets/usdc.png";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
import Question from "../../../../assets/question.png";

import "./unStake.css";

const Index = () => {
  const optionsStake = [
    {
      value: "CRO",
      label: (
        <div className="image-main-unstake">
          <img src={CRO} alt="CRO.png" className="image2-unstake" />
          CRO
        </div>
      ),
    },
    {
      value: "LOC",
      label: (
        <div className="image-main-unstake">
          <img src={LOC} alt="LOC.png" className="image2-unstake" />
          LOC
        </div>
      ),
    },
    {
      value: "USDC",
      label: (
        <div className="image-main-unstake">
          <img src={USDC} alt="USDC.png" className="image2-unstake" />
          USDC
        </div>
      ),
    },
  ];

  const optionsStakeunSelecto = [
    {
      value: "CRO",
      label: (
        <div className="image-main-unstake">
          <img src={CRO} alt="CRO.png" className="image2-unstake" />
          CRO
        </div>
      ),
    },
    {
      value: "LOC",
      label: (
        <div className="image-main-unstake">
          <img src={LOC} alt="LOC.png" className="image2-unstake" />
          LOC
        </div>
      ),
    },
    {
      value: "USDC",
      label: (
        <div className="image-main-unstake">
          <img src={USDC} alt="USDC.png" className="image2-unstake" />
          USDC
        </div>
      ),
    },
  ];

  const customStyles = {
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
      //  backgroundColor: "red",
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
      <div className="image-content-unstake">
        <img src={Question} alt="notfound.png" className="img1-unstake" />
        <div>Stake Token to receive LP tokens</div>
      </div>
      <hr className="hr-line-unstake"></hr>
      <div className="drop-down-menu-unstake">
        <Select
          options={optionsStakeunSelecto}
          defaultValue={optionsStakeunSelecto[1]}
          className="select-value"
          styles={customStyles}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </div>

      <div className="input-field-unstake">
        <input type="text" defaultValue="0.0" className="input-data-unstake" />
      </div>
      <div className="arrow-data-unstake">
        <FontAwesomeIcon icon={faPlus} size={"1x"} />
      </div>
      <div className="input-field-2-unstake">
        <Select
          options={optionsStake}
          defaultValue={optionsStake[2]}
          className="select-value"
          styles={customStyles}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </div>
      <div className="input-field-loc-unstake">
        <input
          type="text"
          defaultValue="0.0"
          className="input-data-loc-unstake"
        />
      </div>
      <div className="footer">
        <div className="footer-header-unstake">Price and Pool Share</div>
        <div className="footer-data-unstake">
          <div className="footer-data1-unstake">
            <span className="currency-val-unstake">123</span>
            <span className="footer-value-unstake">LOC Per CRO </span>
          </div>
          <div className="footer-data2-unstake">
            <span className="currency-val-unstake">145</span>
            <span className="footer-value-unstake">CRO per LOC</span>
          </div>
          <div className="footer-data3-unstake">
            <span className="currency-val-unstake">185</span>
            <span className="footer-value-unstake">CRO per DRO</span>
          </div>
        </div>
        <div className="footer-button-unstake">
          <button className="btn-pool-modal-unstake">UnStake</button>
        </div>
      </div>
    </Fragment>
  );
};
export default Index;
