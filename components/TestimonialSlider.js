// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Public Relations Practitioner',
    message:
      'This coalition  is awesome and timely, its the vehicle to convey public opinion to the corridor of power.',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Musa',
    position: 'Corporate Officer',
    message:
      'Its a welcome development, its a global standard for civil society groups to form an alliance. ',
  },
  {
    image: '/t-avt-3.png',
    name: 'Michael Armstrong',
    position: 'Managing Director',
    message:
      'It was really fun getting to know about this organisation.',
  },
];

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import requires modules
import { Autoplay ,Navigation, Pagination} from 'swiper/modules';

// icons 
import { FaQuoteLeft } from 'react-icons/fa'

// next image
import Image from 'next/image';

const TestimonialSlider = () => {

  return (
  <Swiper
    navigation={true}
    autoplay={{
      delay:5000,
      disableOnInteraction:false,
    }}
    pagination={{
      clickable: true,
    }}
    modules={[Autoplay,Navigation, Pagination]}
    className='h-[400px]'
    >
    {
      testimonialData.map((person,index) => {
        return (
        <SwiperSlide key={index}>
         <div className='flex flex-col items-center md:flex-row gap-x-8 h-full
         px-16'>
          {/* avatar, name, position */}
          <div className='w-full max-w-[300px] flex flex-col xl:justify-center
          items-center relative mx-auto xl:mx-0'>
            <div className='flex flex-col justify-center text-center'>
              {/*  avatar */}
              <div className='mb-2 mx-auto'>
                 <Image src={person.image} width={100} height={100} alt=''/>
              </div>
              {/* name */}
              <div className='text-lg'>{person.name}</div>
              {/* position */}
              <div className='text-[12px] uppercase font-extralight tracking-widest'>
                {person.position}
                </div>
            </div>
          </div>
          {/* quote & message */}
          <div className='flex-1 flex flex-col justify-center 
          before:w-[1px]  xl:before:bg-white/20 xl:before:absolute xl:before:left-0
          xl:before:h-[200px] relative xl:pl-20'>
            {/* quote icon */}
            <div className='mb-4'>
              <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto
              md:mx-0'/>
              {/* message */}
              <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
              </div>
          </div>
         </div>
        </SwiperSlide>
      );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
