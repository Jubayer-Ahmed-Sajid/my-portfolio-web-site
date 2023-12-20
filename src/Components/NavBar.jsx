
const NavBar = () => {
    const navLink = <>
        <a >
            <li>Home</li></a>
        <a href="#about" >
            <li>About</li></a>
        <a href="#myWorks" >
            <li>Projects</li></a>
            <a href="#contacts">
                <li>
                Contact
                </li>
            </a>
            <a href="#education">
                <li>
                    Education
                </li>
            </a>
    </>
    return (

        <div className="navbar bg-black text-white">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button"  className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu bg-black menu-sm dropdown-content mt-3 z-[1] p-2 shadow space-y-2 rounded-box w-52 ">
                        {navLink}
                    </ul>
                </div>
                <p className="btn btn-ghost text-xl">Jobayer Ahmed Sajid</p>
                
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal flex justify-between gap-8">
                    {navLink}
                </ul>
            </div>
           
        </div>
    )
};

export default NavBar;