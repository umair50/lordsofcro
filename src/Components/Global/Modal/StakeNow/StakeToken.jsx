import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import UnStake from "../UnStakeEarn/Index";
import StakeEarn from "../StakeEarn/Index";
import "./stakeToken.css";

const FarmModal = ({ change_stake, setIsOpen, isOpen }) => {
  const [value_of_modal, set_modal] = useState("Stake");
  return (
    <div className="page-adjust">
      <div className="modal-content-stake-now-head">
        <div
          className={`${
            value_of_modal === "Stake"
              ? "modal-button-stake-now"
              : "unselectedTab-stake-now-modal"
          }`}
          onClick={(e) => {
            change_stake(set_modal, value_of_modal);
          }}
        >
          Stake
        </div>

        <div
          className={`${
            value_of_modal === "Unstake"
              ? "modal-button-stake-now"
              : "unselectedTab-stake-now-modal"
          }`}
          onClick={(e) => {
            change_stake(set_modal, value_of_modal);
          }}
        >
          UnStake
        </div>
        <div className="icon-stake-now">
          <FontAwesomeIcon
            icon={faClose}
            onClick={() => setIsOpen(false)}
            className="font-awesome-stake-now-val"
            size={"1x"}
          />
        </div>
      </div>

      {value_of_modal === "Stake" && <StakeEarn />}
      {value_of_modal === "Unstake" && <UnStake />}
    </div>
  );
};

export default FarmModal;
