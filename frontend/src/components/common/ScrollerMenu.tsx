// src/components/common/ScrollerMenu.tsx
import React from 'react';

interface ScrollerMenuProps {
    isCollapsed: boolean;
    children?: React.ReactNode;
}

const ScrollerMenu: React.FC<ScrollerMenuProps> = ({ isCollapsed, children }) => {
    return (
        <div
            className="scroller-menu"
            style={{
                overflowX: 'hidden',
                overflowY: 'auto',
                height: 'calc(100% - 60px)',
            }}
        >
            <div className={`menu-content ${isCollapsed ? 'menu-collapsed' : ''}`}>
                {children}
            </div>
        </div>
    );
};

export default ScrollerMenu;