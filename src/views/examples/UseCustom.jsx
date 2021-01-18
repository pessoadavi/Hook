import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

const UseRef = (props) => {

    const [count, inc, dec] = useCounter()
    const url = 'http://files.cod3r.com.br/curso-react/estados.json'
    const response = useFetch(url)

    function showList (data) {

        return data.map(item => {

            <li key={item.nome} >{item.nome} - {item.sigla}</li>
        })
    }

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
            <SectionTitle title="Exercício 01" />
            <div className="center">
                <span className="text">{count}</span>
                <button className="btn"
                    onClick={() => { inc(count + 1) }}
                >Incremento</button>
                <button className="btn"
                    onClick={() => { dec(count - 1) }}
                >Decremento</button>
            </div>
            <SectionTitle title="Exercício 02" />
                <div className="center">
                    <ul>
                        {!response.loading ? showList(response.data) : 'Carregando...'}
                    </ul>
                </div>

        </div>
    )
}

export default UseRef
