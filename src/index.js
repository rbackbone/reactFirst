import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import Imprime from './component/comp01'
import ImprimeParam from './component/comp02'
import ImprimeFilhos from './component/comp03'
import Card from './component/layout/card'

ReactDOM.render(
    <div>
        <Imprime></Imprime>
        <ImprimeParam titulo="Atenção, novo título passado por parâmetro"></ImprimeParam>
        <ImprimeParam titulo="Atenção, 2ª instância do mesmo componente"></ImprimeParam>
        <ImprimeFilhos>
            <ul>
                <li>Laura</li>
                <li>Pedro</li>
                <li>Bia</li>
                <li>Ana</li>
            </ul>
        </ImprimeFilhos>
        <Card titulo = "Título do CARD">
            Conteudo
        </Card>
    </div>,
    document.getElementById('root')

)