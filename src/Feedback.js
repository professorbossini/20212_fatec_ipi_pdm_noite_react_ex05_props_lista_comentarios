import React from 'react'

const Feedback = ({textoOK, textoNOK, funcaoOK, funcaoNOK}) => {
    return (
        <div className="d-flex mt-3 justify-content-center">
            <button
                className="mx-2 btn btn-primary"
                onClick={funcaoOK}>
                {textoOK}
            </button>

            <button
                className="btn btn-danger"
                onClick={funcaoNOK}>
                {textoNOK}
            </button>
        </div>
    )
}

export default Feedback
