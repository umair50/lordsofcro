// import Cro from "../../assets/Cro1-main.png";
import CroSub from "../../assets/unknown.png";
import CroImage from "../../assets/image.png";
import { Fragment } from "react";
// import Modal from "../../Components/Global/Modal";
import "./myfarm.css";
const MyFarm = ({ value, setIsOpen, isOpen }) => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      {/* {isOpen && <Modal setIsOpen={setIsOpen} ModalType={"Farms"} />} */}
      <div className="main-conatiner">
        <h3 className="main-my-content">{value}</h3>
        <div className="table-data">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Farm</th>
                <th>Volume 24H</th>
                <th>Volume 7D</th>
                <th>LP Reward Fee 24H</th>
                <th>LP Reward APR</th>
                <th>Liquidity</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <div className="img-content-my-farm">
                    <div className="images-my-farms">
                      <img
                        src={CroSub}
                        alt="Cro1.png"
                        className="img-my-farms"
                      />
                      <img
                        src={CroImage}
                        alt="Corons.png"
                        className="img1-farms"
                      />
                    </div>
                    <div className="data-content-my-farms">
                      <div className="data"> Lorem</div>
                    </div>
                  </div>
                </td>

                <td>Lorem, ipsum.</td>
                <td>Lorem ipsum.</td>
                <td>Lorem ipsum.</td>
                <td>Lorem.</td>
                <td>Lorem</td>
                <td className="btn-my-farms-end">
                  <button className="btn-my-farms">Unstake</button>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>
                  <div className="img-content-my-farm">
                    <div className="images-my-farms">
                      <img
                        src={CroSub}
                        alt="Cro1.png"
                        className="img-my-farms"
                      />
                      <img
                        src={CroImage}
                        alt="Corons.png"
                        className="img1-farms"
                      />
                    </div>
                    <div className="data-content-my-farms">
                      <div className="data"> Lorem</div>
                    </div>
                  </div>
                </td>
                <td>Lorem, ipsum.</td>
                <td>Lorem ipsum.</td>
                <td>Lorem ipsum.</td>
                <td>Lorem ipsum</td>
                <td>Lorem .</td>
                <td className="btn-my-farms-end">
                  <button className="btn-my-farms">Unstake</button>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>
                  <div className="img-content-my-farm">
                    <div className="images-my-farms">
                      <img
                        src={CroSub}
                        alt="Cro1.png"
                        className="img-my-farms"
                      />
                      <img
                        src={CroImage}
                        alt="Corons.png"
                        className="img1-farms"
                      />
                    </div>
                    <div className="data-content-my-farms">
                      <div className="data"> Lorem</div>
                    </div>
                  </div>
                </td>
                <td>Lorem, ipsum.</td>
                <td>Lorem ipsum.</td>
                <td>Lorem ipsum.</td>
                <td>Lorem ipsum.</td>
                <td>Lorem.</td>
                <td className="btn-my-farms-end">
                  <button className="btn-my-farms">Unstake</button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <div className="img-content-my-farm">
                    <div className="images-my-farms">
                      <img
                        src={CroSub}
                        alt="Cro1.png"
                        className="img-my-farms"
                      />
                      <img
                        src={CroImage}
                        alt="Corons.png"
                        className="img1-farms"
                      />
                    </div>
                    <div className="data-content-my-farms">
                      <div className="data"> Lorem</div>
                    </div>
                  </div>
                </td>
                <td>Lorem, ipsum.</td>
                <td>Lorem ipsum.</td>
                <td>Lorem ipsum.</td>
                <td>Lorem, ipsum.</td>
                <td>Lorem.</td>
                <td className="btn-my-farms-end">
                  <button className="btn-my-farms">Unstake</button>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  <div className="img-content-my-farm">
                    <div className="images-my-farms">
                      <img
                        src={CroSub}
                        alt="Cro1.png"
                        className="img-my-farms"
                      />
                      <img
                        src={CroImage}
                        alt="Corons.png"
                        className="img1-farms"
                      />
                    </div>
                    <div className="data-content-my-farms">
                      <div className="data"> Lorem</div>
                    </div>
                  </div>
                </td>
                <td>Lorem, ipsum.</td>
                <td>Lorem ipsum.</td>
                <td>Lorem ipsum.</td>
                <td>Lorem, ipsum.</td>
                <td>Lorem.</td>
                <td className="btn-my-farms-end">
                  <button className="btn-my-farms">Unstake</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};
export default MyFarm;
