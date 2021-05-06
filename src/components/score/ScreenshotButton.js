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
                <div className="camera-img">
                    <h2>click below or "save as" to keep your score</h2>

                    <a href={image} target="_blank">
                        <img src={image} height={120} alt="screenshot"></img>
                    </a>
                </div>
            )}
        </div>
    )
}

export default ScreenshotButton
