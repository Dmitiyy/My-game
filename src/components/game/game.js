import React, {useState, useEffect} from 'react';
import './game.sass';
import {connect} from 'react-redux';
import {mo, cond1, cond2, vin} from '../../actions/action';

const Game = ({mo, play, cond1, cond2, end, vin}) => {
    function createBlocks () {
        const arr = [];
        for (let i = 0; i <= 39; i++) {
            arr.push(i);    
        }
        return arr;
    }

    const [count, inc] = useState(1);
    const [act, setAct] = useState(false);

    if (count === 11) {
        inc(1);
    }

    useEffect(() => {
        setInterval(() => {
            inc(count => count + 1)
        }, 100);

        console.log(end);
    }, [end]);
    
    return (
        <>      
            <div className="game_wrap">
                <div style={act ? {display: 'none'} : {display: 'flex'}} className="modal">
                    <div onClick={() => {
                        if (!play) {
                            alert(count);
                            setAct(true);

                            const a = document.querySelectorAll('.cir2e');

                            mo(count);
                            cond1(a);

                            if (end) {
                                setAct(true);
                                vin();
                            } else {
                                setTimeout(() => {
                                    setAct(false);
                                }, 1300);
                            }
                        } else if (play) {
                            alert(count);
                            setAct(true);

                            const a = document.querySelectorAll('.cir');
                            mo(count);

                            cond2(a);

                            if (end) {
                                setAct(true);
                                vin();
                            } else {
                                setTimeout(() => {
                                    setAct(false);
                                }, 1300);
                            }
                        }
                    }} className="count">
                        {count}
                    </div>
                </div>
                <div className="block_pl1">
                    <div className="table_wrap tr1">
                        {
                            createBlocks().map(item => {
                                return (
                                    <div key={item} className="block_tb">
                                        <div className={"cir" + item + " cir"}></div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="block_hr"></div>
                <div className="block_pl2">
                    <div className="table_wrap tr2">
                            {
                                createBlocks().map(item => {
                                    return (
                                        <div key={item} className="block_tb">
                                            <div className={"cir2" + item + " cir2e"}></div>
                                        </div>
                                    )
                                })
                            }
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        play: state.play,
        end: state.end
    }
}

const mapDispatchToProps = {
    mo,
    cond1,
    cond2,
    vin
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);