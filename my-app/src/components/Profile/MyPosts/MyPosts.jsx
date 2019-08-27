import React from 'react';
import s from './MyPosts.module.css';

const MyPosts = (props) => {

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {props.postsElements}
            </div>
        </div>
    )
};

export default MyPosts;