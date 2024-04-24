import {useContext, useEffect, useState} from 'react'
import axios from 'axios';
import './App.css'

import {AuthContext} from './context/AuthContext/AuthContext.jsx';

function App() {
    const {auth, testUserAuth, signUpMoviepicker, getUsers, getInfo, authenticateUser, getUserInfo } = useContext(AuthContext);
    const [data, setData] = useState({})

    // useEffect(() => {
    //         console.log('auth: ', auth)
    // }, [auth]);
    //
    // useEffect(() => {
    //     console.log('data: ', data)
    // }, [data]);


    async function getData() {
        try {
            const result = await axios.get('https://api.rawg.io/api/games/1?key=d4c551365baa454b818dcd5b806b3506')
            // https://api.rawg.io/api/games/${id}?key=${import.meta.env.VITE_REACT_API_KEY}
            setData(result);
            console.log(result);
        } catch (e) {
            console.log("error during getData")
            console.error(e);
        }
    }


    return (
        <>
            <h1>API-checker</h1>
            <button type='button' onClick={() => getData()}>test rawg.io</button>
            <button type='button' onClick={() => testUserAuth()}>test auth</button>
            <button type='button' onClick={() => signUpMoviepicker()}>test signup moviepicker</button>
            <button type='button' onClick={() => getUsers()}>test getUsers moviepicker</button>
            <button type='button' onClick={() => getInfo()}>test getInfo moviepicker</button>
            <button type='button' onClick={() => authenticateUser()}>test authenticateUser moviepicker</button>
            <button type='button' onClick={() => getUserInfo()}>test getUserInfo moviepicker</button>
            <p>* Zie console voor waarden</p>

        </>
    )
}

export default App
