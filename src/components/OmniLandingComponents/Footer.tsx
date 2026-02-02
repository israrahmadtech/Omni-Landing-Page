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
                            <li>About</li>
                            <li>The Platform</li>
                            <li>Who It’s For</li>
                            <li>How It Works</li>
                            <li>Community</li>
                            <li>Business & Schools</li>
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
                            <div className="h-12 w-40 rounded-lg" >
                                <img src={apple_badge} alt="" />
                            </div>

                            {/* App Store */}
                            <div className="h-12 w-40 rounded-lg" >
                                <img src={play_store__badge} alt="" />
                            </div>
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
                        {[Instagram, Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                            <div
                                key={i}
                                className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 text-orange-500
                       transition hover:bg-orange-500 hover:text-white cursor-pointer"
                            >
                                <Icon className="h-4 w-4" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
