import React from 'react'
import styles from '../styles'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../utils/motion'
import profile from '../assets/bgbg.png'

export default function About() {
  return (
    <motion.div className='w-[100%] flex'
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false }}
    >
      <div
        className={`self-start w-[100%] inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row justify-between items-center gap-5`}
      >
        <div className='flex flex-row gap-5 '>
          <motion.div variants={fadeIn('right', 'spring', 1.7, 1.3)}
            className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </motion.div>
          <div>
            <motion.h1 variants={fadeIn('up', 'spring', 1, 1.3)}
              className={`${styles.heroHeadText} text-left text-white`}>
              Hi, I'm <motion.span variants={fadeIn('up', 'spring', 1.3, 1.6)} className='text-[#915EFF]'>Mohammed</motion.span>
            </motion.h1>
            <motion.p variants={fadeIn('up', 'spring', 1.5, 1.3)} className={`text-left ${styles.heroSubText} mt-2 text-white-100`}>
              Passionate Information Technology graduate eager <br className='sm:block hidden' />
              to launch a career in software development.<br className='sm:block hidden' />
              Strong foundation in web development, problem-solving,<br className='sm:block hidden' />
              and collaboration.Committed to continuous learning and innovation.<br className='sm:block hidden' />
            </motion.p>
          </div>
        </div>
        <div
          className='w-[56%] h-[56%]'
        >
          <motion.img
            variants={fadeIn('left', 'spring', 1.9, 1.5)}
            src={profile}
          />
        </div>


      </div>
    </motion.div>
  )
}
