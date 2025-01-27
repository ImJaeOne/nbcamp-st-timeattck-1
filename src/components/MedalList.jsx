import {React, useState} from 'react';

const MedalList = ({ medalLists, handleDeleteBtn }) => {

    const [mode, setMode] = useState('sortByGold');
    
        const handleSetMode = (e) => {
            setMode(e.target.value);
        };
    
        const sortedMedalLists = () => {
            if (mode === 'sortByGold') {
                return [...medalLists].sort((a, b) => b.gold - a.gold);
            }
            if (mode === 'sortByTotal') {
                return [...medalLists].sort((a, b) => b.gold + b.silver + b.bronze - (a.gold + a.silver + a.bronze));
            }
        };
    return (
        <div>
            {medalLists.length === 0 ? (
                <div>등록된 국가가 없습니다.</div>
            ) : (
                <>
                    <label>
                        <input
                            type="radio"
                            value="sortByGold"
                            checked={mode === 'sortByGold'}
                            onChange={handleSetMode}
                        />
                        금메달순
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="sortByTotal"
                            checked={mode === 'sortByTotal'}
                            onChange={handleSetMode}
                        />
                        총메달순
                    </label>

                    <table>
                        <thead>
                            <tr>
                                <td>국가명</td>
                                <td>금메달</td>
                                <td>은메달</td>
                                <td>동메달</td>
                                <td>액션</td>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedMedalLists().map((medalList) => {
                                return (
                                    <tr key={medalList.country}>
                                        <td>{medalList.country}</td>
                                        <td>{medalList.gold}</td>
                                        <td>{medalList.silver}</td>
                                        <td>{medalList.bronze}</td>
                                        <td>
                                            <button onClick={() => handleDeleteBtn(medalList.country)}>Delete</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
};

export default MedalList;
