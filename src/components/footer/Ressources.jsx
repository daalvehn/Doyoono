import React, { useState } from 'react'

const Ressources = () => {
    const [display, setDisplay] = useState(false)

    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Ressources</button>
            {display ? (
                <div className="modal">
                    <section className="modal-content">
                        <h3>Ressources</h3>
                        <ul>
                            <li>
                                Music by Wavecont
                                <a
                                    href="https://www.wavecont.com/free-download"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    wavecont.com
                                </a>
                            </li>
                            <li>
                                Sound effects by Soundeffects+{' '}
                                <a
                                    href="https://www.soundeffectsplus.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    soundeffectsplus.com
                                </a>
                            </li>
                            <li>
                                Background by Freepik
                                <a
                                    href="https://fr.freepik.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    freepik.com
                                </a>
                            </li>
                            <li>
                                API by Open Trivia
                                <a href="https://opentdb.com/" target="_blank">
                                    opentdb.com
                                </a>
                            </li>
                        </ul>
                        <div className="flex-center">
                            <button
                                className="btn-close"
                                onClick={() => setDisplay(handleClick)}
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

export default Ressources
