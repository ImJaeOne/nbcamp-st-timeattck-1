import Header from './components/Header';
import Form from './components/Form';
import MedalList from './components/MedalList';
import { useMedalLists } from './hooks/useMedalLists';
import './App.css';

function App() {
    const { medalLists, newMedalList, handleAddBtn, handleUpdateBtn, handleDeleteBtn, handleOnChange } =
        useMedalLists();

    return (
        <>
            <Header>Olympic Medal Tricker</Header>
            <Form
                handleAddBtn={handleAddBtn}
                handleOnChange={handleOnChange}
                newMedalList={newMedalList}
                handleUpdateBtn={handleUpdateBtn}
            />
            <MedalList medalLists={medalLists} handleDeleteBtn={handleDeleteBtn} />
        </>
    );
}

export default App;
