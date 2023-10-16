import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import styles from "../styles";
import logo from '../assets/logo.png'
const Navbar = () =>
    <motion.nav
        variants={navVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false }}
        className={`${styles.xPaddings} py-8 relative w-[100%]`}

    >
        <div >

            <div className="absolute w-[50%] -z-40 inset-0 gradient-01" />
            <div className="flex text-white  gap-2" >
                <div className="flex items-center justify-center">
                    <img src={logo} className="h-[60px] w-[60px]"/>
                    <p className="text-left pl-5 flex-grow font-extrabold text-[25px]">MOHAMMED FATHL | PORTFOLIO </p>
                </div>
                {/* <h5 className="transition-all duration-550 ease-linear border-b-2 border-transparent cursor-pointer text-text-primary hover:text-customPurble hover:border-customPurble"></h5> */}
                {/* <ul className="flex justify-evenly flex-grow  items-center">
                    <h5 className="transition-all duration-550 ease-linear border-b-2 border-transparent cursor-pointer text-text-primary hover:text-customPurble hover:border-customPurble">Learning</h5>
                    <h5 className="transition-all duration-550 ease-linear border-b-2 border-transparent cursor-pointer text-text-primary hover:text-customPurble hover:border-customPurble">Skills</h5>
                    <h5 className="transition-all duration-550 ease-linear border-b-2 border-transparent cursor-pointer text-text-primary hover:text-customPurble hover:border-customPurble">Certifications</h5>
                    <h5 className="transition-all duration-550 ease-linear border-b-2 border-transparent cursor-pointer text-text-primary hover:text-customPurble hover:border-customPurble">Contact</h5>
                </ul> */}
            </div>

        </div>
    </motion.nav>;


export default Navbar;
