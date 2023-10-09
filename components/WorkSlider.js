// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'CIMICO Delegation with His Imperial Majesty, Ojaja II, Ooni of Ife, Oba Adeyeye Ogunwusi. ',
          path: '/CIMICO Delegation with His Imperial Majesty, Ojaja II, Ooni of Ife, Oba Adeyeye Ogunwusi..jpg',
        },
        {
          title: '2023 CIMICO Conference ',
          path: '/IMG-20230801-WA0007.jpg',
        },
        {
          title: 'CIMICO National Flag-off ',
          path: '/IMG-20230207-WA0004.jpg',
        },
        {
          title: 'CIMICO National Flag-off',
          path: '/IMG-20230207-WA0009.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'Public Presentation of the CIMICO Handbook.',
          path: '/Public Presentation of the CIMICO Handbook.jpg',
        },
        {
          title: '2022 Annual CIMICO Conference',
          path: '/2022 Annual CIMICO Conference.jpg',
        },
        {
          title: 'CIMICO steering committee with the Commandant of the Nigerian National Defence College, Rear Admiral Olumuyiwa Olotu',
          path: '/IMG_5509.jpg',
        },
        {
          title: 'CIMICO Steering Committee ',
          path: '/IMG-20220201-WA0005.jpg',
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// import requires modules
import { Autoplay, Pagination} from 'swiper/modules';

// icons 
import { BsArrowRight } from 'react-icons/bs'

// next image
import Image from 'next/image';

const WorkSlider = () => {

  return (
  <Swiper
    spaceBetween={10}
    autoplay={{
      delay:10000,
      disableOnInteraction:false,
    }}
    pagination={{
      clickable: true,
    }}
    modules={[Autoplay, Pagination]}
    className='h-[280px] sm:h-[480px]'
    >
    {
      workSlider.slides.map((slide,index) => {
        return (
        <SwiperSlide key={index}>
         <div className='xl:mt-4 grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
          {slide.images.map((image, index)=> {
            return (
            <div className='relative rounded-lg overflow-hidden flex 
            items-center justify-center group' key={index}>
              <div className='flex items-center justify-center relative
              overflow-hidden group'> 
                {/* imges */}
                <Image src={image.path} width={500} height={300} alt='' />
                {/* overlay gradient */}
                <div className='absolute inset-0 bg-gradient-to-l 
                from-transparent via-[#30833B] to-[#4a22bd] opacity-0 
                group-hover:opacity-80 transition-all'></div>
                {/* title*/}
          
                <div className='absolute bottom-0 translate-y-full 
                group-hover:-translate-y-10 group-hover:xl:-translate-y-20
                transition-all duration-300'>
                  {image.title}
                  <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                    {/* title part 1 */}
                  
                    <div className='delay-100'>LIVE</div>
                    {/* title part 2 */}
                    <div className='translate-y-[500%] 
                    group-hover:translate-y-0 
                    transition-all duration-300 delay-150'>PROJECT</div>
                    {/* icon */}
                    <div className='text-xl translate-y-[500%] 
                    group-hover:translate-y-0 transition-all duration-300
                    delay-200'><BsArrowRight/></div>
                  </div>
                </div>
              </div>
            </div>
          );
          })}
         </div>
        </SwiperSlide>
      );
      })}
    </Swiper>
  );
};

export default WorkSlider;
