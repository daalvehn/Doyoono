import React, { useState } from 'react'
import { FcCamera } from 'react-icons/fc'

const ScreenshotButton = ({ image, takeScreenshot }) => {
    const [showButton, setShowButton] = useState(true)

    const handlHideButton = () => {
        setShowButton(!showButton)
    }

    return (
        <div className="scr-container">
            <div
                style={{ display: showButton ? 'block' : 'none' }}
                onClick={handlHideButton}
            >
                <FcCamera
                    className="scr-btn"
                    onClick={() => takeScreenshot()}
                />
            </div>
            {image && (
                <img
                    className="camera-img"
                    width={600}
                    src={image}
                    alt="screenshot"
                />
            )}
        </div>
    )
}

export default ScreenshotButton
