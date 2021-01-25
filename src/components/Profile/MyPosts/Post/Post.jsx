import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://i.pinimg.com/originals/a4/4a/f3/a44af3bb5f074e3cdb4be8a56232c996.jpg" alt="Sorry image not found"/>
            {props.message}
            <div>
                <span>Like </span> {props.likesCount}
                {/*<span>Dislike</span>*/}
            </div>
        </div>
    )
}


export default Post