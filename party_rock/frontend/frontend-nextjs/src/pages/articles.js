import AnimatedText from '@/components/AnimatedText'
import React, { useRef } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import Article1 from "../../public/images/articles/pagination component in reactjs.jpg";
import Article2 from "../../public/images/articles/create loading screen in react js.jpg";
import Article3 from "../../public/images/articles/create modal component in react using react portals.png";
import Article4 from "../../public/images/articles/todo list app built using react redux and framer motion.png";
import Article5 from "../../public/images/articles/smooth scrolling in reactjs.png";
import Article6 from "../../public/images/articles/What is higher order component in React.jpg";
import Article7 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import Article8 from "../../public/images/articles/What is Redux with easy explanation.png";
import { motion, useMotionValue } from "framer-motion"
import TransitionEffect from '@/components/TransitionEffect'




const FramerImage = motion(Image);

const MovingImg = ({ title, img, link, date }) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event) {
        imgRef.current.style.display = "inline-block"
        x.set(event.pageX);
        y.set(-10);
    }

    function handleMouseLeave(event) {
        imgRef.current.style.display = "none"
        x.set(event.pageX);
        y.set(-10);
    }


    return (
        <Link href={link} target='_blank'
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
            className='hover:underline underline-offset-2'
        >
            <motion.li
                initial={{ y: 200 }}
                whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
                viewport={{ once: true }}
                className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4  dark:text-light  dark:border-light dark:bg-dark sm:flex-col'>
                <h2 className='capitalize text-xl font-semibold'>{title}</h2>
                <span className='text-primary font font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
                <FramerImage
                    style={{ x: x, y: y }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
                    ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg ' />

            </motion.li>
        </Link>

    )
}


const FeaturedArticle = ({ img, title, time, summary, link }) => {
    return (
        <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl shadow-2xl dark:shadow-light dark:shadow-xl dark:bg-dark dark:border-light '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl shadow-2xl dark:bg-light' />
            <Link
                href={link}
                target="_blank"
                className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes='(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  50vw'
                />
            </Link>
            <Link href={link} target='_blank'>
                <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline underline-offset-2 text-black dark:text-light xs:text-lg'>{title}</h2>
            </Link>
            <p className='text-sm mb-2 text-black dark:text-light'>{summary}</p>
            <span className='text-primary font-semibold'>{time}</span>
        </li>
    )
}

const Article = ({ img, title, date, link }) => {
    return (
        <>
            <MovingImg title={title} img={img} link={link} date={date} />
        </>
    )
}

const articles = () => {
    return (
        <>
            <Head>
                <title>AJM | Articles Page</title>
                <meta name='description' content='any description' />
            </Head>

            <TransitionEffect />

            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
                <Layout className='pt-16'>
                    <AnimatedText text="The Pen Is Mighter Than The Sword" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl ' />
      

                    <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:gap-y-16 md:grid-cols-1 '>
                        <FeaturedArticle
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            summary=" Learn how to build a custom pagination component in ReactJS from scratch. 
                        Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                            time="9 min read"
                            link="https://devdreaming.com/blogs/create-pagination-component-reactjs"
                            img={Article1}
                        />
                        <FeaturedArticle
                            title="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
                            summary="Learn how to create stunning loading screens in React with 3 different methods. 
                            Discover how to use React-Loading, React-Lottie & build a custom loading screen. 
                            Improve the user experience."
                            time="10 min read"
                            link="https://devdreaming.com/blogs/create-3-different-types-of-loading-screens-in-react"
                            img={Article2}
                        />
                    </ul>
                    <h2 className='font-bold text-4xl w-full text-center mt-32 text-black dark:text-light'>All Articles</h2><br></br><p className='font-light text-md w-full text-center mb-16 mt-0 text-black dark:text-light'>(Hover For Details)</p>
                    <ul>
                        <Article
                            title="Creating An Efficient Modal Component In React Using Hooks And Portals"
                            date="Oct 30, 2023"
                            link="https://devdreaming.com/blogs/create-efficient-modal-react-portals"
                            img={Article3}
                        />
                        <Article
                            title="Build A Fabulous Todo List App With React, Redux And Framer-Motion"
                            date="Jan 28, 2023
                            "
                            link="/"
                            img={Article4}
                        />
                        <Article
                            title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
                            date="Jan 30, 2023"
                            link="https://devdreaming.com/blogs/smooth-scrolling-in-react-js"
                            img={Article5}
                        />
                        <Article
                            title="What Is Higher Order Component (Hoc) In React?"
                            date="July 28, 2023"
                            link="https://www.freecodecamp.org/news/higher-order-components-in-react/#:~:text=In%20React%2C%20a%20higher%2Dorder,without%20modifying%20the%20component's%20code."
                            img={Article6}
                        />
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="Jan 27, 2023 "
                            link="https://devdreaming.com/blogs/react-form-validation-custom-hook"
                            img={Article7}
                        />
                        <Article
                            title="Redux Simplified: A Beginner's Guide For Web Developers"
                            date="May 21, 2023"
                            link="https://dev.to/med_code/redux-simplified-a-beginners-guide-for-web-developers-55h3"
                            img={Article8}
                        />
                    </ul>
                </Layout>
            </main>
        </>
    )
}

export default articles