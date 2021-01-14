import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


export default (props) => {

    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);

    const [numero, setNumero] = useState();
    const [parOuImpar, setParOuImpar] = useState("Selecione um número.");


    function calcFatorial(number) {

        if (number < 0) return "Não existe fatorial de número negativo."

        if (number === 0) return 1;

        return number * calcFatorial(number - 1);

    }

    function calcParOuImpar(numero) {

        let result = numero % 2;

        if (result === 0) {
            return "Par.";
        } else {
            return "Ímpar.";
        }

    }

    useEffect(() => {                                      // userEffect é utilizado quando se quer que uma função seja acionada
        // apenas quando a dependência tem alguma alteração. Quando [number]
        setFatorial(calcFatorial(number))                  // sofrer alteração a função calcFatorial é acionada como um efeito 
    }, [number]);                                          // colateral da alteração de number.


    useEffect(() => {
        setParOuImpar(calcParOuImpar(numero))
    }, [numero]);

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício 01" />
            <div>
                <h1> Fatorial: {fatorial} </h1>
                <input type="number" className="input"
                    value={number}
                    onChange={(result) => { setNumber(result.target.value) }} />
            </div>
            <SectionTitle title="Exercício 02" />
            <div>
                <h1>Status: {parOuImpar}</h1>
                <input className="input" type="number"
                    onChange={(result) => { setNumero(result.target.value) }}></input>
            </div>
        </div>
    )
}

