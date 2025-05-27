import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="flex items-center justify-between py-3 mt-20 gap-4">
        <img src={assets.logo} width="150" alt="" />
        <p className="flex-1 border-l border-gray-400 pl-4 text-small text-gray-500 max-sm:hidden">Copyright @Gokul_Nishandh_S_T | All right reserved.</p>
        <div className='flex gap-2.5'>
            <img src={assets.facebook_icon} alt="" widht="35" />
                        <img src={assets.twitter_icon} alt="" widht="35" />
            <img src={assets.instagram_icon} alt="" widht="35" />

        </div>
    </div>
  )
}

export default Footer