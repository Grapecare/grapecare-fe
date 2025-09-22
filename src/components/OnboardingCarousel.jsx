import React, { useState } from 'react'
import Bloodbank from './BloodBank';
import SaveSoul from './SaveSoul';
import HealthPlan from './HealthPlan';

function OnboardingCarousel() {
    const [currentPage, setCurrentPage] = useState(0);

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % pages.length);
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
    };

    const pages = [
        { id: 1, content: <Bloodbank gotoNext={nextPage} goBack={prevPage}/> },
        { id: 2, content: <SaveSoul gotoNext={nextPage} goBack={prevPage}/>},
        { id: 3, content: <HealthPlan goBack={prevPage}/> },
    ];

  return (
    <div className="carousel-container">
      <div
        className="carousel-slider"
        style={{ transform: `translateX(-${currentPage * 100}vw)` }}
      >
        {pages.map((page) => (
          <div key={page.id} className="carousel-page">
            {page.content}
          </div>
        ))}
      </div>

      {/* Navigation */}
      {/* {currentPage > 0 && (
        <button className="nav-button back" onClick={prevPage}>
          ⬅
        </button>
      )}
      {currentPage < pages.length - 1 && (
        <button className="nav-button next" onClick={nextPage}>
          Next ➡
        </button>
      )} */}
    </div>
  )
}

export default OnboardingCarousel