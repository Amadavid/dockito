import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1Fr_1fr] gap-14 my-10 mt-40 text-sm'>

            {/* ---------left side ----------*/}

            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'> This company was ceated to address patients and doctors time schedule</p>

            </div>

            {/* ---------center side ----------*/}

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
                
            </div>

            {/* ---------right side ----------*/}

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+234-8103-2349-7889</li>
                    <li>amadavid20@gmail.com</li>
                </ul>
                
            </div>
        </div>
        <div>
            {/*=-------- copyight text=========---*/}
            <p className='py-5 text-sm text-center'>Copyright Dockito 2024 - All Rights reserved</p>

        </div>
      
    </div>
  )
}

export default Footer
