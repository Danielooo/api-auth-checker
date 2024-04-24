import React, {createContext, useState} from 'react';
import axios from "axios";

// Your X-Api-Key: 'moviepicker:TbwooSmV7llRQ06zIUof'
//
// Add the following to the header of your POST USER request:
//
// headers: {
//     'Content-Type': 'application/json',
//         'X-Api-Key': 'moviepicker:TbwooSmV7llRQ06zIUof'
// }

// TODO: Add jwt decoding
// TODO: Add sign up
// TODO: Add login

export const AuthContext = createContext({});

const headersConfig = {
    headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': 'moviepicker:TbwooSmV7llRQ06zIUof'
    }
}

// eslint-disable-next-line react/prop-types
function AuthContextProvider({children}) {
    const [auth, setAuth] = useState({
        isAuth: false,
        user: {
            username: "",
            email: "",
            info: "",
        },
        status: 'done',
    })


    async function testUserAuth() {
        try {
            const response = await axios.post(`https://api.datavortex.nl/testapp/users/authenticate`, {
                username: 'testuser',
                password: 'testpassword',
            })

            console.log("testUserAuth response", response);
        } catch (e) {
            console.error(e)
        }
    }

    // Get info of api using get https://api.datavortex.nl/moviepicker/info
    async function getInfo() {
        try {
            const response = await axios.get(`https://api.datavortex.nl/moviepicker/info`, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key': 'moviepicker:TbwooSmV7llRQ06zIUof'
                }
            })

            console.log("getInfo response", response);
        } catch (e) {
            console.error(e)
        }
    }

    // Get all users
    async function getUsers() {
        try {
            const response = await axios.get(`https://api.datavortex.nl/moviepicker/users`, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key': 'moviepicker:TbwooSmV7llRQ06zIUof'
                }
            })

            console.log("getUsers", response); // return the response
        } catch (e) {
            console.error(e)
        }
    }

    // Write async funtion to authenticate user with https://api.datavortex.nl/moviepicker/users/authenticate
    async function authenticateUser(username, password) {
        try {
            const response = await axios.post(`https://api.datavortex.nl/moviepicker/users/authenticate`, {
                username: username,
                password: password,
            })

            console.log("authenticateUser response", response);
        } catch (e) {
            console.error(e)
        }
    }

    // write async function for getting user info with https://api.datavortex.nl/moviepicker/users/testuser/info
    async function getUserInfo(username, jwt) {
        try {
            const response = await axios.get(`https://api.datavortex.nl/moviepicker/npm install jsonwebtokenusers/${username}/info`, headersConfig)

            console.log("getUserInfo response", response);
        } catch (e) {
            console.error(e);
        }
    }

    // Als user al bestaat krijg je een 409 error. Altijd iets veranderen in username en email
    async function signUpMoviepicker() {
        try {
            const response = await axios.post(`https://api.datavortex.nl/moviepicker/users`, {
                    "username": `3Geertruida`,
                    "email": "3geertruida@gmail.com",
                    "password": "geertruida",
                    "info": "testinfo",
                    "authorities": [
                        {
                            "authority": "USER"
                        }
                    ]
                }, {
                headers: {
                    application: 'json',
                    'X-Api-Key': 'moviepicker:TbwooSmV7llRQ06zIUof'
                }
            })

            console.log(response);
        } catch (e) {
            console.error()
            console.log(e)
        }
    }

    const authData = {
        ...auth,
        testUserAuth,
        signUpMoviepicker,
        getUsers,
        getInfo,
        authenticateUser,
        getUserInfo
        // login
        // logout
    }

    return (
        <AuthContext.Provider value={authData}>
            {auth.status === 'pending'
                ? <p>Loading...</p>
                : children
            }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;




