import React from 'react'

const index = () => {
    return (
        <div className='relative bg-black'>
            <div className='flex items-center justify-between  p-6'>
                <h4 className='text-white'>Logo</h4>

                <div className='text-white'>Profile</div>
            </div>

            <div className='flex items-center justify-center mt-10'>
                {/* Text */}
                <div className='flex items-center justify-between'>
                    <h5 className='text-white'>Your Plan</h5>

                    <a className='text-white' href="/">Change Plan</a>
                </div>

                {/* Card */}
                <div className='bg-green-500 rounded-md'>
                    <h2>Spotify Individual</h2>
                </div>
            </div>
        </div>
    )
}

export default index