import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import LiIcon from './LiIcon';
import ColumbiaUniLogo from '../../public/images/CULogo.png'

const Details = ({ type, time, place, info, logo, link }) => {
    const ref = useRef(null);
    return (
        <li
            ref={ref}
            className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:1-[80%]'
        >

            <LiIcon reference={ref} />

            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <div className='flex items-center justify-center col flex-col'>
                    <motion.div
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='flex items-center justify-center mt-2 w-16 h-16'>
                        <a href={link}
                            target='_blank'>
                            {logo && <img src={logo}
                                alt="Logo"
                                className="w-full h-full" />}
                        </a>
                    </motion.div>

                    <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg '>
                        {type}
                    </h3>
                </div>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full xs:text-sm'>
                    {info}
                </p>
            </motion.div>
        </li>
    );
};

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Education
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        type="Coding Bootcamp - Full Stack Software Engineering"
                        time="2023-2023"
                        place="Columbia University"
                        link="https://www.columbia.edu/"
                        logo="/images/CULogo.png"
                        info="Engaged in a 6-month intensive software development coding bootcamp at Columbia University, honing skills in full stack development. Proficient in both front-end and back-end technologies, with a passion for creating innovative solutions."
                    />
                    <Details
                        type="Bachelor's Of Science In Mechanical Engineering"
                        time="2016-2020"
                        place="Vaughn College Of Aeronautics And Technology"
                        link="https://www.vaughn.edu/"
                        logo="/images/VCATLogo.png"
                        info="Bachelor of Science in Mechanical Engineering graduate with a strong foundation in theoretical concepts and practical applications. Skilled in problem-solving, critical thinking, and project management. Proficient in CAD software and experienced in designing and analyzing mechanical systems."
                    />
                </ul>
            </div>
        </div>
    )
}

export default Education