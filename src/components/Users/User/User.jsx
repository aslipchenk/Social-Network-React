import React from 'react';
import classes from "../Users.module.css";

const User = (props) => {

    return (
        <div>
        <span>
        <div className={classes.list_item} data-id="19">
            <div><a href="#" data-abc="true"><span
                className={`${classes.w_48} ${classes.avatar} ${classes.gd_warning}`}>{props.fullName[0]}</span></a>
            </div>
            <div className="flex"><a href="#" className={`item-author ${classes.text_color}`}
                                     data-abc="true">{props.fullName}</a>
                <div className={`item-except ${classes.text_muted} ${classes.text_sm} ${classes.h_1x}`}>
                    {props.status}
                </div>
            </div>
            <div className={classes.no_wrap}>
                <div className={`item-date ${classes.text_muted} ${classes.text_sm} d-none d-md-block`}>{props.country}
                    <br/> {props.city}</div>
            </div>
            {/*<span>dsadasdsa</span>*/}
        </div>
            </span>
            <span><button onClick={() => props.followed(props.userId)} type="button" className="btn btn-primary btn-sm">{props.follow}</button>
</span>
        </div>
    )
}

export default User;