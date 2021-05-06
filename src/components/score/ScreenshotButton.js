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
                    <h2>click below to save your score</h2>

                    <a target="blank" href={image}>
                        <img src={image} height={120} alt="screenshot"></img>
                    </a>
                </div>
            )}
        </div>
    )
}

export default ScreenshotButton
