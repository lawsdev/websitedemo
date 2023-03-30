import  Click  from './drag';
import { useEffect, useState } from 'react';
import Draggable from 'react-draggable';

function Postcard () {
    
    return (
        <>
        <div className="Postcard">
            <img src="selectedbgimg.png"></img>
            <Draggable>
                <img src="selectedstickerurl.png"/>
            </Draggable>
            <Draggable>
                <p>Textfieldvalue</p>
            </Draggable>
        </div>
        <div className="images">
        {images.map(image => (
        <div>
        <div className="parent">OrangeJuice<div className="text">{ image.assetName }</div>
        <Draggable bounds="parent" grid={[50, 50]}><img src={ image.imageUrl } style={{maxWidth: "40px"}}/></Draggable>
        </div>
        </div>
			))}
        </div>
        </>
    )
}