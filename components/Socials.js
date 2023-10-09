// Links
import Link from "next/link";

// icons 
import 
{
RiYoutubeLine,
RiInstagramLine,
RiFacebookBoxLine,
RiTwitterXLine,
RiPhoneLine,
RiWhatsappLine,
} 
from 'react-icons/ri';

const Socials = () => {
  return( 
  <div className="flex items-center gap-x-5 text-lg">
    <Link href={'https://www.youtube.com/@CIMIC0'} className=" hover:text-emerald-400 transition-all duration-300"><RiYoutubeLine /></Link>
    <Link href={'https://www.instagram.com/civil_society_of_nigeria/'} className=" hover:text-emerald-400 transition-all duration-300"><RiInstagramLine /></Link>
    <Link href={'https://www.facebook.com/profile.php?id=61551679601357'} className=" hover:text-emerald-400 transition-all duration-300"><RiFacebookBoxLine /></Link>
    <Link href={'https://twitter.com/civil_of22048'} className=" hover:text-emerald-400 transition-all duration-300"><RiTwitterXLine /></Link>
    <Link href={'tel:+2347034797022'} className=" hover:text-emerald-400 transition-all duration-300"><RiPhoneLine /></Link>
    <Link href={'https://wa.me/+2347034797022'} className=" hover:text-emerald-400 transition-all duration-300"><RiWhatsappLine /></Link>
  </div>
  )
  ;
};

export default Socials;
