import { useState, useEffect } from "react";

const About = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
                const { top, bottom } = aboutSection.getBoundingClientRect();
                setIsSticky(top < 100 && bottom > window.innerHeight);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="about" className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: Image */}
            <div className={`lg:sticky top-24 transition-all duration-300 ${isSticky ? "lg:top-24" : ""}`}>
                <img src="https://i.ibb.co.com/mV7fNncK/rear-view-programmer-working-all-night-long-min.jpg" alt="Creative Illustration" className="w-full h-auto rounded-2xl shadow-lg" />
            </div>

            {/* Right Side: Bullet Point Text */}
            <div className="text-white space-y-6">
                <h2 className="text-4xl font-bold text-blue-400">About Me</h2>
                <ul className="space-y-4 text-lg">
                    <li className="flex items-center gap-3">
                        <span className="text-blue-500 text-2xl">✔</span>
                        <p>I'm a passionate web developer with expertise in the MERN stack.</p>
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="text-blue-500 text-2xl">✔</span>
                        <p>Competitive Programmer with a strong grasp of DSA concepts.</p>
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="text-blue-500 text-2xl">✔</span>
                        <p>Currently learning Next.js and TypeScript for advanced web applications.</p>
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="text-blue-500 text-2xl">✔</span>
                        <p>Building a language learning platform to help students learn Chinese efficiently.</p>
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="text-blue-500 text-2xl">✔</span>
                        <p>Always open to opportunities for remote web development jobs.</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default About;
