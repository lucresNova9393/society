//fonts
import { Sora } from 'next/font/google';


// font Settings 
const sora = Sora({
  subsets : ['latin'],
  variable: '--font-sora',
  weight: ['100','200','300','400','500','600','700','800']
});

//components
import Nav from '../components/Nav';
import Header from '../components/Header';
import TopLeftImg from '../components/TopLeftImg';
import Footer from './Footer';


const Layout = ({children}) => {
  return (
  <div className={'page bg-site text-white bg-cover bg-no-repeat ${sora-variable} font-sora relative'}>
    {/*<Footer/>*/}
  {/*<TopLeftImg/>*/}
    <Nav/>
    <Header/>
    {children}
  </div>
  );
};

export default Layout;
