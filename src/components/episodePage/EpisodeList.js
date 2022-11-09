import React from 'react'
import { SingleEpisode } from './SingleEpisode'

export const EpisodeList = ({ episodes }) => {
    return (
        <div className="row mx-auto mb-4 mx-auto mt-4">
            {episodes.map((item) => (
                <div className="col-12 col-md-6" key={item.id}>
                    <SingleEpisode item={item} />
                </div>
            ))}
        </div>
    )
}
