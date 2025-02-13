import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (

        <footer className="footer p-10 text-neutral-content">
            <aside>
                
                <p>Jobayer Ahmed Sajid.<br />
                <p>Junior Frontend Web developer</p></p>
            </aside>
            <nav>
                <header className="footer-title">Social</header>
                <div className="grid grid-flow-col gap-4 text-4xl">
                    <a href="https://facebook.com/jubayer.ahmed.sajid">
                        <FaFacebook></FaFacebook>
                    </a>
                    <a href="https://github.com/Jubayer-Ahmed-Sajid">
                        <FaGithub></FaGithub>
                    </a>
                    <a  href="www.linkedin.com/in/jobayer-ahmed-sajid">
                        <FaLinkedin>

                        </FaLinkedin>

                    </a>
                </div>
            </nav>
        </footer>
    )
};

export default Footer;