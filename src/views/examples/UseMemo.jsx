import React, { useState, useMemo } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseMemo = (props) => {

    function sum(field1, field2) {
        const future = Date.now() + 2000;
        while (Date.now() < future) {}
        return field1 + field2;
    
    }

    const [field1, setField1] = useState(0);
    const [field2, setField2] = useState(0);
    const [field3, setField3] = useState(0);

    const finalValue = useMemo(()=>sum(field1, field2),[field1, field2])

    /*   useMemo guarda os valores de parametros e resultados no cache e quando
         a função for chamada com os mesmos parâmetros ele retorna o valor já
         armazenado ganhando eficiência caso a requisição de uma nova dom seja grande
    */

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />
            <p>
                <h3>Campo 1</h3>
                <input type="number" className="input center" 
                value={field1} onChange={(element) => { setField1(parseInt(element.target.value)) }} />
            </p>
            <p>
                <h3>Campo 2</h3>
                <input type="number" className="input center" 
                value={field2} onChange={(element) => { setField2(parseInt(element.target.value)) }} />
            </p>
            <p>
                <h3>Campo 3</h3>
                <input type="number" className="input center" 
                value={field3} onChange={(element) => { setField3(parseInt(element.target.value)) }} />
            </p>
            <span className="text">Resultado: {finalValue}</span>

        </div>
    )
}

export default UseMemo
