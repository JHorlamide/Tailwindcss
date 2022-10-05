import React from 'react'
import Logo from '../../../assets/img/logo-white.svg'
import FacebookIcon from '../../../assets/img/icon-facebook.svg'
import YoutubeIcon from '../../../assets/img/icon-youtube.svg';
import InstagramIcon from '../../../assets/img/icon-instagram.svg';
import TwitterIcon from '../../../assets/img/icon-twitter.svg';
import PinterestIcon from '../../../assets/img/icon-pinterest.svg';

const Footer = () => {
    return (
        <div id='footer' className='bg-black'>
            <div className='container flex flex-col-reverse justify-between px-6 py-15 md:py-20 mx-auto space-y-8 md:flex-row md:space-y-0'>
                {/* Logo & Socials */}
                <div className='flex flex-col-reverse items-center justify-between space-y-12 md:text-left md:flex-col md:space-y-6 md:items-start'>
                    {/* Copyright */}
                    <div className='mx-auto my-6 text-center text-darkGrayisBlue md:hidden'>
                        Copyright &copy; 2022, All Right Reserved
                    </div>

                    <div>
                        <img className='h-8' src={Logo} alt="logo" />
                    </div>

                    <div className='flex justify-center space-x-4'>
                        <a href="/facebook">
                            <img className='h-8' src={FacebookIcon} alt="facebookIcon" />
                        </a>

                        <a href="/youtube">
                            <img className='h-8' src={YoutubeIcon} alt="YoutubeIcon" />
                        </a>

                        <a href="/twitter">
                            <img className='h-8' src={TwitterIcon} alt="TwitterIcon" />
                        </a>

                        <a href="/pinterest">
                            <img className='h-8' src={PinterestIcon} alt="PinterestIcon" />
                        </a>

                        <a href="/instagram">
                            <img className='h-8' src={InstagramIcon} alt="InstagramIcon" />
                        </a>
                    </div>
                </div>

                {/* Nav Links */}
                <div className='flex justify-around space-x-32 px-50'>
                    <div className='flex flex-col space-y-3 text-white'>
                        <a className='hover:text-brightRed' href="/home">Home</a>
                        <a className='hover:text-brightRed' href="/pricing">Pricing</a>
                        <a className='hover:text-brightRed' href="/products">Products</a>
                        <a className='hover:text-brightRed' href="/about">About Us</a>
                    </div>

                    <div className='flex flex-col space-y-3 text-white'>
                        <a className='hover:text-brightRed' href="/career">Careers</a>
                        <a className='hover:text-brightRed' href="/community">Community</a>
                        <a className='hover:text-brightRed' href="/privacy-policy">Privacy Policy</a>
                    </div>
                </div>

                {/* Copyright & mail Notification */}
                <div className='flex flex-col justify-between '>
                    <form action="">
                        <div className='flex space-x-3'>
                            <input
                                className='flex-1 px-4 focus:outline-none rounded-full p-2'
                                type="text"
                                placeholder='Update in your inbox'
                            />
                            <button className='px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none'>Go</button>
                        </div>
                    </form>

                    <div className='hidden text-darkGrayisBlue md:block'>
                        Copyright &copy; 2022, All Right Reserved
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer