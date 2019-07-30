import React from "react"
import { Parallax } from 'react-scroll-parallax';

import ImageJP from './jp_dark.jpg';
import './aboutSection.scss';

const AboutSection = () => (

    <section className="container">
      <h2>
        <Parallax
          y={[8, -8]}
        >
          À propos
        </Parallax>
      </h2>
      <div className="paragraph paragraph-left">
          <p>
            L'évadé est un projet né à Montréal. C'est un regroupement de jeunes passionnés par la photographie ainsi que l'aventure qui parcours les villes à la recherche d'endroits abandonnés et/ou inexplorés.
            La recherche d'une photo unique et dans un endroit où peu de gens ont encore accès leur procure cette motivation qui les pousse à aller toujours plus loin.
          </p>
        </div>
        <div className="img-container">
          <Parallax
            y={[-10, 10]}
          >
            <img src="https://jpbelley.github.io/levade/static/jp_dark-52adc4dd7281453a6ae3ff1d1bc09f9d.jpg" alt="" />
          </Parallax>
        </div>
    </section>
)

export default AboutSection
