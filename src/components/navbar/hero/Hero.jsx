import React from 'react'
import robot from '../../../images/robot.png'
import discount from '../../../images/Discount.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSquareArrowUpRight} from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (
    <>
      <div className="main">
        {/* main */}
        <div className="flex flex-col lg:flex-row">
          {/* first */}
          <div className="hero-text mt-10 lg:mt-20 lg:pl-20 lg:w-8/12 relative">
            <h3 className="text-white bg-black rounded-xl w-8/12 ml-8 sm:w-5/12 sm:mx-0 sm:ml-14 md:w-6/12 md:mx-0 md:ml-14  lg:mx-0  lg:w-6/12 lg:p-1 flex items-center content-center lg:text-center p-3">
              <img style={{paddingLeft: '15px'}} src={discount} alt="icon" />
              <span className="pl-2 fonts text-sm md:text-lg lg:text-lg font-regular">
                20% <span className="opacity-70">DISCOUNT FOR</span> 1 MONTH
                <span className="opacity-70"> ACCOUNT</span>
              </span>
            </h3>
            <button className="border-2 hidden lg:block  get border-[#5CE1E6] text-[#5CE1E6] p-7 text-lg font-medium text-start absolute  rounded-full">
              Get{' '}
              <span>
                <FontAwesomeIcon
                  style={{fontSize: '25px', color: 'white'}}
                  icon={faSquareArrowUpRight}
                />
              </span>{' '}
              <br /> Started
            </button>
            <h1 className="fonts text-[40px] pt-2 lg:pt-0 lg:text-[72px] font-semibold w-10/12 lg:mx-0 mx-auto text-white">
              THE NEXT <span className="text-[#5CE1E6]">GENERATION</span>{' '}
              PAYMENT METHOD.
            </h1>
            <h4 className="text-white  font-normal fonts text-lg w-10/12 mx-auto lg:mx-0 lg:w-7/12 opacity-70">
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </h4>
          </div>
          {/* second */}
          <div className="hero-image items-center pt-4 lg:pt-0 lg:w-4/12">
            <img
              src={robot}
              className="w-[100%] h-[100%] relative z-[5]"
              alt="hero-pic"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
