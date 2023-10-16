import React, { useState } from 'react';
import "./folder.css"

const FolderPage = () => {
  // State for managing folders and files
  const [folders, setFolders] = useState([]);
  const [files, setFiles] = useState([]);
  const [newFolderName, setNewFolderName] = useState('');
  const [newFileName, setNewFileName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  // Function to create a new folder
  const createFolder = () => {
    if (newFolderName.trim() === '') return;
    setFolders([...folders, newFolderName]);
    setNewFolderName('');
  };

  // Function to create a new file
  const createFile = () => {
    if (newFileName.trim() === '') return;
    setFiles([...files, newFileName]);
    setNewFileName('');
  };

  // Function to handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      // You can upload the selected file to your server here
    }
  };

  return (
    <div>
      <h1>Folders and Files</h1>

      {/* Create Folder */}
      <div>
        <input
          type="text"
          placeholder="New Folder Name"
          value={newFolderName}
          onChange={(e) => setNewFolderName(e.target.value)}
        />
        <button onClick={createFolder}>Create Folder</button>
      </div>

      {/* Create File */}
      <div>
        <input
          type="text"
          placeholder="New File Name"
          value={newFileName}
          onChange={(e) => setNewFileName(e.target.value)}
        />
        <button onClick={createFile}>Create File</button>
      </div>

      {/* File Upload */}
      <div>
        <input
          type="file"
          onChange={handleFileUpload}
        />
        {selectedFile && <p>Selected File: {selectedFile.name}</p>}
      </div>

      {/* List Folders */}
      <div>
        <h2>Folders:</h2>
        <ul>
          {folders.map((folder, index) => (
            <li key={index}>{folder}</li>
          ))}
        </ul>
      </div>

      {/* List Files */}
      <div>
        <h2>Files:</h2>
        <ul>
          {files.map((file, index) => (
            <li key={index}>{file}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FolderPage;
