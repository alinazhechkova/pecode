import React from 'react'
import WatchItem from './WatchItem'

const WatchList = ({ list, setList }) => {
    const onDelete = (item) => {
        setList(list.filter((el) => el.id !== item.id))
    }

    const onComplete = (item) => {
        const newList = list.map((el) => {
            if (el.id === item.id) {
                return {
                    ...el,
                    completed: !el.completed,
                }
            }
            return el
        })

        setList(newList)
    }

    return (
        <div className="watch-container mb-4 mt-4 mx-auto">
            <ul className="watch__list list-group">
                {list.map((item) => (
                    <WatchItem
                        onComplete={onComplete}
                        onDelete={onDelete}
                        item={item}
                        key={item.id}
                    />
                ))}
            </ul>
        </div>
    )
}

export default WatchList
