import React, { Fragment } from "react";
import Cro1 from "../../assets/unknown.png";
import "./my-token.css";

const index = ({ value }) => {
  return (
    <Fragment>
      <div className="main-conatiner">
        <h3 className="main-content-my-token">{value}</h3>
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
                <td className="img-content-my-token">
                  <img src={Cro1} alt="cro.png" className="img-my-token" />
                  Lorem.
                </td>
                <td>Lorem.</td>
                <td>Lorem.</td>
                <td>Lorem.</td>
                <td>Lorem.</td>
              </tr>

              <tr>
                <td>2</td>
                <td className="img-content-my-token">
                  <img src={Cro1} alt="Cro1.png" className="img-my-token" />
                  Lorem.
                </td>
                <td>Lorem.</td>
                <td>Lorem.</td>
                <td>Lorem.</td>
                <td>Lorem.</td>
              </tr>

              <tr>
                <td>3</td>
                <td className="img-content-my-token">
                  <img src={Cro1} alt="Cro1.png" className="img-my-token" />
                  Lorem.
                </td>
                <td>Lorem.</td>
                <td>Lorem.</td>
                <td>Lorem.</td>
                <td>Lorem.</td>
              </tr>
              <tr>
                <td>4</td>
                <td className="img-content-my-token">
                  <img src={Cro1} alt="Corons.png" className="img-my-token" />
                  Lorem.
                </td>
                <td>Lorem.</td>
                <td>Lorem.</td>
                <td>Lorem.</td>
                <td>Lorem.</td>
              </tr>
              <tr>
                <td>5</td>
                <td className="img-content-my-token">
                  <img src={Cro1} alt="Cro1.png" className="img-my-token" />{" "}
                  Lorem.
                </td>
                <td>Lorem.</td>
                <td>Lorem.</td>
                <td>Lorem.</td>
                <td>Lorem.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default index;
