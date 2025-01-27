import { useState } from "react";

const getLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key)) || [];
};

const base = {
    country: '',
    gold: 0,
    silver: 0,
    bronze: 0,
};

export const useMedalLists = () => {
    const [medalLists, setMedalLists] = useState(() => {
        return getLocalStorage('medalLists');
    });

    const [newMedalList, setNewMedalList] = useState(base);

    const handleAddBtn = (e) => {
        e.preventDefault();
        if (medalLists.some((medalList) => medalList.country === newMedalList.country)) {
            alert('이미 등록된 국가입니다.');
            setNewMedalList(base);
            return;
        }
        setMedalLists([...medalLists, newMedalList]);
        localStorage.setItem('medalLists', JSON.stringify([...medalLists, newMedalList]));
        setNewMedalList(base);
    };

    const handleUpdateBtn = (e) => {
        e.preventDefault();
        const findIndexCountry = medalLists.findIndex((medalList) => medalList.country === newMedalList.country);
        if (findIndexCountry === -1) {
            alert('등록되지 않은 국가입니다.');
            setNewMedalList(base);
            return;
        }
        const updatedMedalLists = [...medalLists];
        updatedMedalLists[findIndexCountry] = newMedalList;
        setMedalLists(updatedMedalLists);
        localStorage.setItem('medalLists', JSON.stringify(updatedMedalLists));
        setNewMedalList(base);
    };

    const handleDeleteBtn = (country) => {
        const updatedMedalLists = [...medalLists].filter((medalList) => medalList.country !== country);
        setMedalLists(updatedMedalLists);
        localStorage.setItem('medalLists', JSON.stringify(updatedMedalLists));
        setNewMedalList(base);
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setNewMedalList({ ...newMedalList, [name]: name === 'country' ? value.trim() : Number(value) });
    };

    return {medalLists,newMedalList, handleAddBtn, handleUpdateBtn, handleDeleteBtn, handleOnChange}
};
