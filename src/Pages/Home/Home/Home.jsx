import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import ExpAndEdu from "../Experience&Education/ExpAndEdu";
import MyWorks from "../MyWorks/MyWorks";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-[rgba(199,163,107,0.12)] blur-3xl" />
        <div className="absolute right-[-6rem] top-[28rem] h-80 w-80 rounded-full bg-[rgba(143,162,155,0.10)] blur-3xl" />
        <div className="absolute bottom-[-6rem] left-1/3 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      </div>

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
