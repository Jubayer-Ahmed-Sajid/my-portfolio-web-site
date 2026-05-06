import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-slate-950/80 px-6 py-10 text-slate-300">
            <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <p className="text-lg font-semibold text-white">Jobayer Ahmed Sajid</p>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                        Software engineer focused on problem solving, clean architecture,
                        and dependable delivery.
                    </p>
                </div>
                <nav>
                    <p className="text-xs uppercase tracking-[0.35em] portfolio-section-label">Social</p>
                    <div className="mt-4 flex gap-4 text-2xl">
                        <a
                            href="mailto:sajid661aca@gmail.com"
                            className="transition-colors hover:text-[color:var(--accent)]"
                            aria-label="Email"
                        >
                            <FaEnvelope />
                        </a>
                        <a
                            href="https://github.com/Jubayer-Ahmed-Sajid"
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors hover:text-[color:var(--accent)]"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jobayer-ahmed-sajid"
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors hover:text-[color:var(--accent)]"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </nav>
            </div>
        </footer>
    )
};

export default Footer;