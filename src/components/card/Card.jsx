import React from 'react'
import card from '../../images/card.png'

const Card = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row  px-8 py-10 sm:px-16  lg:px-20 lg:py-20 xl:py-0 justify-between">
        {/* ---------- */}
        <div className="lg:w-8/12">
          <h1 className="text-white fonts font-semibold text-[30px] md:w-10/12 xl:w-7/12 md:text-[48px] lg:text-[40px]">
            Find a better card deal in few easy steps.
          </h1>
          <p className="text-white fonts w-10/12 opacity-70 font-normal pt-4 text-[16px] lg:text-[18px]">
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <button
            className="bg-[#5CE1E6] hover:bg-white rounded-xl  my-10 text-black fonts text-lg"
            style={{width: '170px', height: '64px'}}
          >
            Get Started
          </button>
        </div>
        {/* ------ */}
        <div className="pt-2 lg:w-5/12">
          <img src={card} width={500} alt="" />
        </div>
      </div>
    </>
  )
}

export default Card
