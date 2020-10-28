import React from 'react';
import './pre.sass';
import {toBd, toName1, toName2} from '../../actions/action';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const Preloader = ({toName1, toName2, toBd, success, name1, name2}) =>  {
    function logTo () {
        if (name1 === '' || name2 === '') {
            alert('Enter nicknames');
        }
    }

    return (
        <div className="pre_wrap">
            <div className="pre_data">
                <h2>Player 1:</h2>
                <input onChange={(e) => {
                    toName1(e.target.value);
                    toBd();
                }} name="player1" type="text" className="inp_pl"/>
                <h2>Player 2:</h2>
                <input onChange={(e) => {
                    toName2(e.target.value);
                    toBd();
                }} name="player1" type="text" className="inp_pl"/>
                <Link to={success ? '/game' : '/'}>
                    <button onClick={logTo} className="btn_start">Start game</button>
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        name1: state.pl1,
        name2: state.pl2,
        success: state.success
    }
}

const mapDispatchToProps = {
    toBd,
    toName1,
    toName2
}

export default connect(mapStateToProps, mapDispatchToProps)(Preloader);