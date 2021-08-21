import ReactDOM from 'react-dom'
import React from 'react'
import faker from 'faker'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cartao from './Cartao'
import Comentario from './Comentario'
import Feedback from './Feedback'
import ListaComentarios from './ListaComentarios'

export const App = () => {
    const textoOK = "Aprovar"
    const textoNOK = "Não aprovar"
    const funcaoOK = () => alert("Ok, aprovado")
    const funcaoNOK = () => alert("OK, não aprovado")
    const feedbackComponent = <Feedback textoOK={textoOK} textoNOK={textoNOK} funcaoOK={funcaoOK} funcaoNOK={funcaoNOK}/>
    return (
        <ListaComentarios>
            <div className="row">
                
                <div className="col-md-6">
                    <Cartao>
                        <Comentario 
                            foto={faker.image.avatar()} 
                            nome={faker.name.findName()}
                            texto={faker.lorem.words(10)}
                            data={faker.date.soon().toLocaleDateString()}
                            
                        />
                        {feedbackComponent}
                    </Cartao>
                </div>

                <div className="col-md-6">
                    <Cartao>
                        <Comentario 
                            foto={faker.image.avatar()} 
                            nome={faker.name.findName()}
                            texto={faker.lorem.words(10)}
                            data={faker.date.soon().toLocaleDateString()}
                        />
                        {feedbackComponent}
                    </Cartao>
                </div>
                
            </div>

            <div className="row">
                
                <div className="col-md-6">
                    <Cartao>
                        <Comentario 
                            foto={faker.image.avatar()} 
                            nome={faker.name.findName()}
                            texto={faker.lorem.words(10)}
                            data={faker.date.soon().toLocaleDateString()}
                        />
                        {feedbackComponent}
                    </Cartao>
                </div>

                <div className="col-md-6">
                    <Cartao>
                        <Comentario 
                            foto={faker.image.avatar()} 
                            nome={faker.name.findName()}
                            texto={faker.lorem.words(10)}
                            data={faker.date.soon().toLocaleDateString()}
                        />
                        {feedbackComponent}
                    </Cartao>
                </div>
                
            </div>
           
        </ListaComentarios>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)