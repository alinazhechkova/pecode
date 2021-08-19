import React from 'react';
import { SingleEpisode } from './SingleEpisode';
export const EpisodeList = ({ episodes }) => {
    console.log(episodes);
    if (episodes === undefined) {
        return (<div>Loading...</div>)
    } else {
        return (<div className="row mb-4 mx-auto">
            {episodes.map(item => (
                <div className="col-12 col-md-6" key={item.key}>
                    <SingleEpisode item={item} />
                </div>
            ))}
        </div >)
    }
}
