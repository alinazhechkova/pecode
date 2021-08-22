import React from 'react';
import { WatchItem } from './WatchItem';
export const WatchList = ({ list, setList }) => {
    return (<div className="watch-container mb-4 mt-4 mx-auto">
        <ul className="watch__list list-group">
            {list.map(item => (
                <WatchItem setList={setList} list={list} item={item} key={item.id} />
            ))}
        </ul>
    </div>)
}
