import React from "react";

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className }) => {
    return (
        <div
            className={`relative overflow-hidden rounded-2xl border-2 border-orange-400/20 transition-all duration-300
                        backdrop-blur-md ${className || ""}`}
        >
            {/* Orange Gradient Accent */}
            <div className="absolute top-0 right-0 h-full w-full bg-gradient-to-l from-[#EF5E1A33] to-transparent pointer-events-none rounded-l-full"></div>

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default GlassCard;
