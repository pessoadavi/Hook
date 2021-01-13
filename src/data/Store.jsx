import React, { useState } from 'react';


const initialState = {
    number: 123456,
    text: 'Context API + hooks'
}

export const AppContext = React.createContext(initialState)

const Store = (props) => {

    const [state, setState] = useState(initialState);

    function updateState(attribute, value){
        setState({
            ...state,
            [attribute]:value
        })

    }

    return ( 

        <AppContext.Provider value={{
            number: state.setNumber,
            text: state.setText,
            setNumber: n => updateState('number',n),
            setText: t => updateState('text', t)  
        }} >
             {props.children}
        </AppContext.Provider>
     );
}
 
export default Store;