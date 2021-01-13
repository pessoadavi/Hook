import React, { useState, useRef, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {

    const [value1, setValue1] = useState();
    const [value2, setValue2] = useState();

    const count = useRef(0);
    const myinput1 = useRef(null);
    const myinput2 = useRef(null);

    useEffect(() => {
        count.current++
        myinput2.current.focus()
    }, [value1]);

    useEffect(() => {
        count.current++
        myinput1.current.focus()
    }, [value2]);

    /*
    const merge = function(s1, s2){

           return [...s1].map((element, index)=>`${element}${s2[index] || ""}`).join("")
    }
    */

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercício 01" />
            <div className="center">
                <div>
                    {/*<h2 className="center">Valor: {merge(value1, value2)} {count.current}</h2>*/}
                    <h2 className="center">Valor:{count.current}</h2>

                    <input ref={myinput1} value={value1} type="text" className="input" onChange={(result) => { setValue1(result.target.value) }} />
                </div>
            </div>
            <SectionTitle title="Exercício 02" />
                <div>
                    <h2 className="center"></h2>
                    <input ref={myinput2} value={value2} type="text" className="input" onChange={(result) => { setValue2(result.target.value) }} />
                </div>
        </div>
    )
}

export default UseRef
