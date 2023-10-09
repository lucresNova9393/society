/* eslint-disable react/jsx-key */
// icons
import React, { useState } from "react";


// next link
import Link from 'next/link';


// next router
import { useRouter } from 'next/router';




const WorkSocials = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  const router = useRouter();
  const pathname = router.pathname;
  return (
    
    <div class="inline-flex rounded-md shadow-sm" role="group">
  <button type="button" class=" px-4 py-2 text-sm font-medium text-white-900 bg-transparent border border-white-900 rounded-l-lg hover:bg-emerald-400 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
     <Link href="/cimico">CIMICO Centre</Link>
  </button>
  <button type="button" class="px-4 py-2 text-sm font-medium text-white-900 bg-transparent border-t border-b border-white-900 hover:bg-emerald-400 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
  <Link href="/cso">CSO</Link>
  </button>
  <button type="button" class="px-4 py-2 text-sm font-medium text-white-900 bg-transparent border border-white-900 rounded-r-md hover:bg-emerald-400 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
  <Link href="/executives">EXECUTIVES</Link>
  </button>
  <button type="button" class="px-4 py-2 text-sm font-medium text-white-900 bg-transparent border border-white-900 rounded-r-md hover:bg-emerald-400 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
  <Link href="/events">EVENTS</Link>
  </button>
</div>
    
  );
};

export default WorkSocials;
