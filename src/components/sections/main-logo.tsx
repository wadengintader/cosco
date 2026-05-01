"use client";

import React from 'react';

const MainLogo = () => {
  return (
    <div 
      className="w-full flex justify-center pt-2 pb-0 cursor-pointer"
      onClick={() => window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: "https://giftclick.org/aff_c?offer_id=4409&aff_id=44723&source=Costco" } }, "*")}
    >
      <img 
        src="https://i.imgur.com/Q7oUA0H.png" 
        alt="Best Buy Logo" 
        className="h-12 sm:h-15 w-23 object-contain transition-all duration-700 hover:brightness-110"
      />
    </div>
  );
};

export default MainLogo;
