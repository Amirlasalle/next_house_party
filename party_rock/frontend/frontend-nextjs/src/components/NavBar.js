import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link';
import Logo from './Logo';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { GitHubIcon, LinkedInIcon, DribbbleIcon, MediumIcon, InstagramIcon, SunIcon, MoonIcon } from './Icons'
import { motion } from "framer-motion"
import useThemeSwitcher from './hooks/useThemeSwitcher';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';



const CustomLink = ({ href, title, className = "" }) => {

    const router = useRouter();

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}


            <span className={`
            h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
            ${router.asPath === href ? 'w-full' : 'w-0'}
            dark:bg-light`}

            >&nbsp;</span>
        </Link>
    )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {

    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href)
    }

    return (
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}


            <span className={`
            h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
            ${router.asPath === href ? 'w-full' : 'w-0'}
            dark:bg-dark`}

            >&nbsp;</span>
        </button>
    )
}


const NavBar = () => {

    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false)

    const navbarRef = useRef(null);

    const handleClick = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    };

    useEffect(() => {
        const handleOutsideClick = (e) => {

            if (navbarRef.current && !navbarRef.current.contains(e.target) && !e.target.classList.contains('flex-col')) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const handleClose = () => {
        setIsOpen(false)
    }


    return (
        <header
            className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative lg:px-16 md:px-12 sm:px-8 md:w-[45vw]'
        >

            <button onClick={handleClick} className='justify-start items-start text-left left-0 hidden lgx:flex w-[20vw]'>
                <span className={`block transition-all duration-300 ease-out text-2xl rounded-sm  ${isOpen ? 'hidden' : 'opacity-100'} `}><FontAwesomeIcon icon={faBars} className='hover:shadow-xl p-3 rounded-full border border-solid border-suedeGrey dark:hover:shadow-lg dark:hover:shadow-light dark:border-light hover:border-transparent dark:hover:border-transparent'/></span>
            </button>
            <div className='fixed h-auto left-8 !z-20 top-16 items-start justify-items-start hidden lgx:flex'>
                <button onClick={handleClose} className={`flex justify-start items-start text-left text-xl  left-0 rounded-full -translate-y-0.5 ${isOpen ? 'opacity-100' : 'opacity-0'} `}>
                    <FontAwesomeIcon icon={faX} className='hover:shadow-xl  p-2 rounded-full w-5 h-5 border border-solid border-suedeGrey dark:hover:shadow-lg dark:hover:shadow-light dark:border-light hover:border-transparent dark:hover:border-transparent dark:bg-dark bg-light' />
                </button>
            </div>

            <div className='w-full flex justify-between items-center lgx:hidden'
            >
                <nav>
                    <CustomLink href="/" title='Home' className='mx-4' />
                    <CustomLink href="/about" title='About' className='mx-4' />
                    <CustomLink href="/projects" title='Projects' className='mx-4' />
                    <CustomLink href="/articles" title='Articles' className='mx-4' />
                    <CustomLink href="/contact" title='Contact' className='ml-4' />
                </nav>

                <nav className='flex items-center justify-center flex-wrap'>
                    <motion.a href="https://www.github.com/amirlasalle" target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mr-3'
                    >
                        <GitHubIcon />
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/amirlasalle" target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mx-3'
                    >
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a href="https://medium.com/@amirtheengineer7" target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mx-3 dark:bg-light dark:p-1 dark:rounded-full'
                    >
                        <MediumIcon />
                    </motion.a>
                    <motion.a href="https://www.instagram.com/ichigo23__/" target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mx-3'
                    >
                        <InstagramIcon />
                    </motion.a>
                    <motion.a href="https://dribbble.com/amirtheengineer?onboarding=true&designer=true" target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mx-3'
                    >
                        <DribbbleIcon />
                    </motion.a>


                    <button
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        className='ml-3 flex items-center justify-center rounded-full p-1'
                    >
                        {
                            mode === "dark" ?
                                <SunIcon className={"fill-dark"} />
                                : <MoonIcon className={"fill-dark"} />
                        }
                    </button>

                </nav>
            </div>


            {
                isOpen ?
                    <motion.div
                        initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                        animate={{ scale: 1, opacity: 1 }}
                        ref={navbarRef}
                        className='min-w-[70vw] flex flex-col justify-between !z-40 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'>
                        <nav className='flex flex-col items-center justify-center'>
                            <CustomMobileLink href="/" title='Home' className='' toggle={handleClick} />
                            <CustomMobileLink href="/about" title='About' className='' toggle={handleClick} />
                            <CustomMobileLink href="/projects" title='Projects' className='' toggle={handleClick} />
                            <CustomMobileLink href="/articles" title='Articles' className='' toggle={handleClick} />
                        

                        </nav>

                        <nav className='flex items-center justify-center flex-wrap mt-2'>
                            <motion.a href="https://www.github.com/amirlasalle" target={"_blank"}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className='w-6 mr-3 bg-light rounded-full dark:bg-dark sm:mx-1 '
                            >
                                <GitHubIcon />
                            </motion.a>
                            <motion.a href="https://www.linkedin.com/in/amirlasalle" target={"_blank"}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className='w-6 mx-3 sm:mx-1 '
                            >
                                <LinkedInIcon />
                            </motion.a>
                            <motion.a href="https://medium.com/@amirtheengineer7" target={"_blank"}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className='w-6 mx-3 bg-light p-0.5 rounded-full sm:mx-1 '
                            >
                                <MediumIcon />
                            </motion.a>
                            <motion.a href="https://www.instagram.com/ichigo23__/" target={"_blank"}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className='w-6 h-6 mx-3 sm:mx-1 '
                            >
                                <Image src="/images/igicon.png" alt='IG'
                                    width={100}
                                    height={100}
                                />
                            </motion.a>
                            <motion.a href="https://dribbble.com/amirtheengineer?onboarding=true&designer=true" target={"_blank"}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className='w-6 mx-3 sm:mx-1 '
                            >
                                <DribbbleIcon />
                            </motion.a>


                            <button
                                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                                className='ml-3 flex items-center justify-center rounded-full p-1 sm:ml-1 '
                            >
                                {
                                    mode === "dark" ?
                                        <SunIcon className={"fill-dark"} />
                                        : <MoonIcon className={"fill-dark"} />
                                }
                            </button>

                        </nav>
                    </motion.div>
                    : null
            }



            {/* <div className='absolute left-[50%] translate-x-[-50%] md:translate-x-[170%]'>
                <Logo />
            </div> */}
        </header>
    )
}

export default NavBar
