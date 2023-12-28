import React from 'react'

const Details = () => {
  return (
    <>
      <div className="main sm:px-6 md:px-10 xl:px-0  py-20">
        <div className="main-inside px-8 text-white flex lg:flex-row flex-wrap lg:items-center justify-between lg:px-20">
          <div className="flex items-center sm:w-6/12 xl:w-3/12 lg:px-0">
            <h1 className="font-semibold fonts text-[30px] lg:text-[40px]">
              3800+
            </h1>
            <h1 className="text-[#5CE1E6] fonts px-2 lg:px-8 font-normal text-[15px] lg:text-[20px]">
              USER ACTIVE
            </h1>
          </div>
          <div
            className="border hidden lg:block"
            style={{borderLeft: '1px', height: '20px'}}
          ></div>
          <div className="flex items-center px-2 lg:px-0">
            <h1 className="font-semibold fonts text-[30px] lg:text-[40px]">
              230+
            </h1>
            <h1 className="text-[#5CE1E6] fonts px-2 lg:px-8 font-normal text-[15px] lg:text-[20px]">
              TRUSTED BY COMPANY
            </h1>
          </div>
          <div
            className="border hidden lg:block"
            style={{borderLeft: '1px', height: '20px'}}
          ></div>
          <div className="flex items-center  lg:px-0">
            <h1 className="font-semibold fonts text-[30px] lg:text-[40px]">
              $220M+
            </h1>
            <h1 className="text-[#5CE1E6] fonts px-2 lg:px-8 font-normal text-[15px] lg:text-[20px]">
              TRANSACTION
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Details
