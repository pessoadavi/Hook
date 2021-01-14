import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import {initialState2, reducer2  } from "../../store/configExec02";

const initialState = {

    cart: [],
    products: [],
    user: null,
    number: 0
}

function reducer(state, action) {       // Função tá recebendo o estado atual da variável/objeto/array...
                                        // e as ações dos eventos dos botões para determinar o TIPO DA AÇÃO  
                                        // e como alterará o estado atual da variável/obj/array...
                                        // OBS: action é um obj que pode possuir parâmetros e neste caso
                                        // recebe o parâmetro type e também o payload.
    switch (action.type) {

        case 'numberAdd2':
            return { ...state, number: state.number + 2 }

        case 'login':
            return { ...state, user: { name: action.payload } }

        default:
            return state
    }
}



const UseReducer = (props) => {

    /* Declara o estado inicial do parâmetro, a função de disparo
       da ação (dispatch) e o hook useReducer recebe a função  
       (reducer) que vai evoluir o estado e o estado inicial (initialState) */
    const [state, dispatch] = useReducer(reducer, initialState)

    /* Portanto quando o evento é detectado o parâmetro type do obj
       é passado ao dispatch que tranfere para a função reducer e o
       estado da variável é alterado e atualizado */


    /* Exercício 02 */
    const [state2, dispatch2] = useReducer(reducer2, initialState2)
    

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <SectionTitle title="Exercício 01" />
            <div className="center">
                {state.user ?
                    <span className="text">{state.user.name}</span> :
                    <span className="text">Sem usuário</span>}

                <span className="text">{state.number}</span>
            </div>
            <div className="center">
                <h2 >
                    <button className="btn"
                        onClick={() => { dispatch({ type: 'numberAdd2' }) }}>+2</button>
                    <button className="btn"
                        onClick={() => { dispatch({ type: 'login', payload: 'Joana' }) }}>Login
                </button>
                </h2>
            </div>

            <SectionTitle title="Exercício 02" />
            <div className="center">
                <span className="text">{state2.number}</span>
                <h2>
                    <button className="btn"
                        onClick={() => { dispatch2({ type: 'multiple_7' }) }}> *7</button>
                    <button className="btn"
                        onClick={() => { dispatch2({ type: 'divide_25' }) }}> /25</button>
                    <button className="btn"
                        onClick={() => { dispatch2({ type: 'numberInt' }) }}> Int</button>
                </h2>
                <div className="center">
                    <h2>
                        <span className="text">Número: </span>
                        <input type="text"
                            className="input"
                            type="number"
                            value={state2.number}
                            onChange={(result)=>{dispatch2({type:'add_number', payload: result.target.value})}}
                        />
                    </h2>
                </div>
            </div>

        </div>
    )
}

export default UseReducer
