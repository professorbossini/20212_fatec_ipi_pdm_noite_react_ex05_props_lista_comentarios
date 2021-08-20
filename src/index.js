import ReactDOM from 'react-dom'
import React from 'react'
import faker from 'faker'
import 'bootstrap/dist/css/bootstrap.min.css'
import Comentario from './Comentario'
import Cartao from './Cartao'

export const App = () => {
    return (
        <Cartao>
            <Comentario 
                foto={faker.image.avatar()} 
                nome={faker.name.findName()}
                texto={faker.lorem.sentences()}
                data={faker.date.soon().toLocaleDateString()}
            />
        </Cartao>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)