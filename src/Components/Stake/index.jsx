import { Fragment } from "react";
import CroSub from "../../assets/unknown.png";
import Question from "../../assets/questionmark.png";
import Modal from "../../Components/Global/Modal";

import "./stake.css";
const Index = ({ value, setIsOpen, isOpen }) => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      {isOpen.isOpen && isOpen.ModalType === "Stake" && (
        <Modal setIsOpen={setIsOpen} isOpen={isOpen} />
      )}
      <div className="main-conatiner">
        <h3 className="main-content-stake">{value}</h3>
        <div className="table-data">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Token</th>
                <th>
                  Est.APY
                  <img
                    src={Question}
                    alt="question.png"
                    className="image-stake"
                  />
                </th>
                <th>Lorem ipsum dolor sit.</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td className="img-content-stake">
                  <img src={CroSub} alt="cro.png" className="img-stake" />
                  Lorem.
                </td>
                <td>Lorem.</td>
                <td>Lorem.</td>
                <td className="td-stake-end">
                  <button
                    className="btn-stake"
                    onClick={() =>
                      setIsOpen({ ModalType: "Stake", isOpen: true })
                    }
                  >
                    Stake Now
                  </button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td className="img-content-stake">
                  <img src={CroSub} alt="Cro1.png" className="img-stake" />
                  Lorem.
                </td>
                <td>Lorem.</td>
                <td>Lorem.</td>
                <td className="td-stake-end">
                  <button
                    className="btn-stake"
                    onClick={() =>
                      setIsOpen({ ModalType: "Stake", isOpen: true })
                    }
                  >
                    Stake Now
                  </button>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td className="img-content-stake">
                  <img src={CroSub} alt="Corons.png" className="img-stake" />
                  Lorem.
                </td>
                <td>Lorem.</td>
                <td>Lorem.</td>
                <td className="td-stake-end">
                  <button
                    className="btn-stake"
                    onClick={() =>
                      setIsOpen({ ModalType: "Stake", isOpen: true })
                    }
                  >
                    Stake Now
                  </button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td className="img-content-stake">
                  <img src={CroSub} alt="Corons.png" className="img-stake" />
                  Lorem.
                </td>
                <td>Lorem.</td>
                <td>Lorem.</td>
                <td className="td-stake-end">
                  <button
                    className="btn-stake"
                    onClick={() =>
                      setIsOpen({ ModalType: "Stake", isOpen: true })
                    }
                  >
                    Stake Now
                  </button>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td className="img-content-stake">
                  <img src={CroSub} alt="Corons.png" className="img-stake" />
                  Lorem.
                </td>
                <td>Lorem.</td>
                <td>Lorem.</td>
                <td className="td-stake-end">
                  <button
                    className="btn-stake"
                    onClick={() =>
                      setIsOpen({ ModalType: "Stake", isOpen: true })
                    }
                  >
                    Stake Now
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};
export default Index;
