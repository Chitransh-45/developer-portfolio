"use client";

import dynamic from "next/dynamic";

// Load Lottie only in the browser
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width || '95%', // preserve original width behavior
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
