import React from "react";
import '../stylesheets/Testimony.css';

function Testimony(props) {
    return (
        <div className='container-testimony'>
            <img
                className='image-testimony'
                src={require(`../img/testimony-${props.imagen}.jpg`)}
                alt="photo zuck"
            />
            <div className="container-text-testimony">
                <p className="name-testimony">
                    <strong>{props.nombre}</strong> en {props.pais}
                </p>
                <p className="position-testimony">
                    {props.cargo} en <strong>{props.empresa}</strong>
                </p>
                <p className="text-testimony">"
                    {props.testimonio}"
                </p>
            </div>
        </div>
    );
}
export default Testimony;