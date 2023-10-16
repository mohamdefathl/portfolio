import React from 'react'
import { TypingText } from '../component/Typingtext'
import { fadeIn, staggerContainer } from '../utils/motion'
import { motion } from 'framer-motion'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from "../constants";
const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement

            contentStyle={{
                background: "#1d1836",
                color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            // date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[60%] h-[60%] object-contain'
                    />
                </div>
            }
        >
            <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
            <p
                className='text-secondary text-[16px] font-semibold'
                style={{ margin: 0 }}
            >
                {experience.company_name}
            </p>
            <div className="gradient-04 -z-50" />

            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className='text-white-100 text-[14px] pl-1 tracking-wider'
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};
export default function Skills() {
    return (
        <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.25 }}
            className='mt-[100px] flex flex-col justify-center items-center gap-5 '>

            <TypingText title={" | Skills && Experience "} />
            <motion.p
                variants={fadeIn('up', 'spring', 1.3, 1.5)}
                className='text-white text-4xl font-extrabold'
            >My Skills && Experience</motion.p>
            
            <div
                className='mt-20 flex flex-col w-[100%]'>
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>

        </motion.div>
    )
}
