import React, { Fragment } from 'react';
import { AddWatchItem } from '../../components/watchPage/AddWatchItem';

export const Watch = () => {
    return (
        <Fragment>
            <h1 className="text-primary mb-3">Watch List:</h1>
            Hello!
            <AddWatchItem />
        </Fragment>)
}
