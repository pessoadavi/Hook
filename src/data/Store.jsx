import React from 'react';

const initialState = {
    number: 123456,
    text: 'Context API + hooks'
}

const AppContext = React.createContext(initialState)

const Store = (props) => {

    //const [state, setstate] = useState(initialState);

    return ( 

        <AppContext.Provider>
             {props.children}
        </AppContext.Provider>
     );
}
 
export default Store;