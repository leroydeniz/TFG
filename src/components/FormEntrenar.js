import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class FormEntrenar extends Component {

    //Se generan los enlaces para poder tener acceso a los datos que vamos a recoger
    emailRef = React.createRef();
    dataset1Ref = React.createRef();
    termsRef = React.createRef();

    recibirFormulario = (e) => {
        //Evita que se recargue la página y se envíe el formulario
        e.preventDefault();
        var email = this.emailRef.current.value;
        var dts1 = this.dataset1Ref.current.value;
        var terms = this.termsRef.current.value;

        if (terms) {
            this.render(email + dts1);
        }
    }

    render() {
        return (
            <React.Fragment>
                <h1>Entrenar</h1>

                <div className='form-group'>
                    <p><b>Resultado:</b> configuración de una red neuronal y las métricas de evaluación de ésta.</p>
                </div>

                <form onSubmit={this.recibirFormulario} id="formServicios">
                    <p>

                        <div className="input-group mb-3">
                            Conjunto de datos de entrenamiento:
                        </div>

                        <div className="input-group mb-3">
                            <input className="form-control" type='file' id='dataset1' name='dataset1' placeholder="Dataset de train" aria-label="Dataset de train" aria-describedby="basic-addon1" ref={this.dataset1Ref} required />
                        </div>

                        <div className="input-group mb-3">
                            Email (opcional):
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">@</span>
                            </div>
                            <input className="form-control" type='email' id='email' name='email' placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" ref={this.emailRef} />
                        </div>

                        <div className='form-group'>
                            <p><label><input type="checkbox" name="terms" id="terms" value="Acepto" ref={this.termsRef} defaultChecked={true} /> Acepto los términos y condiciones del servicio.</label></p>
                        </div>

                        <div className='form-group'>
                            <input type='submit' className="btn btn-info" value="Entrenar" />
                        </div>
                    </p>
                </form>
            </React.Fragment>
        );

    }
}