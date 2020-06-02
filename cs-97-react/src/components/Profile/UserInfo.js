import React , { useState, useEffect }from 'react';

const UserInfo = ({userData}) => {

    return(

        <div className="user-info">
            <h3>UserId: {userData[0]}</h3>
            <h3>Username: {userData[1]}</h3>
            <h3>Email: {userData[2]}</h3>
        </div>
    )
}

export default UserInfo;