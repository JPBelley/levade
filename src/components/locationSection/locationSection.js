import React from "react"
import { Parallax } from 'react-scroll-parallax';
import MilitaryBAse from '../../images/lieux/military_base.jpg';
import Eglise from '../../images/lieux/eglise.jpg';

import SingleCard from '../singleCard/SingleCard';

import './LocationSection.scss';

const LocationSection = () => (

  <section className="container-full">
    <h2>
      <Parallax
        y={[12, -6]}
        x={[3, -3]}
      >
        Les lieux
      </Parallax>
    </h2>

    <div className="cards-container">
      <SingleCard title="La base" invert={true} picture={MilitaryBAse}/>
      <SingleCard title="L'église" invert={false} picture={Eglise} />
      <SingleCard title="Le silo" invert={true} />
      <SingleCard title="La piscine" invert={false} />
    </div>
  </section>
)

export default LocationSection
