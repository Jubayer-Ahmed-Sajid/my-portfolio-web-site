import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaMailBulk, FaWhatsapp } from 'react-icons/fa';
const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
    });
  }, [])
  return (
    <div id='about' className="bg-black text-white">
      <div className="hero min-h-screen bg-black">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="item w-full" data-aos="fade-left">

          <img src="https://i.ibb.co/prfhFj0/b770f06c-2146-491c-8c0a-c34cb5a0a869-removebg-preview-1.png" className="lg:w-[400px] w-72 rounded-lg" />
          </div>
          <div className='item' data-aos="fade-right">
            <div>  

            <h1 className="text-3xl text-center before:lg:text-5xl font-bold text-[#06af98c0]">Who am I ?</h1>
            <p className="py-6 w-3/4 mx-auto">Hello there, I am Jobayer Ahmed Sajid an aspiring junior MERN stack web developer. I am from Dhaka,Bangladesh. I am pursuing my bachelors degree in Chinese Language and culture. Though I am a Chinese Language student I choose to be a web developer because it is my passion. I am ready to turn your expectation in to visual representation. Connect me for you web solution. I am ready with great excitement to contribute to your project</p>

            <div className='flex items-center justify-center gap-4 text-[#058472]'>
              <FaWhatsapp></FaWhatsapp>
              <div>
            <p className='font-semibold text-white'>WhatsApp</p>
              <p>+8801774042209</p>
              </div>
            </div>
            <div className='flex items-center my-3 ml-8 justify-center gap-4 text-[#058472]'>
              <FaMailBulk></FaMailBulk>
              <div>
            <p className='font-semibold text-white'>Email</p>
              <p>sajid661ac@gmail.com</p>
              </div>
            </div>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

