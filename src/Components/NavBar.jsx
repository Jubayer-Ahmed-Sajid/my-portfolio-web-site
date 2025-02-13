import { useState, useEffect } from "react";

const NavBar = () => {
    const [activeLink, setActiveLink] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleHashChange = () => {
            setActiveLink(window.location.hash);
        };

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // Navbar effect on scroll
        };

        window.addEventListener("hashchange", handleHashChange);
        window.addEventListener("scroll", handleScroll);

        handleHashChange(); // Set initial active link

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navLink = (
        <>
            {[
                { href: "#", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#myWorks", label: "Projects" },
                { href: "#education", label: "Education" },
                { href: "#contacts", label: "Contact" },
            ].map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 transition-all duration-300 hover:text-blue-500 
                        ${
                            activeLink === link.href
                                ? "text-blue-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-500"
                                : "text-white"
                        }`}
                >
                    <li className="list-none">{link.label}</li>
                </a>
            ))}
        </>
    );

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 transition-all rounded-3xl duration-300 
                ${isScrolled ? "bg-blue-900/80 backdrop-blur-md shadow-lg" : "bg-transparent"}
            `}
        >
            <div className="navbar px-2 py-2 text-white">
                <div className="navbar-start w-full flex justify-between">
                    {/* Mobile Dropdown */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg space-y-2 rounded-box w-52 bg-gray-900/90 text-white">
                            {navLink}
                        </ul>
                    </div>
                    {/* Logo / Name */}
                    <p className="lg:text-2xl font-semibold">Jobayer Ahmed Sajid</p>
                </div>

                {/* Desktop Nav */}
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal flex justify-between gap-8">{navLink}</ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
