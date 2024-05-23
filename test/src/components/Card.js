import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import './Card.css';  // Assuming you create a separate CSS file for styling

export default function Card() {
  const fileUploadRef = useRef(null);
  const [file, setFile] = useState(null);
  const [scanCount, setScanCount] = useState(0);
  const [analysisResult, setAnalysisResult] = useState(null);

  useEffect(() => {
    if (fileUploadRef.current) {
      fileUploadRef.current.style.opacity = "0";
    }
  }, []);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const uploadFunction = async () => {
    Swal.fire({
      title: "Scanning, please wait...",
      html: `<b>File selected:</b> ${file.name}<br/>
             <b>File size:</b> ${file.size} bytes`,
      timer: 11000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      willClose: async () => {
        const isMalwareFound = (scanCount % 2 !== 0);
        const resultTitle = isMalwareFound ? "Malware Found!" : "Malware Not Found";
        const summary = "This is a summary of the file's content for demonstration purposes.";
        const content = "Sample content from the file would be displayed here.";

        setAnalysisResult({
          resultTitle,
          summary,
          content,
          isMalwareFound
        });

        setScanCount(prev => prev + 1);
        setFile(null); // reset file after showing the result
      }
    });
  };

  return (
    <div className="card mb-3" style={ { maxWidth: "666px" } }>
      <div className="row">
        <div className="col-md-3">
          <img
            src="https://enterprise.comodo.com/images/forensic-analysis/scan-computers.png"
            className="img-fluid rounded-start"
            alt="..."
            style={ { objectFit: "cover", width: "100%", height: "100%" } }
          />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h3 className="card-title">Scan it now</h3>
            <p className="card-text">Upload your file here</p>
            <div className="area" onDrop={ (e) => {
              e.preventDefault();
              setFile(e.dataTransfer.files[0]);
            } } onDragOver={ (e) => e.preventDefault() } style={ {
              width: "300px", height: "200px", border: "2px dashed #ccc",
              borderRadius: "5px", display: "flex", alignItems: "center",
              justifyContent: "center", cursor: "pointer", flexDirection: "column"
            } }>
              <input
                type="file"
                onChange={ handleFileChange }
                style={ { display: "none" } }
                ref={ fileUploadRef }
                id="fileInput"
              />
              { file ? (
                <>
                  <img src={ URL.createObjectURL(file) } alt="file preview" style={ { width: "100px", height: "100px" } } />
                  <p>Selected file: { file.name }</p>
                </>
              ) : (
                <label htmlFor="fileInput" style={ { cursor: "pointer" } }>
                  Click to Select File
                </label>
              ) }
            </div>
            { file && (
              <button
                className="btn"
                style={ { background: "#00bc8c", marginTop: "10px" } }
                onClick={ uploadFunction }
              >
                Scan Now
                <div className="col-md-4 text-center">
                  <button className="btn btn-scan-now">Scan Now</button> {/* Add button with animation */ }
                </div>
              </button>
            ) }
          </div>
        </div>
      </div>
      { analysisResult && (
        <div className={ `analysis-card ${analysisResult.isMalwareFound ? 'red-background' : 'green-background'}` }>
          <h4>Analysis Result</h4>
          <p><strong>Result:</strong> { analysisResult.resultTitle }</p>
          <p><strong>Summary:</strong> { analysisResult.summary }</p>
          <p><strong>Content:</strong> { analysisResult.content }</p>
        </div>
      ) }
    </div>
  );
}
