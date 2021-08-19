import React from 'react';
import { SingleCharacter } from './SingleCharacter';
export const CharacterList = ({ characters }) => {
    console.log(characters);
    if (characters === undefined) {
        return (<div>Loading...</div>)
    } else {
        return (<ul className="list-group mb-4 mx-auto">
            {characters.map(item => (
                <li className="list-group-item" key={item.key}>
                    <SingleCharacter character={item} />
                </li>
            ))}
        </ul >)
    }
}
