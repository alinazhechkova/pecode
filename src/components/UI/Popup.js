import React from 'react'

const Popup = ({ children, header, window, setWindow }) => {
    const closePopup = (e) => {
        e.stopPropagation()
        setWindow((window) => !window)
    }

    return (
        <div
            className={`details-window window ${window ? 'active' : null}`}
            onClick={closePopup}
        >
            <div className="window__wrap" onClick={(e) => e.stopPropagation()}>
                <div className="window__header">
                    <h3 className="window__title">{header}</h3>

                    <button
                        type="button"
                        class="window__close"
                        onClick={closePopup}
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="window__main">{children}</div>
            </div>
        </div>
    )
}

export default Popup
