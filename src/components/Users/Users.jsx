import React from "react"
import classes from './Users.module.css'
import User from "./User/User";

const Users = (props) => {
    const checkFollow = (user) => user.followed === true ? "Follow" : "Unfollow";
    const checkFollowAction = (user) => user.followed === true ? props.unfollow : props.follow
    // console.log(props.users.users);
    let usersMapUi = props.users.map(user => <User key={user.id} fullName={user.fullName} status={user.status} country={user.location.country} city={user.location.city} follow={checkFollow(user)} followed={checkFollowAction(user)} userId={user.id}/>)
    return (
        <div className={`${classes.page_container}`} id="page-content">
            <div className={classes.padding}>
                <div className="row">
                    <div className={classes.col_sm_6}>
                        <div className={`${classes.list} ${classes.list_row} ${classes.block}`}>
                            {usersMapUi}
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" className={`btn btn-outline-dark ${classes.btn_more}`}>Show more</button>
        </div>
    )
}

export default Users;