import React from 'react'

function Header() {
  return (
    <div className="header">
        <div className="steps">
            <div className="step">
                <div className="step-number">
                    1
                </div>
                <div className="step-name">
                    EXTERIOR
                </div>
            </div>
            <div className="step">
                <div className="step-number">
                    2
                </div>
                <div className="step-name">
                    INTERIOR
                </div>
            </div>
            <div className="step">
                <div className="step-number">
                    3
                </div>
                <div className="step-name">
                    OPTIONS
                </div>
            </div>
            <div className="step">
                <div className="step-number">
                    4
                </div>
                <div className="step-name">
                    SUMMARY
                </div>
            </div>
        </div>
        <div className="logo">
            <img src="../../img/Logo.svg" alt="Lamborghini." />
        </div>
    </div>
  )
}

export default Header