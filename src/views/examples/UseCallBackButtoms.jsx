import React, { Fragment } from 'react';

const UseCallBackButtoms = (props) => {

    console.log('renderizando')
    return (
        <Fragment className="btn">
            <button className="btn" onClick={() => { props.incremento(6) }} >+6</button>
            <button className="btn" onClick={() => { props.incremento(12) }} >+12</button>
            <button className="btn" onClick={() => { props.incremento(18) }} >+ 18</button>
        </Fragment>
    );
}

export default React.memo(UseCallBackButtoms);