import React from 'react';
import Avatar from "../Avatar/Avatar";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.profile}>
            <div className={s.picture}>
                <img
                    src="http://hotel-in-anapa.ru/images/sampledata/beach/module_beach.jpg"
                    alt=""/>
            </div>
            <Avatar/>
            <MyPosts/>
        </div>
    )
};

export default Profile;