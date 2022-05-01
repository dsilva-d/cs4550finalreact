import React, {useContext, useState} from "react";
import axios from "axios";

const ProfileContext = React.createContext()

const api = axios.create({withCredentials: true})

export const ProfileProvider = ({children}) => {
    const [profile, setProfile]
        = useState()

    const signout = async () => {
        const response = await api
            .post("https://cs4550-final-node.herokuapp.com/api/signout")
        setProfile(null)
    }

    const checkLoggedIn = async () => {
        try {
            const response = await api
                .post("https://cs4550-final-node.herokuapp.com/api/profile")
            setProfile(response.data)
            return response.data
        } catch (e) {
            throw e
        }
    }

    const signup = async (email, password) => {
        try {
            console.log('email: ' + email + ', password: ' + password)
            const response = await api
                .post("https://cs4550-final-node.herokuapp.com/api/signup",
                    { email, password })
            console.log('response: ' + response)
            setProfile(response.data)
        } catch (e) { throw e }
    }


    const signin = async (email, password) => {
        try {
            const response = await api
                .post("https://cs4550-final-node.herokuapp.com/api/signin",
                    {email, password})
            setProfile(response.data)
            return response.data
        } catch (e) {
            throw e
        }
    }

    const value = {signout, signin, profile, signup, checkLoggedIn}
    return(
        <ProfileContext.Provider value={value}>
            {children}
        </ProfileContext.Provider>
    )
}

export const useProfile = () => {
    return useContext(ProfileContext)
}