import { useEffect } from 'react';
import './Skills.css'
import Aos from 'aos';
const Skills = () => {
    useEffect(()=>{
        Aos.init({
            duration:1800,
        })
        
    },[])
    return (
        <div id='skills' className="skills" >

            <h2 className=' text-4xl text-center   py-8 ' data-aos='fade-left'>Skills</h2>
            <div className='grid grid-cols-3 lg:gap-12 gap-4 justify-center items-center  mx-auto  mt-32'>
                <div className='item' data-aos='zoom-in'>
                    <img src="https://i.ibb.co/Xp0vCQd/kisspng-react-logo-javascript-front-and-back-ends-user-int-5afef575c096e1-8015139215266584217889.png" alt="" className='h-8 lg:h-20 mx-auto object-cover' />
                    <p className="text-center font-semibold mt-3 ">React</p> 
                </div>
                <div data-aos='zoom-in'><img src="https://i.ibb.co/q9FWKFT/pngfind-com-pc-master-race-png-1363736.png" className='h-8 lg:h-20 mx-auto object-cover' alt="" />
                <p className="text-center font-semibold mt-3 ">Express Js</p></div>
                <div data-aos='zoom-in'><img src="https://i.ibb.co/G2rsZZb/pngwing-com-2.png" className='h-8 lg:h-20 mx-auto object-cover' alt="" />
                <p className="text-center font-semibold mt-3 ">Node Js</p></div>
                <div data-aos='zoom-in'><img src="https://i.ibb.co/9cpxRJ2/pngwing-com-3.png" className='h-8 lg:h-20 object-cover mx-auto' alt="" />
                <p className="text-center font-semibold mt-3 ">MongoDB</p></div>
                <div data-aos='zoom-in'><img src="https://i.ibb.co/VL2f0CW/pngwing-com-1.png" className='h-8 lg:h-20 mx-auto object-cover' alt="" />
                <p className="text-center font-semibold mt-3 ">JavaScript</p></div>
                <div data-aos='zoom-in'><img src="https://i.ibb.co/VQYXV8t/pngwing-com-4.png" className='h-8 lg:h-20 mx-auto object-cover' alt="" />
                <p className="text-center font-semibold mt-3 ">Tailwind css</p></div>

            </div>

        </div>
    );
};

export default Skills;