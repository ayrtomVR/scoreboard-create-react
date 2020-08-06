// import React, { Component } from 'react';
import React from 'react';

const AddPlayerForm = ({ addPlayer }) => {
    let playerInput = React.createRef();
    let handleSubmit = (e) => {
        e.preventDefault();
        addPlayer(playerInput.current.value);
        e.currentTarget.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={playerInput} placeholder="Enter a player's name" />

            <input type="submit" value="Add Player" />
        </form>
    );
};

/*
class AddPlayerForm extends Component {
    state = {
        value: '',
    };

    handleValueChange = (e) => {
        this.setState({ value: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.state.value);
        this.setState({ value: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleValueChange}
                    placeholder="Enter a player's name"
                />
                <input type="submit" value="Add Player" />
            </form>
        );
    }
}
*/

export default AddPlayerForm;
