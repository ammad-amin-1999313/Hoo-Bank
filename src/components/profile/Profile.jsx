import React from 'react'
import arrows from '../../images/“.png'
import peopleOne from '../../images/people01.png'
import peopleTwo from '../../images/people02.png'
import peopleThree from '../../images/people03.png'

const Profile = () => {
  return (
    <>
      <div className="flex profile flex-col  px-2 lg:px-20 sm:px-8 sm:py-10 md:py-10 lg:py-10 lg:flex-row justify-between">
        {/* ------- */}
        <div className="w-11/12  check-1 xl:w-3/12 shadow rounded-2xl lg:px-3 px-8 hover:bg-[#2c2c35]">
          <img className="py-10" src={arrows} alt="" />
          <p className="text-white fonts font-normal text-[18px]">
            Money is only a tool. It will take you wherever you wish, but it
            will not replace you as the driver.
          </p>
          <div className="flex  w-12/12 check sm:w-8/12 md:w-8/12 lg:w-10/12 justify-between py-10">
            <img width={48} height={48} src={peopleOne} alt="" />
            <div className="">
              <p className="text-white fonts text-[20px] font-normal">
                Herman Jensen
              </p>
              <p className="text-white fonts font-normal  text-[16px] opacity-70">
                Founder & Leader
              </p>
            </div>
          </div>
        </div>
        {/* -- */}
        <div className="w-11/12 check-2 xl:w-3/12 shadow rounded-2xl lg:px-3 px-8 hover:bg-[#2c2c35]">
          <img className="py-10" src={arrows} alt="" />
          <p className="text-white fonts font-normal text-[18px]">
            Money makes your life easier. If you're lucky to have it, you're
            lucky.
          </p>
          <div className="flex sm:w-8/12 md:w-8/12 lg:w-10/12 justify-between py-16">
            <img width={48} height={48} src={peopleTwo} alt="" />
            <div>
              <p className="text-white fonts text-[20px] font-normal">
                Steve Mark
              </p>
              <p className="text-white fonts font-normal  text-[16px] opacity-70">
                Founder & Leader
              </p>
            </div>
          </div>
        </div>
        {/* -- */}
        <div className=" w-11/12 check-3  xl:w-3/12 shadow rounded-2xl lg:px-3 px-8 hover:bg-[#2c2c35]">
          <img className="py-10" src={arrows} alt="" />
          <p className="text-white fonts font-normal text-[18px]">
            It is usually people in the money business, finance, and
            international trade that are really rich.
          </p>
          <div className="flex sm:w-8/12 md:w-8/12 lg:w-10/12 justify-between py-10">
            <img width={48} height={48} src={peopleThree} alt="" />
            <div>
              <p className="text-white fonts text-[20px] font-normal">
                Kenn Gallagher
              </p>
              <p className="text-white fonts font-normal  text-[16px] opacity-70">
                Founder & Leader
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
