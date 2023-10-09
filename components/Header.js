// next image
import Image from "next/image";

// next link
import Link from 'next/link';

// components 
import Socials from '@/components/Socials';

const Header = () => {
  return <header className="absolute z-30 w-full flex items-center px-4 xl:px-0 xl:h-[90px]">
    

    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-3 
      py-2">
        {/* logo */}
        <Link href={'/'}>
          <Image 
          src={'/logo6.png'} 
          width={320} 
          height={18}
          alt=""
          priority={true} 
          />
            {/*<p class="mb-0 text-sm text-center text-white-900 dark:text-white-900 sm:mb-0">
  9 Yola Street,Area 7, Garki Abuja-Nigeria.+2347034797022.
  </p> */}
        </Link>
      
        {/* Socials */}
        <Socials />
      </div>
    </div>
  </header>;
};

export default Header;
