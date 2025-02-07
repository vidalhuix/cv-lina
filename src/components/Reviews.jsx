import React, { useState, useEffect } from 'react';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

export const Reviews = () => {
  const [showAll, setShowAll] = useState(false);
  const [reviewsToShow, setReviewsToShow] = useState(1);

  const reviews = [
    {
      name: 'Albin, Edvin, Linnea och Kristofer.',
      date: 'juli, 2023',
      text: 'Tack, för din värme, trygghet och klokskap du gett våra barn! vi kommer att sakna dig massor. Stora kramar från.',
    },
    {
      name: 'Arni Barnie',
      date: 'April 2, 2021',
      text: 'Hon är bäst, ingen protest',
    },
    {
      name: 'Elna Pelma',
      date: 'May 10, 2022',
      text: 'Hon är bästa i väldren.',
    },
    {
      name: 'Ivy',
      date: 'May 25, 2023',
      text: 'Jag älskar henne mer än pappa.',
    },
    {
      name: 'Sarah Huang',
      date: 'June 1, 2024',
      text: 'Amazing experience! Clean, comfortable, and welcoming. Sunside is the best hotel ever.',
    },
  ];

  useEffect(() => {
    const updateReviewsToShow = () => {
      const width = window.innerWidth;
      if (width > 1000) {
        setReviewsToShow(3);
      } else if (width > 700) {
        setReviewsToShow(2);
      } else {
        setReviewsToShow(1);
      }
    };

    updateReviewsToShow();
    window.addEventListener('resize', updateReviewsToShow);
    return () => window.removeEventListener('resize', updateReviewsToShow);
  }, []);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div id="reviews" className="text-center">
      <h1 className="mb-4 text-center text-4xl font-bold text-gray-800">
        Recension
      </h1>
      <div className="mx-auto mt-6 flex max-w-5xl flex-wrap justify-center">
        {reviews
          .slice(0, showAll ? reviews.length : reviewsToShow)
          .map((review, index) => (
            <div
              key={index}
              className="m-4 flex min-h-[210px] w-72 flex-col justify-between rounded-lg border border-gray-100 bg-white p-6 text-gray-700 shadow-lg"
            >
              <div className="relative text-lg text-gray-800 italic">
                <span className="absolute -top-2 -left-2 text-4xl text-emerald-700">
                  <RiDoubleQuotesL size={20} />
                </span>
                {review.text}
                <span className="absolute -right-2 -bottom-2 text-4xl text-emerald-700">
                  <RiDoubleQuotesR size={20} />
                </span>
              </div>
              <div className="mt-4 text-right text-sm text-emerald-700">
                {review.name} <br />
                {review.date} <br />
              </div>
            </div>
          ))}
      </div>
      <button
        onClick={toggleShowAll}
        className="mt-6 mb-16 transform rounded-lg bg-emerald-700 px-6 py-2 text-lg text-white transition hover:scale-105 hover:bg-[#d3af97]"
      >
        {showAll ? 'Visa mindre' : 'Mer'}
      </button>
    </div>
  );
};
