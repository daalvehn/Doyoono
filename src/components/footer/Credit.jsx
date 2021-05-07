import React, { useState } from 'react'

const Credits = () => {
    const [display, setDisplay] = useState(false)

    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Credits</button>
            {display ? (
                <div className="modal">
                    <section className="modal-content">
                        <h3>Credits</h3>
                        <div className="flex-center">
                            <ul>
                                <li>Milad Behzadi</li>
                                <li>Julien Bourgineau</li>
                                <li>Pierre Houot</li>
                                <li>Manon Josse</li>
                                <li>Sylvain Laconi</li>
                            </ul>
                        </div>
                        <div className="flex-center">
                            <button
                                className="btn-close"
                                onClick={() => setDisplay(!display)}
                            >
                                Close
                            </button>
                        </div>
                    </section>
                </div>
            ) : null}
        </div>
    )
}

export default Credits
