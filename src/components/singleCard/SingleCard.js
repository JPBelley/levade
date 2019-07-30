import React from "react";
import Place from '../../images/lieux/military_base.jpg';

import './SingleCard.scss';

const SingleCard = () => (

  <div className="card">
    <div className="card-content">
      <div className="card-text">La Base Militaire</div>
      <div className="card-overlay"></div>
      <img src={Place} alt="" />
    </div>
  </div>
)

export default SingleCard
