import React from 'react';
import Nav from './containers/nav';
import User from './containers/user';
import Harold from './img/harold.jpg';
import './index.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                {
                    name: 'Jeanne',
                    surname: 'Dupont',
                    birthdate: '25/07/1996',
                    picture: Harold,
                    lastPublication: 'Ceci est la dernière publication de Jeanne',
                    like: 0
                },
                {
                    name: 'Martine',
                    surname: 'Dupont',
                    birthdate: '25/07/1996',
                    picture: Harold,
                    lastPublication: 'Ceci est la dernière publication de Martine',
                    like: 0
                },
                {
                    name: 'Claude',
                    surname: 'Dupont',
                    birthdate: '25/07/1996',
                    picture: Harold,
                    lastPublication: 'Ceci est la dernière publication de Claude',
                    like: 0
                },
            ],
            selectedUser: 'Jeanne'
        }
    }

    changeUser(selectedUser) {
        this.setState({ selectedUser });
        // Revient a faire => this.setState({ selectedUser: selectedUser }); 
    }

    handleLike(username) {
        const { users } = this.state;
        const userIndex = users.findIndex((user) => user.name === username);
        let newUsers = users;
        newUsers[userIndex].like += 1

        this.setState({ users: newUsers });
    }

    render() {
        const { users, selectedUser } = this.state;

        return (
            <div class='mainContent'>
                <Nav users={users} changeUser={this.changeUser.bind(this)} />
                <User user={users.find((user) => user.name === selectedUser)} handleLike={this.handleLike.bind(this)} />
            </div>)
    }
}