import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallBackButtoms from './UseCallBackButtoms';



const UseCallback = (props) => {

    const [count, setCount] = useState(0);

    const inc = useCallback((number)=>{

        setCount(current => current + number)

    },[setCount])

    /* Sempre quando uma ação ocorre e há mudança de estado os componentes
       são todos novamente renderizados inclusive aqueles que não tem necessidade.
       Sejam eles funções ou elementos da DOM. Através de useCallback se uma mesma
       função é reutilizada a tag relacionada (aqui é <UseCallBackButtoms inc={inc}/>) 
       a ela não precisa ser renderizada novamente uma vez que já foi criada e não tem
       seu estado alterado, logo, quando o estado de setCount for alterado este seria
       novamente renderizado. Enquanto isso ele é reutilizado promovendo peformance.
       O React.memo (linha 15 do componente filho) no componente filho verifica se o
       estado foi alterado ou não. */

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <span className="text center ">{count}</span>
            <UseCallBackButtoms incremento={inc}/>
        </div>
    )
}

export default UseCallback
