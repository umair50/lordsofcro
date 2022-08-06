import "./farm.css";
import CroSub from "../../assets/unknown.png";
// import CroMain from "../../assets/Cro-main.png";
import CroImage from "../../assets/image.png";
import { Fragment } from "react";
import Modal from "../../Components/Global/Modal";

const Index = ({ value, setIsOpen, isOpen }) => {
  return (
    <Fragment>
      {/* {console.log(isOpen.ModalType.moda_Array[1].Modal_farms)} */}
      {isOpen.isOpen && isOpen.ModalType === "Farms" && (
        <Modal setIsOpen={setIsOpen} isOpen={isOpen} />
      )}
      <div className="main-conatiner">
        <h3 className="main-content-farms">{value}</h3>
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
                  <div className="img-content-farm">
                    <div className="images-farms">
                      <img src={CroSub} alt="Cro1.png" className="img-farms" />
                      <img
                        src={CroImage}
                        alt="Corons.png"
                        className="img1-farms"
                      />
                    </div>
                    <div className="data-content-farms">
                      <div className="data"> Lorem</div>
                    </div>
                  </div>
                </td>

                <td>Lorem, ipsum.</td>
                <td>Lorem ipsum.</td>
                <td>Lorem ipsum.</td>
                <td>Lorem.</td>
                <td>Lorem</td>
                <td className="btn-farms-end">
                  <button
                    className="btn-farms"
                    onClick={() =>
                      setIsOpen({ ModalType: "Farms", isOpen: true })
                    }
                  >
                    Stake Now
                  </button>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>
                  <div className="img-content-farm">
                    <div className="images-farms">
                      <img src={CroSub} alt="Cro1.png" className="img-farms" />
                      <img
                        src={CroImage}
                        alt="Corons.png"
                        className="img1-farms"
                      />
                    </div>
                    <div className="data-content-farms">
                      <div className="data"> Lorem</div>
                    </div>
                  </div>
                </td>
                <td>Lorem, ipsum.</td>
                <td>Lorem ipsum.</td>
                <td>Lorem ipsum.</td>
                <td>Lorem ipsum</td>
                <td>Lorem .</td>
                <td className="btn-farms-end">
                  <button
                    className="btn-farms"
                    onClick={() =>
                      setIsOpen({ ModalType: "Farms", isOpen: true })
                    }
                  >
                    Stake Now
                  </button>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>
                  <div className="img-content-farm">
                    <div className="images-farms">
                      <img src={CroSub} alt="Cro1.png" className="img-farms" />
                      <img
                        src={CroImage}
                        alt="Corons.png"
                        className="img1-farms"
                      />
                    </div>
                    <div className="data-content-farms">
                      <div className="data"> Lorem</div>
                    </div>
                  </div>
                </td>
                <td>Lorem, ipsum.</td>
                <td>Lorem ipsum.</td>
                <td>Lorem ipsum.</td>
                <td>Lorem ipsum.</td>
                <td>Lorem.</td>
                <td className="btn-farms-end">
                  <button
                    className="btn-farms"
                    onClick={() =>
                      setIsOpen({ ModalType: "Farms", isOpen: true })
                    }
                  >
                    Stake Now
                  </button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <div className="img-content-farm">
                    <div className="images-farms">
                      <img src={CroSub} alt="Cro1.png" className="img-farms" />
                      <img
                        src={CroImage}
                        alt="Corons.png"
                        className="img1-farms"
                      />
                    </div>
                    <div className="data-content-farms">
                      <div className="data"> Lorem</div>
                    </div>
                  </div>
                </td>
                <td>Lorem, ipsum.</td>
                <td>Lorem ipsum.</td>
                <td>Lorem ipsum.</td>
                <td>Lorem, ipsum.</td>
                <td>Lorem.</td>
                <td className="btn-farms-end">
                  <button
                    className="btn-farms"
                    onClick={() =>
                      setIsOpen({ ModalType: "Farms", isOpen: true })
                    }
                  >
                    Stake Now
                  </button>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  <div className="img-content-farm">
                    <div className="images-farms">
                      <img src={CroSub} alt="Cro1.png" className="img-farms" />
                      <img
                        src={CroImage}
                        alt="Corons.png"
                        className="img1-farms"
                      />
                    </div>
                    <div className="data-content-farms">
                      <div className="data"> Lorem</div>
                    </div>
                  </div>
                </td>
                <td>Lorem, ipsum.</td>
                <td>Lorem ipsum.</td>
                <td>Lorem ipsum.</td>
                <td>Lorem, ipsum.</td>
                <td>Lorem.</td>
                <td className="btn-farms-end">
                  <button
                    className="btn-farms"
                    onClick={() =>
                      setIsOpen({ ModalType: "Farms", isOpen: true })
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
