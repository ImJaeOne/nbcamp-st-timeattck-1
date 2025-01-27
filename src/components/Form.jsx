import React from 'react';

const Form = ({ handleAddBtn, newMedalList, handleOnChange, handleUpdateBtn }) => {

    
    return (
        <form onSubmit={handleAddBtn}>
            <label>
                국가명
                <input type="text" name="country" value={newMedalList.country} onChange={handleOnChange} required />
            </label>
            <label>
                국가명
                <input type="number" name="gold" value={newMedalList.gold} onChange={handleOnChange} required min={0} />
            </label>
            <label>
                국가명
                <input
                    type="number"
                    name="silver"
                    value={newMedalList.silver}
                    onChange={handleOnChange}
                    required
                    min={0}
                />
            </label>
            <label>
                국가명
                <input
                    type="number"
                    name="bronze"
                    value={newMedalList.bronze}
                    onChange={handleOnChange}
                    required
                    min={0}
                />
            </label>
            <button type="submit">Add</button>
            <button onClick={handleUpdateBtn}>Update</button>
        </form>
    );
};

export default Form;
