
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

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

    const scriptURL = 'https://script.google.com/macros/s/AKfycby6LO1D0Fnhfrh1aAGEtULfW6OsXU-WZr9CRK6JEsHnvTbPcilUks687hqI3vz4vrp3/exec';
    const formData = new FormData();
    formData.append('Name', form.name);
    formData.append('Email', form.email);
    formData.append('Message', form.message);

    fetch(scriptURL, { method: 'POST', body: formData })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setLoading(false);
        setSubmissionStatus("success"); 

        setForm({
          name: "",
          email: "",
          message: "",
        });
        const timeoutId = setTimeout(() => {
          setSubmissionStatus(null);
        }, 5000);

        // Clear the timeout if component unmounts or a new submission status message is set
        return () => clearTimeout(timeoutId);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
        setSubmissionStatus("error");
      });
    // template_yhs05ch-template id
    // service_ztwtdvh-service id
    // 5KMQ7ivq9QXfS0fJb-public key

    // emailjs
    //   .send(
    //     'service_ztwtdvh',
    //     'template_yhs05ch',
    //     {
    //       from_name: form.name,
    //       to_name: "Shanu Kumar",
    //       from_email: form.email,
    //       to_email: "shanusah8001@gmail.com",
    //       message: form.message,
    //     },
    //     // 'zJsaoiVyPk0C55OSf'
    //     '111013435506-8uti8qdv6rqmk8gk1arrj3nm5oo4dvkt.apps.googleusercontent.com',
        
    //   )
    //   .then(
    //     () => {
    //       setLoading(false);
    //       alert("Thank you. I will get back to you as soon as possible.");

    //       setForm({
    //         name: "",
    //         email: "",
    //         message: "",
    //       });
    //     },
    //     (error) => {
    //       setLoading(false);
    //       console.error(error);

    //       alert("Ahh, something went wrong. Please try again.");
    //     }
    //   );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <p className={styles.sectionSubText}>
          <h3 >Email : shanusah8001@gmail.com</h3>
          <h3 >Phone No. : +91-9304641125</h3>
        </p>
        {/* <h3 className={styles.sectionHeadText}>Contact.</h3> */}

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
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
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
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        {submissionStatus === "success" && (
        <p className="text-green-500 mt-4">Thank you,Your message has been received,I will make it a priority to respond to your inquiry.</p>
      )}
      {submissionStatus === "error" && (
        <p className="text-red-500 mt-4">Ahh, something went wrong. Please try again.</p>
      )}
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
      {/* <Footer /> */}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");