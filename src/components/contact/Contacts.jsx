import React from 'react'
import logo from '../../images/logo.svg'
const Contacts = () => {
  return (
    <>
      <div className="xl:px-20 lg:px-10 xl:py-10">
        {/* ---------- */}
        <div className="flex flex-col px-6 sm:px-14 lg:flex lg:flex-row justify-between">
          {/* --------- */}
          <div className="xl:w-3/12 lg:w-2/12">
            <img width={256} height={72} src={logo} alt="" />
            <p className="fonts font-normal py-6 text-white text-[16px] lg:text-[18px]">
              A new way to make the payments easy, reliable and secure.
            </p>
          </div>
          <div className="py-4 lg:py-0">
            <h1 className="fonts font-medium text-white pb-2 lg:text-[18px]">
              Usefull Links
            </h1>
            <h4 className="fonts font-normal opacity-70 py-1 text-white text-[16px]">
              Content
            </h4>
            <h4 className="fonts font-normal opacity-70 py-1 text-white text-[16px]">
              How it Works
            </h4>
            <h4 className="fonts font-normal opacity-70 py-1 text-white text-[16px]">
              Create
            </h4>
            <h4 className="fonts font-normal opacity-70 py-1 text-white text-[16px]">
              Explore
            </h4>
            <h4 className="fonts font-normal opacity-70 py-1 text-white text-[16px]">
              Terms & Services
            </h4>
          </div>
          <div className="py-4 lg:py-0">
            <h1 className="fonts font-medium pb-2 text-white lg:text-[18px]">
              Community
            </h1>
            <h4 className="fonts font-normal opacity-70 py-1 text-white text-[16px]">
              Help Center
            </h4>
            <h4 className="fonts font-normal opacity-70 py-1 text-white text-[16px]">
              Partners
            </h4>
            <h4 className="fonts font-normal opacity-70 py-1 text-white text-[16px]">
              Suggestions
            </h4>
            <h4 className="fonts font-normal opacity-70 py-1 text-white text-[16px]">
              Blog
            </h4>
            <h4 className="fonts font-normal opacity-70 py-1 text-white text-[16px]">
              Newsletters
            </h4>
          </div>
          <div className="py-4 lg:py-0">
            <h1 className="fonts font-medium pb-2 text-white lg:text-[18px]">
              Partner
            </h1>
            <h4 className="fonts font-normal py-1 text-white opacity-70 text-[16px]">
              Our Partner
            </h4>
            <h4 className="fonts font-normal py-1 opacity-70 text-white text-[16px]">
              Become a Partner
            </h4>
          </div>
          {/* --------- */}
        </div>
      </div>
    </>
  )
}

export default Contacts
