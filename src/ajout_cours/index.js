import React from 'react';
import Nav from './containers/nav';
import User from './containers/user';
import Harold from './img/harold.jpg';
import Jeanne from './img/jeanne.jpg';
import Martine from './img/martine.jpg';
import Claude from './img/claude.jpg';

import './index.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                {
                    name: 'Jeanne',
                    surname: 'De las nueva',
                    birthdate: '25/07/1996',
                    picture: Jeanne,
                    lastPublication: "J'aime le surf et j'adore les dauphins",
                    like: 0
                },
                {
                    name: 'Martine',
                    surname: 'Dupont',
                    birthdate: '20/11/1945',
                    picture: Martine,
                    lastPublication: "J'adore tricotter",
                    like: 0
                },
                {
                    name: 'Claude',
                    surname: 'Patrick',
                    birthdate: '10/10/1989',
                    picture: Claude,
                    lastPublication: "Je suis mannequin et je vis à Londres",
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