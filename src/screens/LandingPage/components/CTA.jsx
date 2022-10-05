import React from 'react'

const CTA = () => {
    return (
        <div id="CTA" className='bg-brightRed'>
            <div className='container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0'>
                <h3 className='text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-md md:text-left'>Simplify how your team works today</h3>
                <div>
                    <a
                        href="/get-started"
                        className="p-3 px-6 pt-2 bg-white text-brightRed rounded-full baseline hover:bg-brightRedLight shadow-2xl hover:bg-gray-200"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CTA