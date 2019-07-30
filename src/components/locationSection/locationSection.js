import React from "react"
import { Parallax } from 'react-scroll-parallax';

import SingleCard from '../singleCard/SingleCard';

import './LocationSection.scss';

const LocationSection = () => (

  <section className="container">
    <h2>
      <Parallax
        y={[8, -8]}
      >
        Les lieux
      </Parallax>
    </h2>

    <div className="cards-container">
      <SingleCard />
      <SingleCard />
      <SingleCard />
    </div>
  </section>
)

export default LocationSection
