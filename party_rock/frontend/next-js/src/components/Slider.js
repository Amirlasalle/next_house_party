import React, { useState } from 'react'
import Image from 'next/image'
// import socialmediaData from "../components/Jsons/socialmedia.json";
import Link from 'next/link';
import emailCard from "./social/email-card.jpg"
import callCard from "./social/phone-card.jpg"
import smsCard from "./social/sms-card.jpg"
import IGCard from "./social/instagram-card.jpg"
import GitHubCard from "./social/github-card.jpg"
import LinkedInCard from "./social/linkedin-card.jpg"
import { motion } from "framer-motion"



const FramerImage = motion(Image);

const ContactType = ({ type, img, link, title }) => {
    return (
        <>
            <Link href={link} target="_blank"
                className='cursor-pointer overflow-hidden rounded-lg'>
                <article className="w-64 h-64 justify-center items-center text-center mx-1 rounded-xl border-solid border-2 border-suedeGrey/60 hover:border-dark/90 overflow-hidden">

                    <FramerImage src={img} alt={title} className="flex justify-around flex-wrap w-full h-64 aspect-1"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.23 }}
                    />
                </article>
            </Link>
            <div className='w-100 mt-1 ml-0 mr-0 justify-center items-center'>
                <h2 className="mb-2 mx-5 font font-light justify-center items-center text-lg">
                    {type}
                </h2>
            </div>
        </>
    )
}


const Slider = () => {

    // const [socialmedia] = useState(socialmediaData);

    return (
        <div className='w-full modal-tab-content justify-center h-auto border border-solid  rounded-2xl shadow-2xl bg-light overflow-hidden p-5 text-dark first:mt-0  border-dark border-r-4 border-b-4  dark:shadow-light dark:shadow-xl dark:bg-dark dark:border-light dark:text-light'>
      
              
                <div className='w-full h-full justify-center border border-solid border-transparent overflow-x-scroll overflow-y-hidden bg-light where-to-content dark:bg-dark'>
                    <div className='h-auto justify-center border border-solid border-transparent bg-light inline-flex flex-row gap-4 pr-16 where-to-cards-container dark:bg-dark'>


                        <article className="w-64 h-80 border border-solid border-transparent rounded-xl dark:bg-dark">
                            <ContactType
                                type="Send Me An Email"
                                link="mailto:mirolasalle@gmail.com"
                                img={emailCard}
                                title="email"
                            />
                        </article>
                        <article className="w-64 h-80 border border-solid border-transparent mx-1 rounded-xl">
                            <ContactType
                                type="Give Me A Call"
                                link="tel:+1(631)925-8216"
                                img={callCard}
                                title="phone call"
                            />
                        </article>
                        <article className="w-64 h-80 border border-solid border-transparent mx-1 rounded-xl">
                            <ContactType
                                type="Send Me A Text"
                                link="sms:+1(631)925-8216"
                                img={smsCard}
                                title="text"
                            />
                        </article>
                        <article className="w-64 h-80 border border-solid border-transparent mx-1 rounded-xl">
                            <ContactType
                                type="Message Me On LinkedIn"
                                link="https://www.linkedin.com/in/amirlasalle"
                                img={LinkedInCard}
                                title="LinkedIn"
                            />
                        </article>
                        <article className="w-64 h-80 border border-solid border-transparent mx-1 rounded-xl">
                            <ContactType
                                type="Explore My GitHub"
                                link="https://github.com/amirlasalle"
                                img={GitHubCard}
                                title="github"
                            />
                        </article>
                        <article className="w-64 h-80 border border-solid border-transparent mx-1 rounded-xl">
                            <ContactType
                                type="Like Food? Follow Me On Instagram!"
                                link="https://www.instagram.com/ichigo23__/"
                                img={IGCard}
                                title="instagram"
                            />
                        </article>
                    </div>
         
            </div>
        </div>
    )
}

export default Slider