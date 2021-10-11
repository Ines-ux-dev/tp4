import React from 'react';
import '../index.css';

export default class Button extends React.Component {
    render() {
        const { text, style, onClick } = this.props;

        return (
            <p class='button' onClick={onClick} style={style}>
                {text}
            </p>)
    }
}