import React from 'react';
// import PropTypes from 'prop-types';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = () => {
    return (
        <header>
            <Stats />
            <h1>Scoreboard</h1>
            {/* <span className="stats">Players: {props.totalPlayers}</span> */}
            <Stopwatch />
        </header>
    );
};

/*
Header.propTypes = {
    title: PropTypes.string,
    players: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
    title: 'Scoreboard',
};
*/

export default Header;
