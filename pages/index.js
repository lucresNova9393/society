// next image
import Image  from "next/image";

// components
import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectsBtn from "@/components/ProjectsBtn";
import Avatar from "@/components/Avatar";
import HomeSlider2 from "@/components/HomeSlider2";

// framer motion
import {motion} from 'framer-motion'

// variants
import { fadeIn } from '../variants'
import WorkSlider from "@/components/WorkSlider";
import TestimonialSlider from "@/components/TestimonialSlider";


const Home = () => {
  return <div className="bg-primary/60 h-full">
    {/* text */}
    <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
      <div className="text-center flex flex-col justify-center  xl:pt-10 xl:text-left
      h-full container mx-auto">
        {/* title */}
        <motion.h3
        variants={fadeIn('down', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="h3">Civil Society Center For<br/>{' '} 
        <span className="text-emerald-400">Leadership & Followership </span>
        </motion.h3>
        {/* subtitle */}
        <motion.p
        variants={fadeIn('down', 0.3)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-4 xl:mb-4"
        >
Conference of Civil Society was Incorporated as Civil Society Centre for Leadership and Followership by the Laws of the Federal Republic of Nigeria. It is an Umbrella Forum of Civil Societies working for Peace, Security, Defence, Good Governance, Transparency, Anti-Corruption, Education, Social and Economic Development.        </motion.p>
        {/* btn */}
        <div className="flex justify-center xl:hidden relative">
          <ProjectsBtn/>
        </div>
        <motion.div 
        variants={fadeIn('down', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="hidden xl:flex"
        >
          <ProjectsBtn/>
        </motion.div>
      </div>
    </div>
    {/* image */}
    <div className="w-[1200px] h-full absolute right-0 bottom-0">
      {/* bg img */}
      <div className="bg-none xl:bg-explosion1 xl:bg-cover xl:bg-right
      xl:bg-no-repeat w-full h-full absolute mix-blend template-z-0"> {/*mix-blend-color-dodge*/}
      </div>
      {/* particles */}
      <ParticlesContainer />
      {/* Avatar */}
      <motion.div 
      variants={fadeIn('up', 0.5)}
      initial='hidden'
      animate='show'
      exit='hidden'
      transition={{duration: 1, ease:'easeInOut'}}
      className="w-full h-full max-w-[500px] max-h-[500px] absolute -bottom-32
      lg:bottom-0 lg:right-[10%]">
       {/* <Avatar/>*/}
        <HomeSlider2/>
      </motion.div>
      
    </div>
  </div>;
};

export default Home;
