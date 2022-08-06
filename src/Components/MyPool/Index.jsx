import { Fragment } from "react";
import CroSub from "../../assets/unknown.png";
// import CroMain from "../../assets/Cro-main.png";
import CroImage from "../../assets/image.png";

// import Modal from "../Global/Modal";
import "./mypool.css";

const Index = ({ value, setIsOpen, isOpen }) => {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      {/* {isOpen && <Modal setIsOpen={setIsOpen} ModalType={"pool"} />} */}
      <div className="main-conatiner">
        <h3 className="main-content-my-pool">{value}</h3>
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
                  <div className="img-content-my-pool">
                    <div className="images-my-pool">
                      <img
                        src={CroSub}
                        alt="Cro1.png"
                        className="img-my-pool"
                      />
                      <img
                        src={CroImage}
                        alt="Corons.png"
                        className="img1-my-pool"
                      />
                    </div>
                    <div className="data-content-my-pool">
                      <div className="data"> Lorem.</div>
                      <div className="sub-data-my-pool">Stake CRO</div>
                    </div>
                  </div>
                </td>
                <td>Lorem.</td>
                <td>Lorem.</td>
                <td>Lorem.</td>
                <td>Lorem.</td>
                <td className="my-pool-end">
                  <button className="btn-my-pool">Unstake</button>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>
                  <div className="img-content-my-pool">
                    <div className="images-my-pool">
                      <img
                        src={CroSub}
                        alt="Cro1.png"
                        className="img-my-pool"
                      />
                      <img
                        src={CroImage}
                        alt="Corons.png"
                        className="img1-my-pool"
                      />
                    </div>
                    <div className="data-content-my-pool">
                      <div className="main-data"> Lorem</div>
                      <div className="sub-data-my-pool">Stake CRO</div>
                    </div>
                  </div>
                </td>
                <td>Lorem.</td>
                <td>Lorem.</td>
                <td>Lorem.</td>
                <td>Lorem.</td>
                <td className="my-pool-end">
                  <button className="btn-my-pool">Unstake</button>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>
                  <div className="img-content-my-pool">
                    <div className="images-my-pool">
                      <img
                        src={CroSub}
                        alt="Cro1.png"
                        className="img-my-pool"
                      />
                      <img
                        src={CroImage}
                        alt="Corons.png"
                        className="img1-my-pool"
                      />
                    </div>
                    <div className="data-content-my-pool">
                      <div className="data"> Lorem.</div>
                      <div className="sub-data-my-pool">Stake CRO</div>
                    </div>
                  </div>
                </td>
                <td>Lorem.</td>
                <td>Lorem.</td>
                <td>Lorem.</td>
                <td>Lorem.</td>
                <td className="my-pool-end">
                  <button className="btn-my-pool">Unstake</button>
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
