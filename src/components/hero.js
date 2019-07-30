import React from "react";
import Swiper from 'react-id-swiper';

import 'react-id-swiper/lib/styles/scss/swiper.scss';
import HeroImg from './hero/urbex2.jpg';
import './hero.scss';


const opacityStart = {
  opacity: 1
}
const slide1 = {
  backgroundImage: 'url("https://jpbelley.github.io/levade/static/urbex2-16386b5c5f02b5c00da97e40c3cad2de.jpg")'
};

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

var interleaveOffset = 0.5;

const Hero = () => {

  const params = {
    // loop: true,
    speed: 3000,
    grabCursor: true,
    watchSlidesProgress: true,
    effect: 'fade',
    mousewheelControl: true,
    keyboardControl: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      progress: function () {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          var slideProgress = swiper.slides[i].progress;
          var innerOffset = swiper.width * interleaveOffset;
          var innerTranslate = slideProgress * innerOffset;

          // swiper.slides[i].querySelector(".headline").setAttribute(
          //   "style", "transform: translate3d(" + innerTranslate + "px, 0, 0);");
        }
      },
      touchStart: function () {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = "";
        }
      },
      setTransition: function (speed) {
        var swiper = this;

        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = speed + "ms";
          // swiper.slides[i].querySelector(".headline").style.transition =
          //   (speed * .85) + "ms";
          swiper.slides[i].querySelectorAll(".single-square").forEach(function (square) {
            square.style.transition =
              getRandomArbitrary(0, 2) + "s";
            square.style.opacity =
              "1";
          });
        }
      },
      transitionStart: function (speed) {
        var swiper = this;

        for (var i = 0; i < swiper.slides.length; i++) {
          if (!swiper.slides[i].classList.contains('swiper-slide-active')) {
            swiper.slides[i].querySelectorAll(".single-square").forEach(function (square) {
              square.style.opacity =
                "0";
            });
          }
        }
      }
    }
  }

  return (
    <section className="swiper-container">
      <Swiper {...params}>
        <div className="swiper-slide hero">
          <div className="square-container">
            <div className="single-square" style={opacityStart}> <div style={slide1}></div> </div>
            <div className="single-square" style={opacityStart}> <div style={slide1}></div> </div>
            <div className="single-square" style={opacityStart}> <div style={slide1}></div> </div>
            <div className="single-square" style={opacityStart}> <div style={slide1}></div> </div>
            <div className="single-square" style={opacityStart}> <div style={slide1}></div> </div>
            <div className="single-square" style={opacityStart}> <div style={slide1}></div> </div>
            <div className="single-square" style={opacityStart}> <div style={slide1}></div> </div>
            <div className="single-square" style={opacityStart}> <div style={slide1}></div> </div>
            <div className="single-square" style={opacityStart}> <div style={slide1}></div> </div>
            <div className="single-square" style={opacityStart}> <div style={slide1}></div> </div>
            <div className="single-square" style={opacityStart}> <div style={slide1}></div> </div>
            <div className="single-square" style={opacityStart}> <div style={slide1}></div> </div>
          </div>
          <div className="headline">
            <h1>L'évadé</h1>
          </div>
        </div>
      </Swiper>
      {/* <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div> */}
    </section>
  )
}

export default Hero
