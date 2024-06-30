import React from 'react';

interface ButtonProps {
    name: string;
    icon?: React.ReactNode;
    bg?: string;
    color?: string;
    border?: string;
}

const CommonButton = ({ name, icon, bg = "var(--color-bg)", color, border }: ButtonProps) => {
    const baseClasses = 'px-4 py-2 rounded-full text-md font-regular text-sm font-medium text-muted transition-all duration-200 lg:text-base hover:text-white focus:text-white flex items-center';
    const bgClass = bg ? `bg-${bg}` : '';
    const colorClass = color ? `text-${color}` : '';
    const borderStyle = border ? `border ${border}` : '';

    return (
        <button
            style={{
                background: bg,
                color: color,
                border: border ?? border, // Conditional border
            }}
            className={`${baseClasses} ${bgClass} ${colorClass} ${borderStyle}`}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {name}
        </button>
    );
};

export default CommonButton;
