import React from 'react';
import { fadeIn } from '../utils/motion'
import { motion } from 'framer-motion'

const ProjectCard = ({ img, name, description, children,index }) => {
    return (
        <motion.div
            variants={fadeIn('up', 'spring', index * 0.4, 1.5)}
            className={`relative flex flex-col items-center justify-center w-[400px] pb-[40px] text-white rounded-md  bg-[#151030] p-[14px]`}
        >
            <div className='h-[130px] w-[130px] m-[10px]'>
                <img className='' src={img} />
            </div>
            <div className='mt-10'>
                <h3 className='text-white font-bold text-left text-[24px]'>{name}</h3>
                <p className='mt-2 text-gray-300    text-left text-[14px]'>{description}</p>
            </div>
            <div>
                <div className='absolute bottom-0 left-0 mt-4 p-[10px] flex flex-wrap gap-2'>
                    {children}
                </div>


            </div>
        </motion.div>
    );
}

export default ProjectCard;
