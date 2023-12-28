import React from 'react'
import airbnb from '../../images/airbnb.png'
import binance from '../../images/binance.png'
import dropbox from '../../images/dropbox.png'
import coinbase from '../../images/coinbase.png'
const Stocks = () => {
  return (
    <>
      <div className="xl:flex flex-wrap hidden lg:flex lg:px-28 lg:py-10 items-center justify-between">
        {/* --- 01 ---*/}
        <div>
          <img
            style={{width: '192px', height: '60px'}}
            className=""
            src={airbnb}
            alt=""
          />
        </div>
        {/* --- 02 ---*/}
        <div>
          <img
            style={{width: '192px', height: '38px'}}
            className=""
            src={binance}
            alt=""
          />
        </div>
        {/* --- 03 ---*/}
        <div>
          <img
            style={{width: '189px', height: '41px'}}
            className=""
            src={coinbase}
            alt=""
          />
        </div>
        {/* --- 04 ---*/}
        <div>
          <img
            style={{width: '138px', height: '32px'}}
            className=""
            src={dropbox}
            alt=""
          />
        </div>
        {/* --- */}
      </div>
    </>
  )
}

export default Stocks
