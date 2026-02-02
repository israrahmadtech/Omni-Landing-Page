import { useState } from "react"
import Button from "./Button"
import { ArrowRight, Menu, X } from "lucide-react"
import { Link } from "react-router-dom"
import logo from "../../assets/images/omniLogo.png"

function Header() {
    const [open, setOpen] = useState(false)

    return (
        <>
            {/* HEADER */}
            <header className="py-4 sm:py-6">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <div className="w-20 sm:w-25 md:w-30">
                        <img className="w-full" src={logo} alt="omni logo" />
                    </div>

                    {/* Desktop Nav */}
                    <nav className="flex-1 hidden xl:block">
                        <ul className="flex items-center gap-8 text-base 2xl:text-lg text-[#A2A2A2] w-fit mx-auto">
                            <li><a href="#home" className="hover:text-black">Home</a></li>
                            <li><a href="#about" className="hover:text-black">About</a></li>
                            <li><a href="#platform" className="hover:text-black">The Platform</a></li>
                            <li><a href="#industry" className="hover:text-black">Who It’s For</a></li>
                            <li><a href="#how-it-works" className="hover:text-black">How It Works</a></li>
                            <li><a href="#community" className="hover:text-black">Community</a></li>
                            <li><a href="#business" className="hover:text-black">Business & Schools</a></li>
                        </ul>
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden xl:block">
                        <Link to="/">
                            <Button icon={<ArrowRight size={20} />} variant="primary" className="text-white bg-orange-500 hover:bg-orange-600 cursor-pointer xl:text-sm 2xl:text-lg">
                                Join OMNI CONNECTS
                            </Button>
                        </Link>
                    </div>

                    {/* Right Side Actions (Mobile) */}
                    <div className="flex items-center gap-4 xl:hidden">

                        {/* Mobile CTA */}
                        <Link to="/" className="hidden sm:flex">
                            <Button
                                variant="primary"
                                className="text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 text-sm"
                            >
                                Join OMNI Connects
                            </Button>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setOpen(true)}
                            className="text-black cursor-pointer"
                        >
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </header>

            {/* OVERLAY */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                />
            )}

            {/* SIDEBAR */}
            <aside
                className={`fixed top-0 left-0 h-full w-72 bg-white/70 backdrop-blur-md z-50 p-6
                transform transition-transform duration-300
                ${open ? "translate-x-0" : "-translate-x-full"}`}
            >
                {/* Close */}
                <div className="flex mb-8">
                    <button
                        onClick={() => setOpen(false)}
                        className="ms-auto text-black cursor-pointer"
                    >
                        <X size={28} />
                    </button>
                </div>

                {/* Sidebar Links */}
                <ul className="flex flex-col gap-6 text-black/70">
                    <li><a href="#home" className="hover:text-black" onClick={() => setOpen(false)}>Home</a></li>
                    <li><a href="#about" className="hover:text-black" onClick={() => setOpen(false)}>About</a></li>
                    <li><a href="#platform" className="hover:text-black" onClick={() => setOpen(false)}>The Platform</a></li>
                    <li><a href="#industry" className="hover:text-black" onClick={() => setOpen(false)}>Who It’s For</a></li>
                    <li><a href="#how-it-works" className="hover:text-black" onClick={() => setOpen(false)}>How It Works</a></li>
                    <li><a href="#community" className="hover:text-black" onClick={() => setOpen(false)}>Community</a></li>
                    <li><a href="#business" className="hover:text-black" onClick={() => setOpen(false)}>Business & Schools</a></li>
                </ul>

                {/* Sidebar CTA */}
                <div className="mt-10 block sm:hidden">
                    <Link to="/">
                        <Button
                            variant="primary"
                            className="text-white bg-orange-500 hover:bg-orange-600 cursor-pointer w-full"
                        >
                            Join OMNI CONNECTS
                        </Button>
                    </Link>
                </div>
            </aside>
        </>
    )
}

export default Header
