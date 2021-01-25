import React from 'react';
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://png.pngtree.com/thumb_back/fw800/background/20190828/pngtree-dark-vector-abstract-background-image_302715.jpg'
                    alt='Sorry image not found'/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>

    )
}

export default ProfileInfo