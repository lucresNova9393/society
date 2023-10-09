// components
import Circles from "@/components/Circles";

// icons
import { BsArrowRight } from 'react-icons/bs'

// framer
import {motion} from 'framer-motion'


// variants
import { fadeIn } from '@/variants'

// email
import emailjs from '@emailjs/browser';

import  { useRef } from 'react';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_we26ta1', 'template_lftrnuf',form.current, 'ikQoGykPOYLldiliP') //, 

    e.target.reset()};
  return <div className="h-full bg-primary/30">
    <div className="container mx-auto py-32 text-center 
    xl:text-left flex items-center justify-center h-full">
      {/* text & form */}
      <div className="">
        
        {/* text */}
        <motion.h3
        variants={fadeIn('up',0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="h3 text-center mb-12">
          Let's <span className="text-emerald-400">connect.</span>
        </motion.h3>
        {/* form */}
        <motion.form 
        variants={fadeIn('up',0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex-1 flex flex-col gap-6 w-full mx-auto"
        ref={form} onSubmit={sendEmail}
        >
          {/* input group */}
          <div className="flex gap-x-6 w-full">
            <input name="name" type="text" placeholder="name" className="input" required/>
            <input name="email" type="text" placeholder="email" className="input" required/>
          </div>
          <input name="subject" type="text" placeholder="subject" className="input" required/>
          <textarea name="message" placeholder="message" className="textarea" required></textarea>
          <button type="submit" className="btn rounded-full border border-white/50 max-w-[178px]
          px-8 transition-all duration-300 flex items-center justify-center
          overflow-hidden hover:border-emerald-400 group ">
            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0
            transition-all duration-500">Let's talk</span>
            <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex
            group-hover:translate-y-0 group-hover:opacity-100 transition-all
            duration-300 absolute text-[22px]" />
          </button>
        </motion.form>
      </div>
    </div>
  </div>;
};

export default Contact;
