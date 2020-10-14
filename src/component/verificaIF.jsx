import React from 'react'
import Se from './funcIF'

export default props => {

    return (
        <div>
            <h2>Exibe Condição</h2>
            <div>
                <h2> O número é {props.numero}</h2>
                <Se test={props.numero % 2 == 0 }>
                    <span>Par</span>
                </Se>
                <Se test={props.numero % 2 == 1 }>
                    <span>Ímpar</span>
                </Se>
            </div>
        </div>
    )

}
