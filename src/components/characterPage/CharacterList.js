import React from 'react'
import { SingleCharacter } from './SingleCharacter'

export const CharacterList = ({ characters }) => {
    if (characters === undefined) {
        return <div>Loading...</div>
    } else {
        return (
            <ul className="list-group mb-4 mx-auto mt-4 character-list">
                {characters.map((item) => (
                    <SingleCharacter key={item.id} character={item} />
                ))}
            </ul>
        )
    }
}
