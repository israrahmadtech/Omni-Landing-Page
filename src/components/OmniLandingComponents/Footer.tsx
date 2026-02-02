import logo from "../../assets/images/omniLogo.png"
import apple_badge from "../../assets/images/apple-badge.png"
import play_store__badge from "../../assets/images/play-store-badge.png"

import { Instagram, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

function Footer() {
    return (
        <footer id="footer" className="border-t border-black/10 bg-white">
            <div className="my-container py-20">

                {/* Top Footer */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Logo */}
                    <div className="w-25 md:w-30 2xl:w-40">
                        <img className="w-full" src={logo} alt="omni logo" />
                    </div>

                    {/* Platform */}
                    <div>
                        <h4 className="text-base font-semibold text-black mb-4">
                            Platform
                        </h4>

                        <ul className="space-y-3 text-sm text-black/60">
                            <li><a href="#home" className="hover:text-black">Home</a></li>
                            <li><a href="#about" className="hover:text-black">About</a></li>
                            <li><a href="#platform" className="hover:text-black">The Platform</a></li>
                            <li><a href="#industry" className="hover:text-black">Who It’s For</a></li>
                            <li><a href="#how-it-works" className="hover:text-black">How It Works</a></li>
                            <li><a href="#community" className="hover:text-black">Community</a></li>
                            <li><a href="#business" className="hover:text-black">Business & Schools</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-base font-semibold text-black mb-4">
                            Support
                        </h4>

                        <ul className="space-y-3 text-sm text-black/60">
                            <li>Community Guidelines</li>
                        </ul>
                    </div>

                    {/* Install App */}
                    <div>
                        <h4 className="text-base font-semibold text-black mb-4">
                            Install App
                        </h4>

                        <div className="flex flex-col gap-4">
                            {/* Google Play */}
                            <a href="https://play.google.com/store/apps/details?id=com.omni.main">
                                <div className="h-12 w-40 rounded-lg" >
                                    <img className="w-full" src={play_store__badge} alt="" />
                                </div>
                            </a>

                            {/* App Store */}
                            <a href="https://apps.apple.com/pk/app/omni-connects/id6444658082">
                                <div className="h-12 w-40 rounded-lg" >
                                    <img className="w-full" src={apple_badge} alt="" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-16 border-t border-black/10" />

                {/* Bottom Footer */}
                <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Copyright */}
                    <p className="text-sm text-black/60">
                        © 2026 omni. All rights reserved
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        {socials.map(({ icon: Icon, link }, i) => (
                            <a
                                key={i}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-lg
                       bg-orange-100 text-orange-500 transition
                       hover:bg-orange-500 hover:text-white"
                            >
                                <Icon className="h-4 w-4" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

const socials = [
    { icon: Facebook, link: "https://www.facebook.com/omniconnects/?_rdc=2&_rdr" },
    { icon: Instagram, link: "https://www.instagram.com/omni.connects/?igshid=MjEwN2IyYWYwYw%3D%3D" },
    { icon: Youtube, link: "https://www.youtube.com/@omni.connects" },
    { icon: Linkedin, link: "https://linkedin.com/company/omni-connects/" },
    { icon: Twitter, link: "https://www.google.com/url?q=https://twitter.com/omniconnects&sa=D&source=apps-viewer-frontend&ust=1725626761956628&usg=AOvVaw080J2JEiLLm7bG4B4ZorXA&hl=en&source=gmail" },
];