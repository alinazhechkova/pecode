import React from 'react'
export const WatchItem = ({ item, list, setList }) => {
    const deleteHandler = () => {
        setList(list.filter((el) => el.id !== item.id))
    }
    const completeHandler = () => {
        setList(
            list.map((el) => {
                if (el.id === item.id) {
                    return {
                        ...el,
                        completed: !el.completed,
                    }
                }
                return el
            })
        )
    }
    return (
        <div
            className={`watch list-group-item  ${
                item.completed ? 'completed' : null
            }`}
        >
            <li className={`watch__item`}>{item.episodeName}</li>
            <div className="watch__btn-wrap">
                <button
                    onClick={completeHandler}
                    className="watch__btn_complete watch__btn"
                >
                    <i className="fas fa-check"></i>
                </button>
                <button
                    onClick={deleteHandler}
                    className="watch__btn_trash watch__btn"
                >
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </div>
    )
}
