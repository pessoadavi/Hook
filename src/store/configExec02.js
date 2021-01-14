/* Exercício 02 */
export const initialState2 = {

    list: [],
    users: [],
    number: 1,
    names: null

}

/* Exercício 02 */
export function reducer2(state, action) {

    switch (action.type) {

        case 'multiple_7':
            return { ...state, number: state.number * 7 }

        case 'divide_25':
            return { ...state, number: state.number / 2 }

        case 'add_number':
            return { ...state, number: action.payload }
        
            case 'numberInt':
                return {...state, number: parseInt(state.number)}

        default:
            return state

    }

}