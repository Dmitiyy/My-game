const initialState = {
    pl1: '',
    pl2: '',
    success: false,
    arrBd1: [],
    arrBd2: [],
    play: false,
    end: false,
    all1: '',
    all2: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BD':
            if (state.pl1 !== '' && state.pl2 !== '') {
                return {
                    ...state,
                    success: true
                }
            } else {
                return {
                    ...state,
                    success: false
                }    
            }

        case 'PL1':
            const player1 = action.payPl1;

            return {
                ...state,
                pl1: player1
            }
        
        case 'PL2':
            const player2 = action.payPl2;

            return {
                ...state,
                pl2: player2
            }

        case 'MO':
            let b = action.payCount;

            if (!state.play) {
                state.arrBd1.push(b);
            } else if (state.play) {
                state.arrBd2.push(b);
            }

            return {
                ...state,
                play: !state.play
            }

        case 'COND1':
            const a = action.payEvent;

            let newArr1 = state.arrBd1.reduce((sum, cur) => {
                return sum + cur;
            })

            if (newArr1 >= 40) {
                newArr1 = 40;
            }

            for(let i = 1; i <= newArr1; i++) {
                a[i - 1].style.display = 'block';
            }

            return {
                ...state,
                end: newArr1 >= 40 ? true : false,
                all1: newArr1
            }

        case 'COND2':
            const a2 = action.payEvent;

            let newArr2 = state.arrBd2.reduce((sum, cur) => {
                return sum + cur;
            })

            if (newArr2 >= 40) {
                newArr2 = 40;
            }

            for(let i = 1; i <= newArr2; i++) {
                a2[i - 1].style.display = 'block';
            }

            return {
                ...state,
                end: newArr2 >= 40 ? true : false,
                all2: newArr2
            }

        case 'WIN':
            if (state.all1 > state.all2) {
                alert(`Player ${state.pl1} win`);
            } else if (state.all1 >= 40 && state.all2 >= 40) {
                alert('Draw')
            } else if (state.all2 > state.all1) {
                alert(`Player ${state.pl2} win`);
            }

            return {
                ...state
            }

        default: 
            return state;
    } 
}
export default reducer;