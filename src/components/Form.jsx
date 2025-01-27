import React from 'react';
import MedalInput from './MedalInput';

const Form = ({ handleAddBtn, newMedalList, handleOnChange, handleUpdateBtn }) => {
    return (
        <form onSubmit={handleAddBtn}>
            <MedalInput
                type={'text'}
                name={'country'}
                newMedalList={newMedalList}
                handleOnChange={handleOnChange}
            >
                국가명
            </MedalInput>
            <MedalInput
                type={'number'}
                name={'gold'}
                newMedalList={newMedalList}
                handleOnChange={handleOnChange}
            >
                금메달
            </MedalInput>
            <MedalInput
                type={'number'}
                name={'silver'}
                newMedalList={newMedalList}
                handleOnChange={handleOnChange}
            >
                은메달
            </MedalInput>
            <MedalInput
                type={'number'}
                name={'bronze'}
                newMedalList={newMedalList}
                handleOnChange={handleOnChange}
            >
                동메달
            </MedalInput>
            <button type="submit">Add</button>
            <button onClick={handleUpdateBtn}>Update</button>
        </form>
    );
};

export default Form;
