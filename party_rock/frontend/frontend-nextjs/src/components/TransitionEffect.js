import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import pageSwitch from "../../public/images/app/pageSwitch.png";
import switchPic from "../../public/images/app/switchPic.png";
import picSwitch from "../../public/images/app/picSwitch.png";



const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-spotifyGreen"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ delay: 0.1, duration: 1, ease: "easeInOut" }}
      >
        <Image
          src={pageSwitch}
          alt="Amir"
          className="w-full h-full lg:hidden md:inline-block md:w-full z-40"
          priority
        />
      </motion.div>

      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-black "
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
      >
        <Image
          src={picSwitch}
          alt="Amir"
          className="w-full h-full lg:hidden md:inline-block md:w-full z-30"
          priority
        />
      </motion.div>

      <motion.div
        className="z-20 fixed top-0 bottom-0 right-full w-screen h-screen bg-light"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 1, ease: "easeInOut" }}
      >
        <Image
          src={switchPic}
          alt="Amir"
          className="w-full h-full lg:hidden md:inline-block md:w-full z-20"
          priority
        />
      </motion.div>
    </>
  );
};

export default TransitionEffect;
