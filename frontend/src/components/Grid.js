import React, { useState } from "react";
import Dropzone from "react-dropzone";
import "./../styles/grid.css";

const Grid = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDrop = (files) => {
    // Set the selected file to the first file in the array
    setSelectedFile(files[0]);
  };
  return (
    <div className='container'>
      <div className='nav'>
          <div className='nav__account'></div>
          <div className='nav__buttons'></div>
        </div>
        <div className='main'></div>
      {/* <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {selectedFile ? (
              <img
                src={URL.createObjectURL(selectedFile)}
                alt='Selected file'
              />
            ) : (
              <p>Drag and drop an image here, or click to select an image</p>
            )}
          </div>
        )}
      </Dropzone> */}
    </div>
  );
};

export default Grid;
