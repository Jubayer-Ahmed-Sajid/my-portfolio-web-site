import { FaDownload } from 'react-icons/fa';
import './banner.css'
import { TypeAnimation } from 'react-type-animation';
import { useEffect } from 'react';
import Aos from 'aos';
const Banner = () => {
    useEffect(()=>{
        Aos.init({
            duration: 1500,
        })
    },[])
    const downloadResume = () => {
        const pdfUrl = "../../../../public/resume_001.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "resume_001.pdf"; // Corrected: Provide the desired name without the dot (.)
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    
    return (
        <div className="hero mb-0 flex justify-center banner  text-white ">
            <div className="hero-content   justify-center items-center mb-0">
                <div className="ml-6">
                    <h1 className="text-2xl lg:text-5xl text-center mb-2 font-bold" data-aos='zoom-in'>Hello, <br /> I am Jobayer Ahmed Sajid!</h1>
                    <TypeAnimation
                        sequence={[
                            'Unleashing Digital Excellence.',
                            1000, // 
                            'Crafting Tomorrow, Today.',
                            1000,
                            'Connect, Create, Captivate.',
                            1000,
                            'Transforming Vision into Reality',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        className='text-yellow-400 text-xl text-semibold mb-4 '
                        repeat={Infinity}
                    />
                    <br />
                    <button onClick={downloadResume} className="btn font-semibold mt-2 btn-primary"> <FaDownload></FaDownload>Download Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;