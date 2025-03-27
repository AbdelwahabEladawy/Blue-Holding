import React from 'react'
import CompSlider from '../competition-slider/CompSlider'

export default function TopHighlights() {
  return (
    <div className='mt-[120px]'>
          <div className="content">
        <h2 className="secHead text-center">
        Top Highlights
        </h2>
        <p className="desc text-center">
        See who’s setting the bar high with outstanding scores, lightning-fast completions, and unmatched efficiency
        </p>
      </div>

      <CompSlider/>


    </div>
  )
}
