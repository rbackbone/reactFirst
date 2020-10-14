import React from 'react'
import './app.css'
import Imprime from './component/comp01'
import ImprimeParam from './component/comp02'
import ImprimeFilhos from './component/comp03'
import Card from './component/layout/card'
import ListaProd from './component/lista'
import VerificaNumero from './component/verifica'
import VerificaNumeroIf from './component/verificaIF'

export default (props) => (
<div className="App">
    <Card titulo = "Verificação IF">
        <VerificaNumeroIf numero={15}></VerificaNumeroIf>
    </Card>    
    <Card titulo = "Verificação">
        <VerificaNumero numero={30}></VerificaNumero>
    </Card>    
    <Card titulo = "Produtos">
        <ListaProd></ListaProd>
    </Card>    
    <Card titulo = "Componente com Filhos">
        <ImprimeFilhos>
            <ul>
                <li>Laura</li>
                <li>Pedro</li>
                <li>Bia</li>
                <li>Ana</li>
            </ul>
        </ImprimeFilhos>
    </Card>
    <Card titulo = "Componente com Parâmetros">
        <ImprimeParam titulo="título passado por parâmetro"></ImprimeParam>
    </Card>
    <Card titulo = "Componente com Parâmetros">
        <ImprimeParam titulo="2ª instância do mesmo componente"></ImprimeParam>
    </Card>
    <Card titulo = "Primeiro Componente">
        <Imprime></Imprime>
    </Card>

</div>
);