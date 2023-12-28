import React from 'react'
import footer from '../../images/@.png'
import fb from '../../images/facebook.svg'
import linkdin from '../../images/linkedin.svg'
import twiter from '../../images/twitter.svg'
import isntagram from '../../images/instagram.svg'

const Footer = () => {
  return (
    <>
      <hr
        className="w-11/12 mx-auto xl:block"
        style={{borderColor: '#3F3E45'}}
      />
      <div className="lg:px-20 lg:py-10">
        {/* --------- */}
        <div className="xl:flex hidden  justify-between">
          {/* --- 01 ----- */}
          <div className="flex justify-between items-center w-4/12">
            <h1 className="fonts font-normal text-[18px] text-white">
              Copyright
            </h1>
            <h1>
              <img src={footer} alt="" />
            </h1>
            <h1 className="fonts font-normal text-[18px] text-white">
              2021 HooBank. All Rights Reserved.
            </h1>
          </div>
          {/* --- 02 ----- */}
          <div className="flex justify-between w-2/12">
            <img src={isntagram} alt="" />
            <img src={fb} alt="" />
            <img src={twiter} alt="" />
            <img src={linkdin} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
