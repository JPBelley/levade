import React from "react";
import { Parallax } from 'react-scroll-parallax';

import './SingleCard.scss';

const SingleCard = props => (
  <div className="card">
    <div className="card-content">
      <div className="card-text">{props.title}</div>
      <Parallax
        y={ props.invert ? [1, -1] : [-1, 1] }
        x={props.invert ? [1, -1] : [-1, 1]}
      >
        <div className="card-overlay"></div>
        <img src={props.picture} alt="" />
      </Parallax>
    </div>
  </div>
)

export default SingleCard
 