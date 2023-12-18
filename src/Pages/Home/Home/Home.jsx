import About from "../About/About";
import Banner from "../Banner/Banner";
import ExpAndEdu from "../Experience&Education/ExpAndEdu";
import MyWorks from "../MyWorks/MyWorks";
import Skills from "../Skills/Skills";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <MyWorks></MyWorks>
            <ExpAndEdu></ExpAndEdu>
        </div>
    );
};

export default Home;