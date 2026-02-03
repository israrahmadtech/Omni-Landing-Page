import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'tertiary';
    onClick?: () => void;
    className?: string;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    onClick,
    className = '',
    icon,
    iconPosition = 'right',
}) => {
    const baseStyles =
        'group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300';

    const variantStyles = {
        primary:
            'px-4 py-2 text-sm md:px-4 md:py-2 md:text-lg' +
            'shadow-md md:shadow-lg hover:shadow-xl',

        secondary:
            'px-4 py-2 text-sm md:px-4 md:py-1.5 md:text-base ' +
            'relative text-orange-500 backdrop-blur-sm ' +
            'bg-[linear-gradient(180deg,_rgba(239,106,31,0.20)_0%,_rgba(239,94,26,0.06)_100%)]',

        tertiary:
            'px-2 2xl:px-3 text-xs 2xl:text-sm tracking-wide ' +
            'relative text-orange-500 backdrop-blur-sm ' +
            'bg-[linear-gradient(180deg,_rgba(239,106,31,0.20)_0%,_rgba(239,94,26,0.06)_100%)]'
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        >
            {icon && iconPosition === 'left' && (
                <span className="transition-transform group-hover:-translate-x-0.5">
                    {icon}
                </span>
            )}

            {children}

            {icon && iconPosition === 'right' && (
                <span className="transition-transform group-hover:translate-x-0.5">
                    {icon}
                </span>
            )}
        </button>
    );
};

export default Button;
