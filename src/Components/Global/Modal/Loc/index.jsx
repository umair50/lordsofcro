import CRO from "../../../../assets/cro.png";
import LOC from "../../../../assets/unknown.png";
import USDC from "../../../../assets/usdc.png";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
import Question from "../../../../assets/question.png";

import "./loc.css";

const Index = () => {
  const options = [
    {
      value: "CRO",
      label: (
        <div className="image-stake-earn-main">
          <img src={CRO} alt="CRO.png" className="image2" />
          CRO
        </div>
      ),
    },
    {
      value: "LOC",
      label: (
        <div className="image-stake-earn-main">
          <img src={LOC} alt="LOC.png" className="image2" />
          LOC
        </div>
      ),
    },
    {
      value: "USDC",
      label: (
        <div className="image-stake-earn-main">
          <img src={USDC} alt="USDC.png" className="image2" />
          USDC
        </div>
      ),
    },
  ];

  const breakpoints = [1200];
  const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

  const customStyles = {
    indicatorsContainer: (base) => ({
      ...base,
      // marginLeft: "-0.5vw",
    }),

    dropdownIndicator: (base) => ({
      // paddingRight: "51px",
      paddingTop: "0.4vw",
      fontSize: "large",
      marginLeft: "-1.2vw",

      [mq[0]]: {
        // marginLeft: "-1.7vw",
        // fontSize: "3vw",
      },
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
      fontSize: "1.4vw",

      [mq[0]]: {
        marginLeft: "1.2vw",
        // fontSize: "3vw",
      },
    }),
    // container: (base) => ({
    //   ...base,
    //   // marginLeft: "12px",
    // }),

    option: (base, state) => ({
      ...base,
      color: "black",
      fontFamily: "TITILLIUMWEB-REGULAR",
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
      // backgroundColor: "red",
    }),

    singleValue: (base) => ({
      ...base,
      color: "#FFFFFF",
      backgroundColor: "transparent",
      border: "none",
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
      <div className="image-content-loc">
        <img src={Question} alt="notfound.png" className="img1-loc" />
        <div>Add Liquidity to earn LOC tokens</div>
      </div>
      <hr className="hr-line-loc"></hr>
      <div className="drop-down-menu">
        <Select
          options={options}
          defaultValue={options[0]}
          className="select-value "
          styles={customStyles}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </div>

      <div className="input-field">
        <input type="text" defaultValue="0.0" className="input-data-pool" />
      </div>
      <div className="arrow-data">
        <FontAwesomeIcon icon={faArrowDown} size={"1x"} />
      </div>
      <div className="input-field-2">
        <div className="input-field-image">
          <img src={LOC} alt="cro.png" className="sec-image" />
        </div>
        <span className="field-data">LOC</span>
      </div>
      <div className="input-field-loc">
        <input type="text" defaultValue="0.0" className="input-data-loc" />
      </div>
      <div className="footer">
        <div className="footer-header">Price and Pool Share</div>
        <div className="footer-data">
          <div className="footer-data1">
            <span className="currency-val">123</span>
            <span className="footer-value">LOC Per CRO </span>
          </div>
          <div className="footer-data2">
            <span className="currency-val">145</span>
            <span className="footer-value">CRO per LOC</span>
          </div>
          <div className="footer-data3">
            <span className="currency-val">185</span>
            <span className="footer-value">CRO per DRO</span>
          </div>
        </div>
        <div className="footer-button">
          <button className="btn-pool-modal">Earn Now</button>
        </div>
      </div>
    </Fragment>
  );
};
export default Index;
