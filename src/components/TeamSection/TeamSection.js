import React from "react"
import { Parallax } from 'react-scroll-parallax';

import Eglise from '../../images/lieux/eglise.jpg';

import './TeamSection.scss';

const Team = () => (

  <section className="container-full">
    <h2>
      <Parallax
        y={[8, -8]}
        x={[-3, 3]}
      >
        L'équipe
      </Parallax>
    </h2>

    <div className="name-container left">
      <div className="name">
        <span className="first-name">Jean-Philippe</span>
        <span className="last-name">Belley</span>
        <div className="name-img-container">
          <img src={Eglise} alt="" />
        </div>
      </div>
      <div className="name">
        <span className="first-name">Pierre-Louis</span>
        <span className="last-name">Gourga</span>
        <div className="name-img-container">
          <img src={Eglise} alt="" />
        </div>
        </div>
    </div>

    <div className="name-container right">
      <div className="name">
         
        <span className="first-name">Bat de</span>
        <span className="last-name">la batte</span>
        <div className="name-img-container">
          <img src={Eglise} alt="" />
        </div>
      </div>
    </div>
  </section>
)

export default Team
