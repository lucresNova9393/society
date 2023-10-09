// testimonial data
const testimonialData = [
    {
      image: '/Civil-Military Summit on Elections and Security.jpeg',
      //name: 'CIMICO',
      position: 'Civil-Military Summit on Elections and Security.',
      message:
        'This coalition  is awesome and timely, its the vehicle to convey public opinion to the corridor of power.',
    },
    {
      image: '/2023 Annual Civil-Miliatry Conference.jpg',
     // name: 'CIMICO',
      position: '2023 Annual Civil-Miliatry Conference.',
      message:
        'Its a welcome development, its a global standard for civil society groups to form an alliance. ',
    },
    {
      image: '/DSC_1753.jpg',
      //name: 'CIMICO',
      position: 'CIMICO Steering Committee with the Nigerian Chief of Defence staff Gen. Christopher Musa.',
      message:
        'It was really fun getting to know about this organisation.',
    },
    {
      image: '/CIMICO Steering Committee with the Nigerian Minister of Defence His Excellency Mohammed Badaru.jpg',
      //name: 'CIMICO',
      position: 'CIMICO Steering Committee with the Nigerian Minister of Defence His Excellency Mohammed Badaru.',
      message:
        'It was really fun getting to know about this organisation.',
    },
    {
      image: '/IMG-20230207-WA0009.jpg',
      //name: 'CIMICO',
      position: 'National Flag-off of CIMICO.',
      message:
        'It was really fun getting to know about this organisation.',
    }
    
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
  
  const HomeSlider = () => {
  
    return (
    <Swiper
      navigation={true}
      autoplay={{
        delay:10000,
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
           <div className='flex flex-col justify-center items-center md:flex-row gap-x-8 h-full
           px-16'>
            {/* avatar, name, position */}
            <div className='w-full max-w-[300px] flex flex-col xl:justify-center
            items-center relative mx-auto xl:mx-0'>
               {/*  avatar */}
               <div className='mb-2 mx-auto'>
                   <Image src={person.image} width={500} height={500} alt=''/>
                </div>
                {/* name */}
                <div className='text-lg'>{person.name}</div>
                {/* position */}
                <div className='text-[12px] uppercase font-extralight tracking-widest justify-center'>
                  {person.position}
                  </div>
              
            </div>         
           </div>
          </SwiperSlide>
        );
        })}
      </Swiper>
    );
  };
  
  export default HomeSlider;
  