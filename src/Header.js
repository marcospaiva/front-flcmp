import React from 'react'

const Header = () => {

    return (
        <svg viewBox="0 0 100 100" className="logo">
            <path id="curve" fill="transparent" d="M0,50a50,50 0 1,0 100,0a50,50 0 1,0 -100,0" />
            <text alignment-baseline="baseline">
                <textPath xlinkHref="#curve">
                    nomes de garçom.
                </textPath>
            </text>
        </svg>
    );
}

export default Header;