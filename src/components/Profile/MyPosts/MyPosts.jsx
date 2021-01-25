import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div className={classes.postBlock}>
            <div><h3>My posts</h3></div>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
                <button>Remove</button>
            </div>
            <div className={classes.posts}>
                <Post message='Hi, how are you' likesCount="23"/>
                <Post message="It's my first post" likesCount="0"/>

            </div>
        </div>
    )
}

export default MyPosts;