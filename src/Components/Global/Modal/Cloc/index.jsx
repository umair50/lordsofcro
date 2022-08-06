import { Fragment } from "react";
import LOC from "../../../../assets/unknown.png";
// import Question from "../../../../assets/question.png";
import "./cloc.css";

const Index = () => {
  return (
    <Fragment>
      <div className="image-content-cloc-cloc">
        {/* <img src={Question} alt="notfound.png" className="img1" /> */}
        <div>Un-Stake to claim the reward</div>
      </div>
      <hr className="hr-line-cloc"></hr>
      <div className="input-field-cloc-2-cloc">
        <div className="input-field-image">
          <img src={LOC} alt="cro.png" className="img1-cloc-cloc" />
        </div>
        <span className="field-data-cloc-cloc">LOC</span>
      </div>
      <div className="staked-value">0.0 Staked</div>
      <div className="input-field-cloc">
        <input type="text" defaultValue="0.0" className="input-data-cloc" />
        <div className="max-value">Max</div>
      </div>
      <div className="input-field-below-cloc">Max you can Claim are “N”</div>
      <div className="footer-cloc">
        <div className="footer-button-cloc">
          <button className="btn-cloc-modal">Claim</button>
        </div>
      </div>
    </Fragment>
  );
};
export default Index;
