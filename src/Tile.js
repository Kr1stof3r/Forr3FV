import React, { useState } from 'react';
import './style/FlexTile.css'; // Import your CSS for styling

const FlexTile = ({ title, children, children2 }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <div className="flex-tile">
            <div onClick={togglePopup}>
                <h2>{title}</h2>
                <div className="tile-content">
                        {children}
                </div>
            </div>
            {isPopupOpen && (
                <div className="popup">
                    <button className="close-btn" onClick={togglePopup}>Close</button>
                    <h2>{title}</h2>
                        {children2}

                </div>
            )}
        </div>
    );
};

export default FlexTile;