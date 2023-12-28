import React from 'react'
import playstore from '../../images/Group.png'
import apple from '../../images/apple.svg'
import bill from '../../images/bill.png'
const Payment = () => {
  return (
    <>
      <div className="text-white flex flex-col lg:flex-col xl:flex-row lg:justify-between sm:px-8  lg:px-20 lg:py-2">
        {/* ---------- */}
        <div className="lg:w-10/12  mx-12 md:mx-10 lg:mx-0 lg:block">
          <img src={bill} alt="" />
        </div>
        {/* --------- */}
        <div className="xl:ml-[400px] sm:py-10 xl:py-16">
          <h1 className="fonts font-semibold px-8 xl:px-0 md:w-9/12 text-[30px] md:text-[48px] xl:text-[40px] lg:text-[48px]">
            Easily control your billing & invoicing.
          </h1>
          <p className="fonts font-normal text-[16px] w-11/12 px-8 xl:px-0 md:text-[18px] lg:text-[18px] py-5 w-12/12 opacity-70">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci{' '}
            <br className="hidden sm:block md:hidden lg:hidden" /> rhoncus
            aliporttitor integer platea placerat.
          </p>
          <div className="inline-flex flex-col md:flex-row lg:flex-row lg:py-4 px-8 lg:px-0 lg:w-8/12 justify-between">
            <img
              src={apple}
              className="mb-6 md:mb-0 w-8/12 mr-4 sm:w-6/12 lg:mb-0"
              alt=""
            />
            <img src={playstore} className="w-8/12 sm-w-6/12" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Payment
