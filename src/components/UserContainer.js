import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux';

const UserContainer = ({ userData, fetchAllUsers }) => {

    useEffect(() => {
        fetchAllUsers();
    }, [])

    return (
        <Fragment>
            {userData.loading ? (<h2> Loading </h2>) : userData.error ? (<h2>{userData.error}</h2>) : (
                <div>
                    <h2>Users List </h2>
                    <div>
                        {userData && userData.users && userData.users.map(user => <p key={user.title}>{user.title}</p>)}
                    </div>
                </div>
            )}
        </Fragment>
    );
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);