import React, { useEffect, useState } from 'react'
import '../styles/Slides.css'
import '../Data/Data.js'
import data from '../Data/Data.js'
import Lang from '../assets/lang.png'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function Slider(){
  const [currentSlide, setCurrentSlide] = useState(0);
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  const currentPerson = data[currentSlide];

  const goToNextSlide = () => {
    if (currentSlide === data.length - 1) return;

    setCurrentSlide((current) => ++current);
  };

  const goToPrevSlide = () => {
    if (currentSlide === 0) return;
    setCurrentSlide((current) => --current);
  };

  useEffect(() => {
    const lastIndex = people.lenght - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <section className='all'>
      <div>
        <img src={Lang} alt="icon_lang" className='lang_logo' />
      </div>
      <div className='princ'>
        <article>
          <p className='text'>
            {currentPerson.text}
          </p>
        </article>
        <div className='princ_1'>
          <p className='pName'>{currentPerson.name}</p>
          <div className='fleches'>
            <button className='prev' onClick={goToPrevSlide}>
              <AiOutlineArrowLeft/>
            </button>
            <button className='next' onClick={goToNextSlide}>
              <AiOutlineArrowRight/>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}


 
