import Aos from "aos";
import { useEffect } from "react";
import { FaBuromobelexperte, FaGraduationCap } from "react-icons/fa";
const ExpAndEdu = () => {
    useEffect(()=>{
        Aos.init({
            duration:1800
        })
    },[])
    return (
        <div id="education" className="bg-black py-12 px-8">
            <h2 className="text-white text-3xl font-bold text-center" data-aos='fade-up'>Education and <span className="text-[#058472]">Experience</span> </h2>
            <div className=" lg:grid w-full gap-12 grid-cols-2">
                <div className="w-full" data-aos='fade-left'>
                    <div className="my-12 flex items-center gap-2 justify-center">

                        <h2 className="text-2xl text-white font-semibold"> Education </h2>
                        <p className="text-4xl  text-[#058472]"><FaGraduationCap></FaGraduationCap> </p>
                    </div>
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                        <li>
                            <div className="timeline-middle ml-4">
                                <FaGraduationCap className="text-3xl mr-2"></FaGraduationCap>
                            </div>
                            <div className="timeline-start text-white md:text-end mb-10">
                                <h4 className="text-white  font-semibold">2021-present</h4>
                                <p>Bachelor of Chinese Language and Culture </p>
                                <p>University Of Dhaka</p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <div className="timeline-middle ml-4">
                                <FaGraduationCap className="text-3xl text-[#058472]  mr-2"></FaGraduationCap>
                            </div>
                            <div className="timeline-start text-white md:text-end mb-10">
                                <h4 className="text-white  font-semibold">2021-present</h4>
                                <p>Bachelor of Chinese Language and Culture </p>
                                <p>University Of Dhaka</p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <div className="timeline-start text-white md:text-end mb-10">
                                <h4 className="text-white  font-semibold">2021-present</h4>
                                <p>Bachelor of Chinese Language and Culture </p>
                                <p>University Of Dhaka</p>
                            </div>
                            <hr />
                            <div className="timeline-middle ml-4">
                                <FaGraduationCap className="text-3xl text-[#058472]  mr-2"></FaGraduationCap>
                            </div>
                        </li>
                    </ul>
                </div>


                <div className="w-full" data-aos='fade-right'>
                    <div className="my-12 flex items-center gap-2 justify-center">
                        <h2 className="text-white text-2xl text-semibold">Experience</h2>
                        <p className="text-4xl  text-[#058472]">< FaBuromobelexperte></FaBuromobelexperte> </p>
                    </div>
                        <p className="text-white mt-4">I am a dynamic junior MERN stack web developer actively engaged in leveraging cutting-edge technologies to deliver impactful web solutions. Over the past six months, I have successfully conceived and executed multiple projects, showcasing my expertise in the MERN stack. My project portfolio, detailed above, demonstrates a commitment to delivering high-quality and innovative web applications.
                            <br />
                            <br />
                            While my primary focus lies in frontend technologies, I am actively expanding my skill set to encompass backend development, thereby ensuring a comprehensive understanding of the entire development stack. This journey involves continuous learning and a dedicated effort to hone my proficiency in backend technologies within the MERN stack.  </p>
                </div>
            </div>
        </div>

    );
};

export default ExpAndEdu;