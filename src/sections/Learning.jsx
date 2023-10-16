import React from 'react'
import { TypingText } from '../component/Typingtext'
import { fadeIn, staggerContainer } from '../utils/motion'
import { motion } from 'framer-motion'
import LearningCard from '../component/LearningCard'
const list = [

  { title: 'Emirates International University', subTitle: `Obtaining a Bachelor's degree with honors`, textColor: 'text-cyan-600', color: 'shadow-cyan-500/25' },
  { title: 'The General Institute of Communications', subTitle: `Cisco Academy Network Assistant Certified by Cisco CCNA (CCNA 1, CCNA 2)`, textColor: 'text-blue-500', color: 'shadow-blue-500/25' },
  { title: 'YOU Company', subTitle: `Two Weeks of Training in YOU Company`, textColor: 'text-cyan-600', color: 'shadow-cyan-500/25' },
  { title: 'General Organization for Telecommunications', subTitle: `Two Weeks of Training in General Organization for Communications`, textColor: 'text-indigo-500', color: 'shadow-indigo-500/25' },


]
export default function Learning() {
  return (

    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className='mt-[100px] flex flex-col justify-center items-center gap-5 '
    >
      <TypingText title={" | Learning && Training"} />
      <motion.p
        variants={fadeIn('up', 'spring', 1.3, 1.5)}
        className='text-white text-4xl font-extrabold'
      >My Learning && Training</motion.p>
      <motion.p
        variants={fadeIn('up', 'spring', 1.4, 1.5)}
        className='my-[10px] text-gray-400 text-sm font-medium w-[70%]'
      >
        Throughout my learning journey, I've honed my skills and knowledge through practical experiences. These experiences demonstrate my proficiency in addressing various challenges, adapting to new technologies, and effectively managing my learning process. I remain committed to further expanding my knowledge and skills to continually develop and enhance my abilities.
      </motion.p>
      <div className='mt-[70px] flex justify-center items-center gap-7'>
        {list.map((item, i) => {
          return (
            <LearningCard key={i} index={i} color={item.color} textColor={item.textColor} title={item.title} subtitle={item.subTitle} />

          )
        })}
      </div>
    </motion.div>
  )
}
