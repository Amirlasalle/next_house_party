import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import LiIcon from './LiIcon';
import Image from 'next/image';

const Details = ({ position, company, companyLink, time, address, work, logo }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:1-[80%]'>

            <LiIcon reference={ref} />
            
            <motion.div
                initial={{y:50}}
                whileInView={{y:0}}
                transition={{duration:0.5, type:"spring"}}
            >
                <div className='flex items-center justify-center col flex-col'>
                    <motion.div
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='flex items-center justify-center mt-2 w-16 h-16 '>
                        <a href={companyLink}
                            target='_blank'>
                            {logo && <Image src={logo}
                                alt="Logo"
                                className="w-full h-full mb-5" 
                                width={100}
                                height={100}
                                />}
                        </a>
                    </motion.div>
                    <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                        {position}&nbsp;<a href={companyLink}
                            target="_blank"
                            className='text-primary capitalize'
                        >@{company}</a>
                    </h3>
                </div>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {work}
                </p>
            </motion.div>
        </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Experience
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />

                <ul className='w-full flex flex-col items-start justify-between ml-4 text-left xs:ml-2'>
                    <Details
                        logo="/images/miro2.png"
                        position="Full-Stack Software Developer"
                        company="Freelance"
                        companyLink="/"
                        time="2023-present"
                        address="New York, NY"
                        work="Crafting custom solutions for diverse projects, specializing in reliable and scalable software tailored to clients' needs. Proficient in multiple programming languages and frameworks, delivering high-quality code and efficient solutions. Committed to continuous learning to tackle new challenges effectively and ensure optimal project outcomes."
                    />
                    <Details
                        logo="/images/schneider-logo.png"
                        position="Inside Sales Engineer"
                        company="Schneider Electric"
                        companyLink="https://www.se.com/us/en/?utm_source=google&utm_medium=cpc&utm_campaign=2024_jan_us_allbu_einnovation_google_consideration_sem_global_gmc24_corebrand&utm_term=Schneider%20Electric&campaign_objective=consideration&mcl_name=einnovation&gad_source=1&gclid=Cj0KCQjw5cOwBhCiARIsAJ5njuaAlqdsgZhihlA650bFRTcw0yxlhQI50QQ4PsZtk4F1q4pjKkNIWMIaAsJHEALw_wcB"
                        time="2023-2023"
                        address="Nashville, TN"
                        work="Strengthened sales skills through a 4 month technical training. Provided top-tier customer service, managed opportunities efficiently, and met sales targets consistently. Facilitated cross-selling and ensured customer satisfaction. Maintained accurate records and responded promptly to requests."
                    />
                    <Details
                        logo="/images/lasalle_logo.png"
                        position="Front-End Web Developer"
                        company="LaSalle Ice Cream"
                        companyLink="https://lasalleicecream.com/"
                        time="2018-2022"
                        address="New York, NY"
                        work="Utilized JavaScript with React for front-end and Node.js for back-end. Collaborated with PMs and Designers to create user-friendly features. Shipped quality software incrementally and acted as a technical leader. Created and optimized web content, monitored performance, and managed hosting. Conducted feasibility studies and applications development tasks."
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience