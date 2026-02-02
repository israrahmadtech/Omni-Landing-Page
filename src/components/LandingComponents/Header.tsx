import { useState } from "react"
import Button from "./Button"
import { Menu, X } from "lucide-react"
import { Link } from "react-router-dom"

function Header() {
    const [open, setOpen] = useState(false)

    return (
        <>
            {/* HEADER */}
            <header className="absolute top-0 left-0 right-0 z-50 py-6">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <h1 className="text-white text-xl sm:text-2xl font-bold tracking-wider">
                        HECTOR OVIEDO
                    </h1>

                    {/* Desktop Nav */}
                    <nav className="flex-1 hidden xl:block">
                        <ul className="flex items-center gap-8 text-white/80 w-fit mx-auto">
                            <li><a href="#" className="hover:text-white">Home</a></li>
                            <li><a href="#journey" className="hover:text-white">The Journey</a></li>
                            <li><a href="#vision" className="hover:text-white">The Vision</a></li>
                            <li><a href="#platform" className="hover:text-white">The Platform</a></li>
                            <li><a href="#impact" className="hover:text-white">Impact</a></li>
                            <li><a href="#about" className="hover:text-white">Join OMNI</a></li>
                        </ul>
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden xl:block">
                        <Link to="/">
                            <Button variant="primary" className="bg-orange-500 hover:bg-orange-600 cursor-pointer">Join OMNI CONNECTS</Button>
                        </Link>
                    </div>

                    {/* Right Side Actions (Mobile) */}
                    <div className="flex items-center gap-4 xl:hidden">

                        {/* Mobile CTA */}
                        <Button variant="primary" className="px-4 py-2 text-sm hidden sm:flex">Join OMNI Connects</Button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setOpen(true)}
                            className="text-white cursor-pointer"
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
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                />
            )}

            {/* SIDEBAR */}
            <aside
                className={`fixed top-0 left-0 h-full w-72 bg-black/50 backdrop-blur-md z-50 p-6
                transform transition-transform duration-300
                ${open ? "translate-x-0" : "-translate-x-full"}`}
            >
                {/* Close */}
                <div className="flex mb-8">
                    <button
                        onClick={() => setOpen(false)}
                        className="text-white ms-auto cursor-pointer"
                    >
                        <X size={28} />
                    </button>
                </div>

                {/* Sidebar Links */}
                <ul className="flex flex-col gap-6 text-white/80">
                    <li><a className="hover:text-white" onClick={() => setOpen(false)} href="#">Home</a></li>
                    <li><a className="hover:text-white" onClick={() => setOpen(false)} href="#journey">The Journey</a></li>
                    <li><a className="hover:text-white" onClick={() => setOpen(false)} href="#vision">The Vision</a></li>
                    <li><a className="hover:text-white" onClick={() => setOpen(false)} href="#platform">The Platform</a></li>
                    <li><a className="hover:text-white" onClick={() => setOpen(false)} href="#impact">Impact</a></li>
                    <li><a className="hover:text-white" onClick={() => setOpen(false)} href="#about">Join OMNI</a></li>
                </ul>

                {/* Sidebar CTA */}
                <div className="mt-10 block sm:hidden">
                    <Link to="/">
                        <Button variant="primary" className="cursor-pointer w-full">Join OMNI CONNECTS</Button>
                    </Link>
                </div>
            </aside>
        </>
    )
}

export default Header
