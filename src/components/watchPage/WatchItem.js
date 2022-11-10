import React from 'react'

const WatchItem = ({ item, onDelete, onComplete }) => (
    <div
        className={`watch list-group-item  ${
            item.completed ? 'completed' : null
        }`}
    >
        <li className={`watch__item`}>{item.episodeName}</li>
        <div className="watch__btn-wrap">
            <button
                onClick={() => onComplete(item)}
                className="watch__btn_complete watch__btn"
            >
                <i className="fas fa-check"></i>
            </button>
            <button
                onClick={() => onDelete(item)}
                className="watch__btn_trash watch__btn"
            >
                <i className="fas fa-trash"></i>
            </button>
        </div>
    </div>
)

export default WatchItem
