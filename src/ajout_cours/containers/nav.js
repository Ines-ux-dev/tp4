import React from 'react';
import Button from '../components/button';
import '../index.css';

export default class Nav extends React.Component {
    render() {
        const { users, changeUser } = this.props;

        return (
            <div class='nav'>
                {users.map((user) => <Button text={user.name} onClick={() => changeUser(user.name)} />)}
            </div>)
    }
}