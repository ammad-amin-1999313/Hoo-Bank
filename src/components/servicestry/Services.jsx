import React from 'react'

const Services = () => {
  return (
    <>
      <div className="lg:px-20 lg:py-16">
        {/* ---- */}
        <div className="rounded-2xl hover:bg-[#2c2c35] xl:p-20 px-8 sm:px-16 md:px-14 ">
          {/* -------------- MAIN -------------- */}
          <div className="flex flex-col md:flex-row xl:flex xl:flex-row">
            {/* ------------- */}
            <div className="w-11/12 xl:w-8/12">
              <h1 className="fonts text-white font-semibold text-[30px] lg:text-[40px]">
                Let’s try our service now!
              </h1>
              <p className="fonts text-white pt-6  xl:w-8/12 font-normal text-[16px] lg:text-[18px]">
                Everything you need to accept card payments and grow your
                business anywhere on the planet.
              </p>
            </div>
            {/* -------------- */}
            <div className="w-4/12 items-center">
              <div className="items-center text-center">
                <button
                  className="bg-[#5CE1E6] hover:bg-white rounded-xl mx-8 lg:mx-0 my-10 text-black fonts text-lg"
                  style={{width: '170px', height: '64px'}}
                >
                  Get Started
                </button>
              </div>
            </div>
            {/* ----------- */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
