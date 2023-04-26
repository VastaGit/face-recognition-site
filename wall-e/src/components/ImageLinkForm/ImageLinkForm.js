import React from "react";
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <h2 className="f3">
                {'Put in here your link'}
            </h2>
            <div className="form pa4 br3 center">
                <input
                    className="f4 bw2 pa2 w-70 "
                    type='text' onChange={onInputChange}>
                </input>
                <button
                    className="w-30 f4 grow no-underline ba bw2 ph3 pv2 mb2 dib bg-light-purple"
                    onClick={onButtonSubmit}>Detect
                </button>
            </div>
        </div>
    )
}

export default ImageLinkForm
