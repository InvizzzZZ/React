import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <Post message='Hello' count='15'/>
            <Post message='How are yoy?' count='27' />
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
};

export default MyPosts;