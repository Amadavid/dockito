import React from 'react'

const Header = () => {
  return (
    <div>
        {/* -------leftside -------*/}
        <div>
            <p>
                Book Appointment <br /> With Amazing Doctors
            </p>
            <div>
                <img src={assets.group_profiles} alt="" />
                <p>Go through our list of amazing doctors,<br /> schedule your appointment </p>
            </div>
            <a href="">
                Book appointment <img src={assets.arrow_icon} alt="" />
            </a>
        </div>

        {/* -------Right Side ------ */}
        <div>

        </div>
      
    </div>
  )
}

export default Header
