import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Stake from "../Stake/Stake";
import UnStake from "../UnStake/Index";
import "./farms-modal.css";
const FarmModal = ({
  current_index_stake_value,
  change_stake,
  setIsOpen,
  isOpen,
}) => {
  const [value_of_modal, set_modal] = useState("Stake");
  return (
    <div className="page-adjust">
      <div className="modal-content-farm-head">
        <div
          className={`${
            value_of_modal === "Stake"
              ? "modal-button-earn-farm-stake"
              : "unselectedTab-farm-modal"
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
              ? "modal-button-earn-farm-stake"
              : "unselectedTab-farm-modal"
          }`}
          onClick={(e) => {
            change_stake(set_modal, value_of_modal);
          }}
        >
          UnStake
        </div>
        <div className="icon-farm">
          <FontAwesomeIcon
            icon={faClose}
            onClick={() => setIsOpen({ ...isOpen, isOpen: false })}
            className="font-awesome-farm-val"
            size={"1x"}
          />
        </div>
      </div>

      {value_of_modal === "Stake" && <Stake />}
      {value_of_modal === "Unstake" && <UnStake />}
    </div>
  );
};

export default FarmModal;
