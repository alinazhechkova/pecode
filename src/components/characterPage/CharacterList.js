import React from 'react'
import { SingleCharacter } from './SingleCharacter'

const CharacterList = ({ characters }) => (
    <ul className="list-group mb-4 mx-auto mt-4 character-list">
        {characters.map((item) => (
            <SingleCharacter key={item.id} character={item} />
        ))}
    </ul>
)

export default CharacterList
