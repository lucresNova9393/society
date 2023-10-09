// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// icons
import {
RxCrop,
RxDesktop,
RxPencil2,
RxReader,
RxRocket,
RxArrowTopRight,
} from 'react-icons/rx';

// import requires modules
import {Autoplay, FreeMode , Pagination} from 'swiper/modules';


// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Sensitization',
    description: 'Public Enlightment & Sensitization.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Engagement',
    description: 'Civic Engagement & Community Development.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Research & Development.',
  },
  {
    icon: <RxReader />,
    title: 'Watchdog ',
    description: 'Transparency and Accountability Drive.',
  },
  {
    icon: <RxRocket />,
    title: 'Civil Military Co-oporation.',
    description: 'Security Education.',
  },
];

const ServiceSlider = () => {

  return (
  <Swiper
   breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 15,
      },

    }}
    autoplay={{
      delay:5000,
      disableOnInteraction:false,
    }}
    freeMode={true}
    pagination={{
      clickable: true,
    }}
    modules={[Autoplay,FreeMode, Pagination]}
    className='h-[240px] sm:h-[340px]'
    >
    {
      serviceData.map((item,index) => {
        return (
        <SwiperSlide key={index}>
          <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 
          flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)]
          transition-all duration-300'>
            {/* icons */}
            <div className='text-4xl text-emerald-400 mb-4'>{item.icon}</div>
            {/* title & desc */}
            <div className='mb-8'>
              <div className='mb-2 text-lg'>{item.title}</div>
              <p className='max-w-[350px] leading-normal'>{item.description}</p>       
            </div>
            {/* arrow */}
            <div className='text-3xl'>
              <RxArrowTopRight  className='group-hover:rotate-45
              group-hover:text-emerald-400 transition-all duration-300'/>
            </div>
          </div>
        </SwiperSlide>
      );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
