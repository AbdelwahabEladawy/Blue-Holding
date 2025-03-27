import React from 'react'
import Accordion from '../Accordion/Accordion'

export default function FAQ() {
  return (
    <div className='lg:px-16 sm:px-12 px-6 mt-[120px] '>
          <div className="content">
        <h2 className="secHead text-center">
        FAQs
        </h2>
        <p className="desc text-center mb-[40px]">
        Everything You Need to Know to Dominate the Challenge!
        </p>
      </div>

      <Accordion/>
    </div>
  )
}
