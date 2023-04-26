import React from "react";
import './ImageField.css'

const ImageField = ({ image_url, box }) => {
    return (
        // <div className="ma center imgbox br3">
        //     <div className="absolute mt2">
        //         <img className="pv4" id="inputImage" alt="" src={image_url} width="500px" height="auto"></img>
        //         <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        //     </div>
        // </div>

        // <div className='center ma'>
        //     <div className='absolute mt2'>
        //       <img id='inputImage' alt='' src={image_url} width='500px' heigh='auto'/>
        //       <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        //     </div>
        // </div>

        <div className='center ma'>
            <div className='absolute mt2' style={{ left: '480px' }}>
                <img id='inputImage' alt='' src={image_url}/>
                <div className='bounding-box' style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
            </div>
        </div>
    );
}

export default ImageField
