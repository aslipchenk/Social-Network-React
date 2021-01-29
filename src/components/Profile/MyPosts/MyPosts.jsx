import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postData = props.posts.postData.map(value => <Post id={value.id} message={value.message} likesCount={value.likesCount}/>);
    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        const text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={classes.postBlock}>
            <div><h3>My posts</h3></div>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.posts.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
                <button>Remove</button>
            </div>
            <div className={classes.posts}>
                {postData}
            </div>
        </div>
    )
}

export default MyPosts;