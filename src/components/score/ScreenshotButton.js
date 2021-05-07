import React, { useState } from 'react'
import { FcCamera } from 'react-icons/fc'

const ScreenshotButton = ({ image, takeScreenshot }) => {
    const [showButton, setShowButton] = useState(true)

    const handlHideButton = () => {
        setShowButton(!showButton)
    }

    function debugBase64(base64URL) {
        const win = window.open()
        win.document.write(
            '<iframe src="' +
                base64URL +
                '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>'
        )
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
                    <div onClick={() => debugBase64(image)}>
                        <img src={image} height={120} alt="screenshot"></img>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ScreenshotButton
