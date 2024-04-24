import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import AnimatedText from '@/components/AnimatedText'
import Image from 'next/image'
import Link from 'next/link'
import { GitHubIcon } from '@/components/Icons'
import ventureVilla from "../../public/images/projects/vv-webpage.png"
import ASCOApp from "../../public/images/projects/ASCOApp.png"
import GAMovieApp from "../../public/images/projects/GAMovieApp.png"
import NoteApp from "../../public/images/projects/NoteApp.png"
import ScheduleApp from "../../public/images/projects/ScheduleApp.png"
import WeatherApp from "../../public/images/projects/WeatherApp.png"
import CodeQuiz from "../../public/images/projects/codeQuiz.png"
import PasswordApp from "../../public/images/projects/PasswordApp.png"
import ReactPort from "../../public/images/projects/ReactPort.png"
// import Mealy from "../../public/images/projects/mealyApp.png"
import { motion } from "framer-motion"
import TransitionEffect from '@/components/TransitionEffect'



const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl shadow-2xl dark:shadow-light dark:shadow-xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] ' />
            <Link href={link} target="_blank"
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:left-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl xs:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold text-black dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10'>
                        <GitHubIcon className="dark:bg-light dark:rounded-full" />
                    </Link>
                    <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold hover:underline underline-offset-2 dark:text-dark dark:bg-light sm:px-4 sm:text-base'>
                        Live Deployment
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative shadow-2xl dark:shadow-light dark:shadow-xl dark:bg-dark dark:border-light xs:p-4'>

            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl shadow-2xl dark:bg-light md:-right-2 md:w-[102%] xs:rounded-[1.5rem] ' />
            <Link href={link} target="_blank"
                className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes='(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  50vw'
                />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-lg lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold  text-black dark:text-light lg:text-2xl'>{title}</h2>
                </Link>

                {/* <p className='my-2 font-medium text-dark '>{summary}</p> */}

                <div className='w-full mt-2 flex items-center justify-between '>
                    <Link href={link} target="_blank" className='rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold hover:underline underline-offset-2  dark:text-dark dark:bg-light md:text-base '>
                        Live Deployment
                    </Link>
                    <Link href={github} target="_blank" className='w-10 md:w-6'>
                        <GitHubIcon className="dark:bg-light dark:rounded-full" />
                    </Link>

                </div>
            </div>
        </article>
    )
}


const projects = () => {
    return (
        <>
            <Head>
                <title>AJM | Projects Page</title>
                <meta name='projects page' content='this is the projects page' />
            </Head>

            <TransitionEffect />

            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text="Unveiling Creativity and Expertise!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />

                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Venture Villa"
                                img={ventureVilla}
                                summary="A comprehensive FullStack application, utilizing MongoDB, Express, React, CSS, Node, and JWT, as well as third-party APIs for obtaining locations of restaurants, attractions, and Airbnbs, offering the ultimate travel guide experience for exploring the wonders of Colombia."
                                link="https://venture-villa-app-f0af34deb85d.herokuapp.com/"
                                github="https://github.com/Amirlasalle/venture-villa"
                                type="Travel Guide App"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="ASCO STUDY CENTER"
                                img={ASCOApp}
                                summary="React APP tailored for the SDPs at ASCO designed to facilitate knowledge acquisition and information access."
                                link="https://amirlasalle.github.io/asco-study-center/"
                                github="https://github.com/Amirlasalle/asco-study-center"
                                type="Product Learning App"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Group Awesome Movie App"
                                img={GAMovieApp}
                                summary="Movie search app created with JavaScript, HTML, CSS, and third-party APIs, real-time updates, responsive design, and advanced search capabilities. Optimized for performance, error handling, and user experience to ensure seamless content delivery and engagement."
                                link="https://pvlln.github.io/project1-group-awesome/"
                                github="https://github.com/pvlln/project1-group-awesome"
                                type="Live Search App" />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Work Scheduler App"
                                img={ScheduleApp}
                                summary="App to simplify your day with this user-friendly calendar app. Plan and save events for each working hour from 9 am to 5 pm, boosting your productivity."
                                link="https://amirlasalle.github.io/work_scheduler/"
                                github="https://github.com/Amirlasalle/work_scheduler"
                                type="Daily work scheduling App" />
                        </div>
                        {/* <div className='col-span-6'>
                            <Project
                                title="Note Taker"
                                img={NoteApp}
                                summary="A comprehensive application."
                                link="/"
                                github="/"
                                type="Full Stack App" />
                        </div> */}
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="5 Day Forecast App"
                                img={WeatherApp}
                                summary="A comprehensive application."
                                link="https://amirlasalle.github.io/weather_dashboard/"
                                github="https://github.com/Amirlasalle/weather_dashboard"
                                type="Live Weather App" />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Quizlet"
                                img={CodeQuiz}
                                summary="A comprehensive application."
                                link="https://amirlasalle.github.io/web-apis_code-quiz/"
                                github="https://github.com/Amirlasalle/web-apis_code-quiz"
                                type="A Test Taking App" />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Note Taker"
                                img={NoteApp}
                                summary="Note-taking app with Express.js, featuring CRUD operations, encryption, authentication, and authorization for secure note management. Optimized for performance and security with asynchronous programming and error handling."
                                link="https://glacial-cliffs-13260.herokuapp.com/"
                                github="https://github.com/Amirlasalle/express.js-note-taker"
                                type="Full Stack App" />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Secure It!"
                                img={PasswordApp}
                                summary="A comprehensive application."
                                link="https://amirlasalle.github.io/password_generator/"
                                github="https://github.com/Amirlasalle/password_generator"
                                type="A Password Generator App" />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="My React Portfolio"
                                img={ReactPort}
                                summary="A comprehensive application, utilizing React, and CSS."
                                link="https://amirlasalle.github.io/amir-joseph/"
                                github=""
                                type="A Personal Webpage"
                            />
                        </div>
                        {/* <div className='col-span-6'>
                        <Project
                                title="Mealy"
                                img={Mealy}
                                summary="A comprehensive application, utilizing React, and CSS."
                                link="/"
                                github="/"
                                type="A food scheduling App"
                            />
                        </div> */}


                    </div>

                </Layout>
            </main>

        </>
    )
}

export default projects