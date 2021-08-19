import React from 'react';
export const FilterDimension = ({ setDimension, setCurrentPage }) => {
    const handleChange = (e) => {
        setType({ dimension: e.target.value });
        setCurrentPage(1);
    };
    return (
        <select onChange={handleChange}>
            <option defaultValue value="">Choose dimension:</option>
            <option value="dimension c-137">Dimension C-137</option>
            <option value="post-apocalyptic dimension">Post-Apocalyptic Dimension</option>
            <option value="replacement dimension">Replacement Dimension</option>
            <option value="cronenberg dimension">Cronenberg Dimension</option>
            <option value="fantasy dimension">Fantasy Dimension</option>
            <option value="dimension 5-126">Dimension 5-126</option>
            <option value="Evil Rick's Target Dimension">Evil Rick's Target Dimension</option>
            <option value="Eric Stoltz Mask Dimension">Eric Stoltz Mask Dimension</option>
            <option value="Dimension J19ζ7">Dimension J19ζ7</option>
            <option value="Dimension C-500A">Dimension K-83</option>
            <option value="Cromulon Dimension">Cromulon Dimension</option>
            <option value="Testicle Monster Dimension">Testicle Monster Dimension</option>
            <option value="Dimension D716-B">Dimension D716-B</option>
            <option value="Dimension D716">Dimension D716</option>
            <option value="Dimension D99">Dimension D99</option>
            <option value="Dimension K-22">Dimension K-22</option>
            <option value="Giant Telepathic Spiders Dimension">Giant Telepathic Spiders Dimension</option>
            <option value="unknown">unknown</option>
        </select>
    )
}
