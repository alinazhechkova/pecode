import React from 'react';
export const RmInput = ({ label, placeholder }) => {
    return (
        <label>{label}<input type="text" placeholder={placeholder} /></label>
    )
}
