import { React, useState } from "react";
import LOC from "../Loc";
import CLOC from "../Cloc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
const Index = ({ current_index_value, changeindex, setIsOpen, isOpen }) => {
  const [value_of_modal, set_modal] = useState("LOC");
  return (
    <div className="page-adjust">
      <div className="modal-content-head">
        <div
          className={`${
            value_of_modal === "LOC"
              ? "modal-button-earn-loc"
              : "unselectedTab-modal"
          }`}
          onClick={(e) => {
            changeindex(set_modal, value_of_modal);
          }}
        >
          Earn LOC
        </div>

        <div
          className={`${
            value_of_modal === "CLOC"
              ? "modal-button-earn-loc"
              : "unselectedTab-modal"
          }`}
          onClick={(e) => {
            changeindex(set_modal, value_of_modal);
          }}
        >
          Claim LOC
        </div>
        <div className="icon">
          <FontAwesomeIcon
            icon={faClose}
            onClick={() => setIsOpen(false)}
            className="font-awesome-val"
            size={"1x"}
          />
        </div>
      </div>

      {value_of_modal === "CLOC" && <CLOC />}
      {value_of_modal === "LOC" && <LOC />}
    </div>
  );
};

export default Index;
