import React from 'react';
import { connect } from 'react-redux';

const FriendsList = props => {
    return (
        <div>
            {props.friends.map(friend => {
                <div key={friend}>{friend}</div>
            })}
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        friends: state.friend
    }
}

export default connect(mapStatetoProps)(FriendsList);