import React from 'react';

const LargeArrowDown = () => {
  return (
    <section className="w-full pt-0 pb-8 lg:pb-[50px] flex justify-center items-center">
      <div className="text-brand-secondary hover:translate-y-4 transition-transform duration-500 cursor-pointer">
        <svg 
          className="w-[80px] h-[80px] lg:w-[172px] lg:h-[172px]" 
          viewBox="0 0 172 172" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M154.801 103.2L142.761 91.16L94.6008 139.32V0H77.4008V139.32L29.2408 91.16L17.2008 103.2L86.0008 172L154.801 103.2Z" fill="currentColor"/>
        </svg>
      </div>
    </section>
  );
};

export default LargeArrowDown;
