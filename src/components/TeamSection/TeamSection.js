import React from "react"
import { Parallax } from 'react-scroll-parallax';

import SingleCard from '../singleCard/SingleCard';

import './Team.scss';

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
  </section>
)

export default Team
