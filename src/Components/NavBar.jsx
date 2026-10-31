import { useState, useEffect } from "react";

const NavBar = () => {
    const [activeLink, setActiveLink] = useState("#");
    const [isScrolled, setIsScrolled] = useState(false);

    const links = [
        { href: "#", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "#myWorks", label: "Projects" },
        { href: "#education", label: "Education" },
        { href: "#contacts", label: "Contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Determine active section based on scroll position
            if (window.scrollY < 250) {
                setActiveLink("#");
                return;
            }

            const sections = ["contacts", "education", "myWorks", "skills", "about"];
            for (const sectionId of sections) {
                const el = document.getElementById(sectionId);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 100) {
                        setActiveLink(`#${sectionId}`);
                        return;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleLinkClick = (href) => {
        setActiveLink(href);
        // Auto-close DaisyUI dropdown menu on mobile
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
    };

    const navLink = links.map((link) => (
        <li key={link.href}>
            <a
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    activeLink === link.href
                        ? "portfolio-nav-link-active"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
            >
                {link.label}
            </a>
        </li>
    ));

    return (
        <header
            className={`portfolio-shell fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                isScrolled ? "bg-black/80 shadow-2xl" : "bg-black/40"
            }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
                <a href="#" className="flex items-center gap-3">
                    <div className="portfolio-brand-badge flex h-10 w-10 items-center justify-center rounded-2xl text-sm font-bold">
                        JS
                    </div>
                    <div>
                        <p className="text-base font-semibold text-white">Jobayer Ahmed Sajid</p>
                        <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Software Engineer</p>
                    </div>
                </a>

                <div className="dropdown dropdown-end lg:hidden">
                    <div tabIndex={0} role="button" aria-label="Toggle navigation menu" className="btn btn-ghost rounded-2xl border border-white/10 bg-white/5 text-slate-100 hover:bg-white/10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 w-56 rounded-2xl border border-white/10 bg-slate-950/95 p-2 shadow-2xl backdrop-blur-xl">
                        {navLink}
                    </ul>
                </div>

                <nav className="hidden lg:block">
                    <ul className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-2">
                        {navLink}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
