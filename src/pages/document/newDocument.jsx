import React, { useState } from 'react';
import "./newDocument.css"

const UserDetailsForm = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    fileName: '',
    email: '',
    file: null,
    assignTo: 'admin', // Default assignment value
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, file });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <div className='newDocument'>
      <h2>Fill in Document Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="fileName">File Name:</label>
          <input
            type="text"
            id="fileName"
            name="fileName"
            value={formData.fileName}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="file">Upload File:</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
          />
        </div>

        <div>
          <label htmlFor="assignTo">Assign File to:</label>
          <select
            id="assignTo"
            name="assignTo"
            value={formData.assignTo}
            onChange={handleInputChange}
          >
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserDetailsForm;
