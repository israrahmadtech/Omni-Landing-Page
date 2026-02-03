import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    onClick,
    className = ''
}) => {
    const baseStyles =
        'flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ' +
        'px-4 py-2 text-sm md:px-6 md:py-3 md:text-base 2xl:px-8 2xl:py-4 2xl:text-lg';

    const variantStyles = {
        primary:
            'bg-orange-500 hover:bg-orange-600 text-white shadow-md md:shadow-lg hover:shadow-xl',

        secondary:
            'relative border border-white/70 text-white hover:bg-white/10 backdrop-blur-sm' +
            'before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-l ' +
            'before:from-orange-500/20 before:to-transparent before:pointer-events-none'
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        >
            {children}
            {variant === 'primary' && (
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform group-hover:translate-x-1"
                >
                    <path
                        d="M7.5 15L12.5 10L7.5 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
        </button>
    );
};

export default Button;