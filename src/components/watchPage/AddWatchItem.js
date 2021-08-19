import React, { Fragment, useState } from 'react';
export const AddWatchItem = () => {
    const [list, setList] = useState({});
    const [count, setCount] = useState(0);
    let res = [];
    const handlerSubmit = (e) => {
        e.preventDefault();
        const input = document.getElementById('episodeName')
        setCount(prev => prev + 1)
        setList({ name: input.value, id: count });
        res.push(list)
        console.log(list, res);
    }
    return (
        <Fragment>
            <form onSubmit={handlerSubmit}>
                <div class="input-group mb-3">
                    <input type="text" id="episodeName" className="form-control" placeholder="Recipient's username" aria-label="Enter the episode name" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Add</button>
                </div>
            </form>
        </Fragment>

    )
}
