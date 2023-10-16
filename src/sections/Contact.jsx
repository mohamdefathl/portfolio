import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

// import { styles } from "../";
import { fadeIn, staggerContainer } from "../utils/motion";
const ContactInfo = ({ data }) => {
  return (
    <div className="flex flex-col gap-12">
      {data.map((item, index) => (
        <div key={index} className="bg-[#151030] py-4 px-3 text-white rounded-lg outline-none border-none font-medium">
          <p className="text-start text-white font-medium mb-4">
            <span>{item.label} : </span> {item.value}
          </p>
        </div>
      ))}
    </div>
  );
};

const contactData = [
  { label: 'Name', value: 'Mohammed fathl mohammed al-ghorbany' },
  { label: 'Phone', value: '+967 778 940 511' },
  { label: 'Email', value: 'mohammedfadl.work@gmail.com' },
  { label: 'Location', value: 'Amanat Alasimah - Al Asbahi' },
  { label: 'Birth Date', value: '2001/01/05' },
];
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    //
    // 
    // 
    emailjs
      .send(
        "service_lkeseuk",
        "template_x7p39gm",
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "mohammedfadl.work@gmail.com",
          message: form.message,
        },
        "CPrmgkvwlb8KxWYPZ"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden justify-around items-center w-full`}
    >
      <motion.div
        className='  bg-black p-8 rounded-2xl w-[40%]'
        variants={fadeIn('right', 'spring', 0.5, 1.5)}
      >
        <p className='sm:text-[18px] text-[14px] text-gray-400 uppercase tracking-wider'>Get in touch</p>
        <h3 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]' >Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-[#151030] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'spring', 0.8, 1.5)}
        className=' bg-black p-8 rounded-2xl w-[40%]'
      >
        <h3 className='my-[30px] text-white font-black md:text-[40px] sm:text-[35px] xs:text-[30px] text-[20px]' >My personal info.</h3>
        <ContactInfo data={contactData} />
      </motion.div>
    </motion.div>
  );
};

export default Contact;
