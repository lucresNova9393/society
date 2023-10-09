import React, { useState } from "react";

// icons
import {
  FaHandHoldingWater,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaPeopleCarry, FaSalesforce,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiMailgun,
  SiOnlyoffice,
  SiPersonio,
  SiGroupon,
  SiGroupme,
} from "react-icons/si";

// about data
export const aboutData = [
  {
    title: 'Our Vision',
    info: [
      {
        title: ' To be a Frontline Platform for Cooperation, Collaboration, Partnership, Networking and Synergy between ',
        /*{icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],}*/
      },
      {
        title: ' Citizen Groups, Civil Society, Non-Governmental and Community Based Organizations for effective ',
        //icons: [<FaPeopleCarry />, <FaHandHoldingWater />, <SiGroupme />],
      },
      {
        title: ' engagement with Governments, Institutions, and other Authorities.'
      }
    ],
  },
  {
    title: 'Our Mission',
    info: [
      {
        title: 'Building a Vibrant, Viable and Viral Civil Society.',
        //stage: '2011 - Till Date',
      },
      {
       // title: '- The Best Space For Conflict and Peace Resolution in Nigeria.',
       // stage: '2009 - Till Date',
      },
    ],
  },
  {
    title: 'About Us',
    info: [
      {
        title: 'The Conference of Civil Societies was Incorporated as Civil Society Centre for Leadership and Followership  ',
        //stage: '2012 - Till Date',
      },
      {
        title: 'by the Laws of the Federal Republic of Nigeria. ',
        //stage: '2010 - Till Date',
      },
      {
        title: 'It is an Umbrella Forum of Civil Societies working for Peace, Security, Defence, Good Governance, Transparency, Anti-Corruption, Education, Social and Economic Development.',
        //stage: '2008 - Till Date',
      },
    ],
  },
  
];

// components
import Avatar from "@/components/Avatar";
import Circles from "@/components/Circles";


// framer motion
import {motion} from 'framer-motion'
import { fadeIn } from "@/variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
  <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
    <Circles />
    {/* avatar img */}
    <motion.div
    variants={fadeIn('right',0.2)} 
    initial="hidden" 
    animate="show"
    exit="hidden"
    className="hidden xl:flex absolute bottom-0 -left-[370px]"
    >
      <Avatar/>
    </motion.div>
    <motion.div 
     variants={fadeIn('right',0.8)} 
     initial="hidden" 
     animate="show"
     exit="hidden"
    className="container mx-auto h-full flex flex-col items-center xl:flex-row 
    gap-x-6">
      {/* text */}
      <div className="flex-1 flex flex-col justify-center">
        {/*<h3 className="h3">
          Captivating <span className="text-emerald-400">Stories</span> Birth Magnificient Facilitators.
        </h3>*/}
        <p className="max-w-[500px] mx-auto xl:mx-0 mb-2 xl:mb-12 px-2 xl:px-0">
      We are located at 9 Yola Street,Area 7, Garki Abuja-Nigeria.Call Us on Hotline: +2347034797022.
        </p>
        {/* counters */}
        <div className="flex flex-1 xl:gap-x-6">
          <div >
            <div>
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4l font-extrabold text-emerald-400 mb-2">
                  <CountUp start={0} end={10} duration={5}/> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-
                [100px]">
                  Years Of Existence
                  </div> 
              </div>  
            </div>
          </div>
          {/* clients */}
          <div className="relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4l font-extrabold text-emerald-400 mb-2">
                  <CountUp start={0} end={250} duration={5}/> K+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-
                [100px]">
                  Satisfied Clients
                  </div>
                  </div>
             {/* Projects */}     
                  <div className="relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4l font-extrabold text-emerald-400 mb-2">
                  <CountUp start={0} end={650} duration={5}/> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-
                [100px]">
                  Finished Projects
                  </div>
                  </div>
        </div>
        </div>
        {/* Info */}
      <div className="flex flex-col w-full xl:max-w-[80%] h-[380px]">
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          {aboutData.map((item, itemIndex) => {
           return (
           <div 
           key={itemIndex} 
           className={`${index === itemIndex &&
          'text-emerald-400 after:w-[100%] after:bg-emerald-500 after:transition-all after:duration-300'
          }
            cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 
           after:left-0`}
           onClick={() => setIndex(itemIndex)}
           >
           {item.title}
            </div>
            );
          })}
        </div>
        <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-0
        items-center xl:items-start">
          {aboutData[index].info.map((item, itemIndex) => {
            return (
              <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2
              items-center text-white/60">
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex"></div>
                <diV>{item.stage}</diV>
                <div className="flex gap-x-4">
                {/* icons */}
                {item.icons?.map((icon, itemIndex) => {
                  return //<div className='text-2xl>{icon}</div>;
                })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  </div>
  );
};

export default About;
