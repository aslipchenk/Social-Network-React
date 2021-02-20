import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postData = props.posts.postData.map(value => <Post id={value.id} key={value.id} message={value.message}
                                                           likesCount={value.likesCount}/>);
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
                <div className={`form-floating`}>
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                              style={{height: '100px', width: '30%'}} ref={newPostElement} onChange={onPostChange}
                              value={props.posts.newPostText}/>
                    <label htmlFor="floatingTextarea2">Add Your Post</label>
                </div>
                {/*<div>*/}
                <button className={`btn btn-outline-primary`} onClick={addPost}>Add Post</button>
                {/*</div>*/}
                <button className={`btn btn-outline-danger`}>Remove</button>
            </div>
            <div className={classes.posts}>
                {postData}
            </div>
        </div>
    )
}

export default MyPosts;