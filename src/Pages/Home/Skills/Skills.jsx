import './Skills.css'
const Skills = () => {
    return (
        <div className="skills">

            <h2 className=' text-4xl text-center mt-20 py-8'>Skills</h2>
            <div className='lg:grid grid-cols-3 gap-12 justify-center items-center  mx-auto  mt-32'>
                <div>
                    <img src="https://i.ibb.co/Xp0vCQd/kisspng-react-logo-javascript-front-and-back-ends-user-int-5afef575c096e1-8015139215266584217889.png" alt="" className='h-20 mx-auto object-cover' />
                    <p className="text-center font-semibold mt-3 ">React</p> 
                </div>
                <div><img src="https://i.ibb.co/q9FWKFT/pngfind-com-pc-master-race-png-1363736.png" className='h-20 mx-auto object-cover' alt="" />
                <p className="text-center font-semibold mt-3 ">Express Js</p></div>
                <div><img src="https://i.ibb.co/G2rsZZb/pngwing-com-2.png" className='h-20 mx-auto object-cover' alt="" />
                <p className="text-center font-semibold mt-3 ">Node Js</p></div>
                <div><img src="https://i.ibb.co/9cpxRJ2/pngwing-com-3.png" className='h-20 object-cover mx-auto' alt="" />
                <p className="text-center font-semibold mt-3 ">MongoDB</p></div>
                <div><img src="https://i.ibb.co/VL2f0CW/pngwing-com-1.png" className='h-20 mx-auto object-cover' alt="" />
                <p className="text-center font-semibold mt-3 ">JavaScript</p></div>
                <div><img src="https://i.ibb.co/VQYXV8t/pngwing-com-4.png" className='h-20 mx-auto object-cover' alt="" />
                <p className="text-center font-semibold mt-3 ">Tailwind css</p></div>

            </div>

        </div>
    );
};

export default Skills;