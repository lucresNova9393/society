import React from 'react'
import Image from 'next/image'



   
    
    export default function ExecutiveSlider() {
      return (
        <div className="flex justify-center gap-4 items-center  ">
          
          <div><Image src="/Avatar2.jpg" width={280} height={300} size="lg" alt=''/>
            <div>David O. Acheme</div>
            <div className='text-sm'>Head Of Programs.</div>
          </div>
          <div><Image src="/avatar1.jpg" width={280} height={300} size="lg" alt=''/>
            <div>Adams Otakwu Adah</div>
            <div className='text-sm'>Chairperson</div>
            <div className='text-sm'>Coordinator CIMICO</div>
          </div>
          <div><Image src="/avatar3.jpg" width={280} height={300} size="lg" alt=''/>
            <div>Master Joseph Ode</div>
            <div className='text-sm'>Head Of Media and Publicity.</div>
          </div>
          
        </div>
      );
    }
 