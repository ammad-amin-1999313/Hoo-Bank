import React, {useState} from 'react'
import logo from '../../images/logo.png'
import Hamburger from 'hamburger-react'
const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <div className="">
        <div className="flex justify-between px-2 py-6 md:px-20 md:py-6 lg:px-20 lg:py-6">
          <div className="logo flex items-center fonts">
            <img src={logo} alt="logo" />
            <span className="text-white pl-1 font-semibold text-lg">Hoo</span>
            <span className="text-[#5CE1E6] font-semibold text-lg">Bank</span>
          </div>
          {/* desktop */}
          <div className="hidden lg:block nav-elements w-3/12 py-4">
            <ul className="flex text-white items-center  fonts justify-between">
              <li className="text-xs font-normal">Home</li>
              <li className="text-xs font-normal opacity-70 hover:opacity-100">
                About Us
              </li>
              <li className="text-xs font-normal opacity-70 hover:opacity-100">
                Features
              </li>
              <li className="text-xs font-normal opacity-70 hover:opacity-100">
                Solution
              </li>
            </ul>
          </div>
          {/* mobile */}
          <div className="lg:hidden">
            <Hamburger color="white" toggle={setOpen} toggled={isOpen} />
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden  text-white bg-[#20232f]">
            <ul className="flex text-white items-center w-11/12 mx-auto justify-between  sm:w-full sm:flex sm:justify-between md:w-9/12 md:flex md:justify-between fonts">
              <li className="text-xs p-3">Home</li>
              <li className="text-xs p-3">About Us</li>
              <li className="text-xs p-3">Features</li>
              <li className="text-xs p-3">Solution</li>
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar
