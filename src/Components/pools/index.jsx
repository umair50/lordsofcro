import "./index.css";
import { Fragment } from "react";
import CroSub from "../../assets/unknown.png";
import CroImage from "../../assets/image.png";

import Modal from "../../Components/Global/Modal";

const Index = ({ value, setIsOpen, isOpen }) => {
  return (
    <Fragment>
      {isOpen.isOpen && isOpen.ModalType === "pool" && (
        <Modal setIsOpen={setIsOpen} isOpen={isOpen} />
      )}
      <div className="main-conatiner">
        <h3 className="main-content-pools">{value}</h3>
        <div className="table-data">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Pool</th>
                <th>Earned</th>
                <th>Flexible APY</th>
                <th>Total Staked</th>
                <th>Liquidity</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <div className="img-content-pool">
                    <div className="images">
                      <img src={CroSub} alt="Cro1.png" className="img-pool" />
                      <img
                        src={CroSub}
                        alt="Corons.png"
                        className="img1-pool"
                      />
                    </div>
                    <div className="data-content">
                      <div className="data"> Lorem.</div>
                      <div className="sub-data">Stake CRO</div>
                    </div>
                  </div>
                </td>
                <td>Lorem, ipsum.</td>
                <td>Lorem ipsum </td>
                <td>Lorem ipsum.</td>
                <td>Lorem.</td>
                <td className="btn-pool-end">
                  <button
                    className="btn-pool"
                    onClick={() =>
                      setIsOpen({ ModalType: "pool", isOpen: true })
                    }
                  >
                    Earn Now
                  </button>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>
                  <div className="img-content-pool">
                    <div className="images">
                      <img src={CroSub} alt="Cro1.png" className="img-pool" />
                      <img
                        src={CroImage}
                        alt="Corons.png"
                        className="img1-pool"
                      />
                    </div>
                    <div className="data-content">
                      <div className="main-data"> Lorem</div>
                      <div className="sub-data">Stake CRO</div>
                    </div>
                  </div>
                </td>
                <td>Lorem, ipsum.</td>
                <td>Lorem ipsum.</td>
                <td>Lorem ipsum.</td>
                <td>Lorem.</td>
                <td className="btn-pool-end">
                  <button
                    className="btn-pool"
                    onClick={() =>
                      setIsOpen({ ModalType: "pool", isOpen: true })
                    }
                  >
                    Earn Now
                  </button>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>
                  <div className="img-content-pool">
                    <div className="images">
                      <img src={CroSub} alt="Cro1.png" className="img-pool" />
                      <img
                        src={CroImage}
                        alt="Corons.png"
                        className="img1-pool"
                      />
                    </div>
                    <div className="data-content">
                      <div className="data"> Lorem, ipsum.</div>
                      <div className="sub-data">Stake CRO</div>
                    </div>
                  </div>
                </td>
                <td>Lorem, ipsum.</td>
                <td>Lorem ipsum .</td>
                <td>Lorem ipsum</td>
                <td>Lorem.</td>
                <td className="btn-pool-end">
                  <button
                    className="btn-pool"
                    onClick={() =>
                      setIsOpen({ ModalType: "pool", isOpen: true })
                    }
                  >
                    Earn Now
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
