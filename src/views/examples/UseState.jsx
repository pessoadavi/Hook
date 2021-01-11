import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("Davi");

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <SectionTitle title="Exercício 01" />
            <div className="center">
                <span className="text">{count}</span>
                <div className="btn">
                    <button className="btn" onClick={()=>{setCount(count - 1)}}>-1</button>
                    <button className="btn" onClick={()=>{setCount(count + 1)}}>+1</button>
                </div>
                <div className="btn">
                    <button className="btn" onClick={()=>{setCount(currenct => currenct - 2)}}>-2</button>
                    <button className="btn" onClick={()=>{setCount(currenct => currenct + 2)}}>+2</button>
                </div>
            </div>
            <SectionTitle title="Exercício 02" />
            <input type="text" className="input" value={name} onChange={result => {setName(result.target.value)}} />
            <span className="text">{name}</span>
        </div>
    )
}

export default UseState
