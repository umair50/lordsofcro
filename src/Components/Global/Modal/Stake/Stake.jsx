import CRO from "../../../../assets/cro.png";
import LOC from "../../../../assets/unknown.png";
import USDC from "../../../../assets/usdc.png";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
import Question from "../../../../assets/question.png";

import "./modal-stake.css";

const Stake = () => {
  const optionsStake = [
    {
      value: "CRO",
      label: (
        <div className="image-main-stake">
          <img src={CRO} alt="CBO.png" className="image2" />
          CRO
        </div>
      ),
    },
    {
      value: "LOC",
      label: (
        <div className="image-main-stake">
          <img src={LOC} alt="cro-main.png" className="image2" />
          LOC
        </div>
      ),
    },
    {
      value: "USDC",
      label: (
        <div className="image-main-stake">
          <img src={USDC} alt="cornos.png" className="image2" />
          USDC
        </div>
      ),
    },
  ];

  // const optionsStakeSelecto = [
  //   {
  //     value: "CBO",
  //     label: (
  //       <div className="image-main-stake">
  //         <img src={CRO} alt="CBO.png" className="image2" />
  //         CBO
  //       </div>
  //     ),
  //   },
  //   {
  //     value: "CRO",
  //     label: (
  //       <div className="image-main-stake">
  //         <img src={CroMain} alt="cro-main.png" className="image2" />
  //         CRO
  //       </div>
  //     ),
  //   },
  //   {
  //     value: "DRO",
  //     label: (
  //       <div className="image-main-stake">
  //         <img src={Cornons} alt="cornos.png" className="image2" />
  //         DRO
  //       </div>
  //     ),
  //   },
  // ];

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
  // const customStylesStake = {
  //   indicatorsContainer: (base) => ({
  //     ...base,
  //     marginLeft: "-8px",
  //   }),

  //   dropdownIndicator: (base) => ({
  //     // paddingRight: "51px",
  //     paddingTop: "2px",
  //   }),

  //   control: (base, state) => ({
  //     ...base,
  //     background: "transparent",
  //     border: "none",
  //     color: "white",
  //     boxShadow: "none",
  //     fontFamily: "SourceSansPro-Regular",
  //     fontWeight: "600",
  //     lineHeight: "23px",
  //     fontSize: "18px",
  //   }),
  //   // container: (base) => ({
  //   //   ...base,
  //   //   // marginLeft: "12px",
  //   // }),

  //   option: (base, state) => ({
  //     ...base,
  //     color: "black",
  //     fontFamily: "TITILLIUMWEB-REGULAR",
  //     fontSize: "15px",
  //     marginTop: "-5px",
  //     marginBottom: "-4px",
  //     display: "flex",
  //     background: "transparent",
  //     overFlowY: "hidden",
  //     justifyContent: "space-between",

  //     "&:hover": {
  //       background: "#7851a9",
  //     },
  //   }),

  //   SelectContainer: (base) => ({
  //     ...base,
  //     backgroundColor: "red",
  //   }),

  //   singleValue: (base) => ({
  //     ...base,
  //     color: "#FFFFFF",
  //     backgroundColor: "transparent",
  //     border: "none",
  //     marginRight: "-16px",
  //     paddingLeft: "12px",
  //   }),

  //   menu: (base) => ({
  //     ...base,
  //     backgroundColor: "#f2f2f2",
  //     marginLeft: "32px",
  //     padding: "0px",
  //     width: "80%",
  //     color: "red",
  //     border: "none",
  //   }),
  // };

  return (
    <Fragment>
      <div className="image-content-stake">
        <img src={Question} alt="notfound.png" className="img1-stake" />
        <div>Stake Token to receive LP tokens</div>
      </div>
      <hr className="hr-line-stake"></hr>
      <div className="drop-down-menu-stake">
        <Select
          options={optionsStake}
          defaultValue={optionsStake[0]}
          className="select-value"
          styles={customStyles}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </div>

      <div className="input-field-stake">
        <input type="text" defaultValue="0.0" className="input-data-stake" />
      </div>
      <div className="arrow-data-stake">
        <FontAwesomeIcon icon={faPlus} size={"1x"} />
      </div>
      <div className="input-field-2-stake">
        <Select
          options={optionsStake}
          defaultValue={optionsStake[1]}
          className="select-value"
          styles={customStyles}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </div>
      <div className="input-field-loc-stake">
        <input
          type="text"
          defaultValue="0.0"
          className="input-data-loc-stake"
        />
      </div>
      <div className="footer">
        <div className="footer-header-stake">Price and Pool Share</div>
        <div className="footer-data-stake">
          <div className="footer-data1-stake">
            <span className="currency-val-stake">123</span>
            <span className="footer-value-stake">LOC Per CRO </span>
          </div>
          <div className="footer-data2-stake">
            <span className="currency-val-stake">145</span>
            <span className="footer-value-stake">CRO per LOC</span>
          </div>
          <div className="footer-data3-stake">
            <span className="currency-val-stake">185</span>
            <span className="footer-value-stake">CRO per DRO</span>
          </div>
        </div>
        <div className="footer-button-stake">
          <button className="btn-pool-modal-stake">Stake Now</button>
        </div>
      </div>
    </Fragment>
  );
};
export default Stake;
