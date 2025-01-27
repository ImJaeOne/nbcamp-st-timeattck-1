import React from 'react';

const MedalInput = ({ children, type, name, newMedalList, handleOnChange }) => {
    return (
        <label>
            {children}
            <input type={type} name={name} value={newMedalList[name]} onChange={handleOnChange} required />
        </label>
    );
};

export default MedalInput;
