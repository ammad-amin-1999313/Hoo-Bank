import React from 'react'

const About = () => {
  return (
    <>
      <div className="flex flex-col md:w-11/12 px-10 sm:px-16 lg:flex lg:justify-between lg:py-20 lg:flex-row  md:flex-col  md:px-20">
        <h1 className="text-white lg:w-[300px] xl:w-[350px] py-10 fonts md:text-[40px] font-semibold lg:text-[40px]">
          What people are saying about us
        </h1>
        <p className="text-white lg:w-[400px] xl:w-[450px] fonts opacity-70 items-center flex font-regular text-[16px] md:text-[18px]">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </>
  )
}

export default About
