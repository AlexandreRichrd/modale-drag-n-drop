import React, { useState } from 'react';


import './styles.css'

function FileDropZone(props: any) {

  const handleFileDrop = (event:any) => {
    event.preventDefault();

    const file = event.dataTransfer.files[0];

    const reader = new FileReader();
    reader.onload = (e:any) => {
      const contents = e.target.result;
      props.setFile(contents);
    };
    reader.readAsText(file);
    props.setIsOpened(false)
  };

  if(props.isOpened) {return (
  
    <div id='modal'>
        <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleFileDrop}
        className='card'
        >
            <button onClick={() => props.setIsOpened(false)}>Fermer</button>
        {props.file && (
            <div>
            <h2>Contenu du fichier :</h2>
            <p>{props.file}</p>
            </div>
        )}
        {!props.file && <h2>Déposez un fichier ici</h2>}
        </div>
    </div>
  );
        }else{
            return(<></>)

  }
}


export default FileDropZone;