import React from 'react'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {Redirect} from "react-router-dom";

export const Profile = () => {

    const {email, name, avatar, publicCardPacksCount} = useSelector<AppRootStateType, any>(state => state.profile)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)


    if (!isLoggedIn) {
        return <Redirect to={'/login'}/>
    }
    return (
        <div>
            <div>Email: {email}</div>
            <div> Name: {name}</div>
            <div>Avatar: {avatar}</div>
            <div>PublicCardPacksCount: {publicCardPacksCount}</div>

        </div>
    )
}
