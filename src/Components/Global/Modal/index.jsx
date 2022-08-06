import { Fragment } from "react";
import "./modal.css";
import Pool from "./Pool/index";
import Farms from "./Farms/FarmModal";
import StakeToken from "./StakeNow/StakeToken";

const Index = ({ setIsOpen, ModalType, isOpen }) => {
  const changeindex = (modal, value_of_modal) => {
    if (value_of_modal === "LOC") {
      modal("CLOC");
    } else if (value_of_modal === "CLOC") {
      modal("LOC");
    }
  };

  const change_stake = (modal, value_of_modal) => {
    if (value_of_modal === "Stake") {
      modal("Unstake");
    } else if (value_of_modal === "Unstake") {
      modal("Stake");
    }
  };

  return (
    <Fragment>
      <div
        className={`overlay ${isOpen.isOpen === true && "overlay-open"} ${
          isOpen.isOpen === false && "overlay-close"
        }`}
      ></div>

      <div className="centered">
        <div className="modal">
          <div className="modalContent">
            {isOpen.isOpen && isOpen.ModalType === "pool" && (
              <Pool
                changeindex={changeindex}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
              />
            )}
            {isOpen.isOpen && isOpen.ModalType === "Farms" && (
              <Farms
                change_stake={change_stake}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
              />
            )}

            {isOpen.isOpen && isOpen.ModalType === "Stake" && (
              <StakeToken
                change_stake={change_stake}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
              />
            )}
          </div>
        </div>
      </div>

      {/* </div> */}
    </Fragment>
  );
};
export default Index;
