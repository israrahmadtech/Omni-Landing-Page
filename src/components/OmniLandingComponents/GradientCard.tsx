import React from "react";

interface GradientCardProps {
    children: React.ReactNode;
    size?: number;       // optional fixed width/height
    className?: string;
}

const GradientCard: React.FC<GradientCardProps> = ({
    children,
    size,
    className = "",
}) => {
    return (
        <div
            style={size ? { width: size, height: size } : undefined}
            className={`
                backdrop-blur-sm
                bg-[linear-gradient(180deg,_rgba(239,106,31,0.20)_0%,_rgba(239,94,26,0.05)_100%)]
                ${className}
            `}
        >
            {children}
        </div>
    );
};

export default GradientCard;
