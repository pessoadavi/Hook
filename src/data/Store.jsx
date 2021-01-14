import React, { useState } from 'react';


const initialState = {
    number: 123456,
    text: 'Context API + hooks'
}

export const AppContext = React.createContext(initialState)

const Store = (props) => {

    const [state, setState] =  useState(initialState);

    function updateState(attribute, value){
        setState({                      // state é um obj devido initialState e setState é uma função que acessa os dados do obj
            ...state,                   // clono o estado atual
            [attribute]:value           // atualizo determinado atributo (precisa do colchetes) quando a função for chamada
        })

    }

    return ( 

        <AppContext.Provider value={{
            number: state.number,
            text: state.text,
            setNumber: n => updateState("number",n),
            setText: t => updateState("text", t)  
        }} >
             {props.children}
        </AppContext.Provider>
     );
}
 
export default Store;