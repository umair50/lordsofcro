import "./index.css";
import Cro1 from "../../assets/unknown.png";
// import Cronos from "../../assets/cronos.png";
import { Fragment } from "react";

const Index = ({ value }) => {
  return (
    <Fragment>
      <div className="main-conatiner">
        <h3 className="main-content-token">{value}</h3>
        <div className="table-data">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Price Change</th>
                <th>Volume 24H</th>
                <th>Liquidity</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td className="img-content">
                  <img src={Cro1} alt="cro.png" className="img-token" />
                  Lorem, ipsum.
                </td>
                <td>Lorem, ipsum.</td>
                <td>Lorem ipsum.</td>
                <td>Lorem, ipsum.</td>
                <td>Lorem.</td>
              </tr>

              <tr>
                <td>2</td>
                <td className="img-content">
                  <img src={Cro1} alt="Cro1.png" className="img-token" />
                  Lorem ipsum.
                </td>
                <td>Lorem, ipsum.</td>
                <td>Lorem ipsum.</td>
                <td>Lorem ipsum.</td>
                <td>Lorem.</td>
              </tr>

              <tr>
                <td>3</td>
                <td className="img-content">
                  <img src={Cro1} alt="cro.png" className="img-token" />
                  Lorem, ipsum.
                </td>
                <td>Lorem, ipsum.</td>
                <td>Lorem ipsum.</td>
                <td>Lorem ipsum.</td>
                <td>Lorem.</td>
              </tr>
              <tr>
                <td>4</td>
                <td className="img-content">
                  <img src={Cro1} alt="Corons.png" className="img-token" />
                  Lorem, ipsum.
                </td>
                <td>Lorem, ipsum.</td>
                <td>Lorem ipsum.</td>
                <td>Lorem ipsum.</td>
                <td>Lorem.</td>
              </tr>
              <tr>
                <td>5</td>
                <td className="img-content">
                  <img src={Cro1} alt="cro.png" className="img-token" />
                  Lorem, ipsum.
                </td>
                <td>Lorem, ipsum.</td>
                <td>Lorem ipsum.</td>
                <td>Lorem ipsum.</td>
                <td>Lorem.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};
export default Index;
