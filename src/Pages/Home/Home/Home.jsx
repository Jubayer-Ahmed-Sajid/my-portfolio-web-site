import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import ExpAndEdu from "../Experience&Education/ExpAndEdu";
import MyWorks from "../MyWorks/MyWorks";
// import MyWorks from "../MyWorks/MyWorks";
import Skills from "../Skills/Skills";

const Home = () => {
    return (
        <div className="">
           
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <MyWorks></MyWorks>
            <ExpAndEdu></ExpAndEdu>
            <Contact></Contact>
           
           
        </div>
    );
};

export default Home;