import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
    });
  }, [])
  return (
    <div className="bg-black text-white">
      <div className="hero min-h-screen bg-black">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="item" data-aos="fade-left">

          <img src="https://i.ibb.co/prfhFj0/b770f06c-2146-491c-8c0a-c34cb5a0a869-removebg-preview-1.png" className="max-w-sm rounded-lg mr-56" />
          </div>
          <div className='item' data-aos="fade-right">
            <div className='w-3/4'>  

            <h1 className=" text-3xl before:lg:text-5xl font-bold text-[#06af98c0]">Who am I ?</h1>
            <p className="py-6">Hello I am a junior MERN stack web developer. <br />In deleniti eaque aut repudiandae et a id nisi.</p>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

