import ExecutiveSlider from '@/components/ExecutiveSlider'
import React from 'react'
import Link from 'next/link'
import { RiYoutubeLine } from 'react-icons/ri'

// framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '@/variants'
import WorkSlider from '@/components/WorkSlider'


const index = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
    <div className="container mx-auto h-full flex flex-col justify-center">
      {/* title */}
      <motion.h2 
      variants={fadeIn('up',0.2)} 
      initial='hidden'
      animate='show'
      exit='hidden'
      className="h2 mb-8 xl:mb-0">
        Our <span className="text-emerald-400">Executives.</span>
      </motion.h2>
      {/* slider */}
      <motion.div
      variants={fadeIn('up', 0.4)}
      initial='hidden'
      animate='show'
      exit='hidden'
      >
        
        <ExecutiveSlider/>
      </motion.div>
    </div>
  </div>
    
  )
}

export default index