import React from 'react'
import group from '../../../images/Group 481727.png'
import send from '../../../images/send.png'
import shield from '../../../images/shield.png'
const Business = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row sm:px-8 lg:px-20 mb-10">
        <div className="business-details text-white md:w-11/12  lg:w-8/12">
          <h1 className="fonts font-semibold px-8 lg:px-0 text-[30px] md:text-[48px] lg:text-[48px]">
            You do the business,
            <br /> we’ll handle the money.
          </h1>
          <h4 className="fonts font-normal px-8 lg:px-0 pt-2 lg:pt-0 text-[16px] md:text-[18px] lg:text-[18px] opacity-70">
            With the right credit card, you can improve your financial <br />{' '}
            life by building credit, earning rewards and saving money. <br />{' '}
            But with hundreds of credit cards on the market.
          </h4>
          <button
            className="bg-[#5CE1E6] hover:bg-white rounded-xl mx-8 lg:mx-0 my-10 text-black fonts text-lg"
            style={{width: '170px', height: '64px'}}
          >
            Get Started
          </button>
        </div>
        <div className="business-reward text-white px-8 md:px-2 sm:py-10 md:py-10 md:w-11/12  lg:px-0 lg:w-4/12">
          <div className="flex gap-2 py-5 hover:bg-[#2e2b36] rounded-xl px-2">
            <div>
              <img src={group} alt="group" />
            </div>
            <div>
              <h1 className="fonts font-semibold text-[18px]">Rewards</h1>
              <p className="fonts opacity-70 font-normal text-[16px]">
                The best credit cards offer some tantalizing combinations of
                promotions and prizes
              </p>
            </div>
          </div>
          <div className="flex gap-2 hover:bg-[#2e2b36] py-5 px-2 rounded-xl">
            <div>
              <img src={shield} alt="shield" />
            </div>
            <div>
              <h1 className="fonts font-semibold text-[18px]">100% Secured</h1>
              <p className="fonts opacity-70 font-normal text-[16px]">
                We take proactive steps make sure your information and
                transactions are secure.
              </p>
            </div>
          </div>
          <div className="flex gap-2 py-5 hover:bg-[#2e2b36] rounded-xl px-2">
            <div>
              <img src={send} alt="send" />
            </div>
            <div>
              <h1 className="fonts font-semibold text-[18px]">
                Balance Transfer
              </h1>
              <p className="fonts opacity-70 font-normal text-[16px]">
                A balance transfer credit card can save you a lot of money in
                interest charges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Business
