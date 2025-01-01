import { useEffect } from "react";
import daisy from '../../../assets/daisyui-seeklogo.png'
import reactD from '../../../assets/react-router-seeklogo.svg'
import reactQ from '../../../assets/react-query-seeklogo.png'
import fireB from '../../../assets/firebase-seeklogo.png'
import gitHub from '../../../assets/github-logo.png'
import Aos from "aos";
const Skills = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
    });
  }, []);
  return (
    <div id="skills" className="lg:w-1/2 mx-4 lg:mx-auto">
      <h2 className=" text-4xl text-[#BDC3C7] text-center overflow-hidden my-8 ">
        Skill Sets
      </h2>
      <h2 className="text-2xl text-white font-semibold">Expertise</h2>
      <div className="grid grid-cols-3 lg:gap-8 gap-4 mx-auto mt-8">
        <div className="item bg-white rounded-md py-2 ">
          <img
            src="https://i.ibb.co/Xp0vCQd/kisspng-react-logo-javascript-front-and-back-ends-user-int-5afef575c096e1-8015139215266584217889.png"
            alt=""
            className="h-8 lg:h-12 mx-auto object-cover"
          />
          <p className="text-center font-semibold mt-3 ">React</p>
        </div>

        <div className="bg-white rounded-md py-2 ">
          <img
            src={reactD}
            className="h-8 lg:h-12 mx-auto object-cover"
            alt=""
          />
          <p className="text-center font-semibold mt-3 ">React Router Dom</p>
        </div>
        <div className="bg-white rounded-md py-2 ">
          <img
            src={daisy}
            className="h-8 lg:h-12 mx-auto object-cover"
            alt=""
          />
          <p className="text-center font-semibold mt-3 ">Daisy Ui</p>
        </div>

        <div className="bg-white rounded-md py-2 ">
          <img
            src="https://i.ibb.co.com/fYCrkX9/jwt-seeklogo.png"
            className="h-8 lg:h-12 object-cover mx-auto"
            alt=""
          />
          <p className="text-center font-semibold mt-3 ">JWT</p>
        </div>

        <div className="bg-white rounded-md py-2 ">
          <img
            src="https://i.ibb.co/VL2f0CW/pngwing-com-1.png"
            className="h-8 lg:h-12 mx-auto object-cover"
            alt=""
          />
          <p className="text-center font-semibold mt-3 ">JavaScript</p>
        </div>

        <div className="bg-white rounded-md py-2 ">
          <img
            src="https://i.ibb.co/VQYXV8t/pngwing-com-4.png"
            className="h-8 lg:h-12 mx-auto object-cover"
            alt=""
          />
          <p className="text-center font-semibold mt-3 ">Tailwind css</p>
        </div>
      </div>

      {/* comfortable */}
      <h2 className="text-2xl text-white font-semibold pt-12">Comfortable</h2>
      <div className="grid grid-cols-3 lg:gap-8 gap-4 mx-auto mt-8">
        <div className="item bg-white rounded-md py-2 ">
          <img
            src="https://i.ibb.co/9cpxRJ2/pngwing-com-3.png"
            alt=""
            className="h-8 lg:h-12 mx-auto object-cover"
          />
          <p className="text-center font-semibold mt-3 ">MongoDB</p>
        </div>
        <div className="item bg-white rounded-md py-2 ">
          <img
            src="https://i.ibb.co.com/q9FWKFT/pngfind-com-pc-master-race-png-1363736.png"
            alt=""
            className="h-8 lg:h-12 mx-auto object-cover"
          />
          <p className="text-center font-semibold mt-3 ">Express</p>
        </div>
        <div className="item bg-white rounded-md py-2 ">
          <img
            src="https://i.ibb.co.com/G2rsZZb/pngwing-com-2.png"
            alt=""
            className="h-8 lg:h-12 mx-auto object-cover"
          />
          <p className="text-center font-semibold mt-3 ">Node</p>
        </div>
        <div className="item bg-white rounded-md py-2 ">
          <img
            src={reactQ}
            alt=""
            className="h-8 lg:h-12 mx-auto object-cover"
          />
          <p className="text-center font-semibold mt-3 ">React Query</p>
        </div>
        <div className="item bg-white rounded-md py-2 ">
          <img
            src={fireB}
            alt=""
            className="h-8 lg:h-12 mx-auto object-cover"
          />
          <p className="text-center font-semibold mt-3 ">FireBase</p>
        </div>
        <div className="item bg-white rounded-md py-2 ">
          <img
            src={gitHub}
            alt=""
            className="h-8 lg:h-12 mx-auto object-cover"
          />
          <p className="text-center font-semibold mt-3 ">Github</p>
        </div>
      </div>
     
    </div>
  );
};

export default Skills;
