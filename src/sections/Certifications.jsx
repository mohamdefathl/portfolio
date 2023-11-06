import React from 'react'
import { TypingText } from '../component/Typingtext'
import { fadeIn, staggerContainer } from '../utils/motion'
import { motion } from 'framer-motion'
import ProjectCard from '../component/ProjectCard'
// import first from '../assets/first.png'
import first from '../assets/magp.png'
import second from '../assets/logo.png'
import meta from '../assets/meta.png'
import yemen from '../assets/yemen.png'
import fast from '../assets/fast.jpeg'
// import fast from '../assets/fast.jpeg'
export default function Certifications() {

    const list = [{
        name: 'MAGP',
        description: 'The MAGP project is a project that manages and archives graduation projects for students at the university level in the Republic of Yemen. ',
        img: first,
        tag: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "django",
                color: "green-text-gradient",
            },
            {
                name: "mysql",
                color: "pink-text-gradient",
            }
        ],
    },
    {
        name: 'My Portfolio',
        description: 'My portfolio website, where i can show my learning , training , skills , works and the contact information.',
        img: second,
        tag: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
        ]
    },
    {
        name: 'The quick shopper',
        description: 'A phone application and website that creates an application and system that links the wholesaler to the retailer or any commercial institution with its customers',
        img: fast,
        tag: [
            {
                name: "flutter",
                color: "blue-text-gradient",
            },
            {
                name: "django",
                color: "green-text-gradient",
            },
        ]
    },
    // {
    //     name: 'Fast Shopping',
    //     description: 'A mobile app and website that creates an application and system connecting wholesalers with retailers or any commercial entity with their customers.',
    //     img: fast,
    //     tag: [
    //         {
    //             name: "django",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "flutter",
    //             color: "blue-text-gradient",
    //         },
    //     ]
    // },
    {
        name: 'Meta Front-End Developer Professional Certificate',
        description: 'While obtaining this certificate, I have learned (Html , Css , Javascript , git , ReactJS , UX/UI design)',
        img: meta,
    },
     {
        name: 'Certificate from the Ministry of Higher Education and Scientific Research',
        description: 'A certificate of excellence in the first scientific competition in Information Technology organized by the Ministry of Higher Education and Scientific Research.',
        img: yemen,
    }
    ]

    return (
        <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className='mt-[100px] flex flex-col justify-center items-center gap-5 '>

            <TypingText title={" | Certifications && Projects  "} />
            <motion.p
                variants={fadeIn('up', 'spring', 1.3, 1.5)}
                className='text-white text-4xl font-extrabold'
            >My Certifications && Projects</motion.p>
            <motion.p
                variants={fadeIn('up', 'spring', 1.4, 1.5)}
                className='my-[10px] text-gray-400 text-sm font-medium w-[70%]'
            >
                Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively
            </motion.p>
            <div className='grid grid-cols-2 gap-[50px]'>
                {list.map((item, i) => {
                    return (
                        <ProjectCard index={i} name={item.name} description={item.description} img={item.img} >
                            {item?.tag && item.tag.map((tag) => (
                                <p
                                    // key={`${name}-${tag.name}`}
                                    className={`text-[14px] ${tag.color}`}
                                >
                                    #{tag.name}
                                </p>
                            ))}
                        </ProjectCard>
                    )
                })}
            </div>
        </motion.div>
    )
}
