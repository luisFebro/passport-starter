import React from 'react';

export default function Col({ children, style, className }) {
    return (
        <div className={`col ${className}`} style={style}>
            {children}
        </div>
    );
}