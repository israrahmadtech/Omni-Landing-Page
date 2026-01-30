import React from "react";
import { Heart, type LucideIcon } from "lucide-react";

interface GradientIconCardProps {
    icon?: LucideIcon;
    size?: number;       // optional fixed size
    iconSize?: number;   // optional fixed icon size
    className?: string;
}

const GradientIconCard: React.FC<GradientIconCardProps> = ({
    icon: Icon = Heart,
    size,
    iconSize,
    className = "",
}) => {
    return (
        <div
            style={size ? { width: size, height: size } : undefined}
            className={`
                flex items-center justify-center rounded-2xl
                backdrop-blur-sm
                bg-[linear-gradient(180deg,_rgba(239,106,31,0.20)_0%,_rgba(239,94,26,0.05)_100%)]

                /* Responsive sizes */
                w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[72px] lg:h-[72px]

                ${className}
            `}
        >
            <Icon
                size={iconSize ?? 20}
                className=" text-orange-500 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 "
            />
        </div>
    );
};

export default GradientIconCard;
