import React from 'react'

import AnishaAvatar from '../../../assets/img/avatar-anisha.png';
import AliAvatar from '../../../assets/img/avatar-ali.png';
import RichardAvatar from '../../../assets/img/avatar-richard.png';

const Testimonials = () => {
  return (
    <div id='testimonials'>
      <div className='max-w-6xl px-5 mx-auto mt-32 text-center'>
        <h2 className='text-4xl font-bold text-center'>What's the difference about Manage?</h2>

        <div className='flex flex-col justify-center space-y-12 mt-24 md:space-x-6 md:flex-row'>

          {/* Testimonial One */}
          <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
            <img className='w-16 -mt-14' src={AnishaAvatar} alt="anishaAvatar" />
            <h5 className='text-lg font-bold'>Anisha Li</h5>
            <p className='text-sm text-darkGrayisBlue '>"Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestone at all times keeps keeps everyone motivated"</p>
          </div>

          {/* Testimonial Two */}
          <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
            <img className='w-16 -mt-14' src={AliAvatar} alt="anishaAvatar" />
            <h5 className='text-lg font-bold'>Ali Bravo</h5>
            <p className='text-sm text-darkGrayisBlue '>"We have been able to cancel so many subscription since using manage. There is no more cross channel confusion and everyone is much more focused"</p>
          </div>

          {/* Testimonial Three */}
          <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
            <img className='w-16 -mt-14' src={RichardAvatar} alt="anishaAvatar" />
            <h5 className='text-lg font-bold'>Richard Watts</h5>
            <p className='text-sm text-darkGrayisBlue'>"Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestone at all times keeps keeps everyone motivated"</p>
          </div>
        </div>

        <div className='my-16'>
          <a
            href="/get-started"
            className="p-3 px-6 pt-2 bg-brightRed text-white rounded-full baseline hover:bg-brightRedLight"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  )
}

export default Testimonials