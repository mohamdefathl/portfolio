import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion'
const LearningCard = ({ index, color, textColor, title, subtitle }) => {
    return (
        <motion.div
            variants={fadeIn('right', 'tween', index * 0.4, 0.4)}
            whileHover={{ scale:1.03 }}
            className='green-pink-gradient p-[1px] rounded-md' >
            <div

                className={` rounded-md shadow-lg ${color} h-[250px] w-[250px] bg-[#1D1836] p-[14px]`}>
                <p className={` my-2 ${textColor}`}>{title}</p>
                <p className={`  text-white`}>{subtitle}</p>
            </div >
        </motion.div>

    );
}

export default LearningCard;
