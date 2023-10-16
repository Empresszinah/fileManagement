import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import { companiesData } from './data';
import "./fileDetail.css"

const FileDetail = () => {
  const { companyId, fileId } = useParams();
  
  const [reviewData, setReviewData] = useState({
    fileId: "",
    comment: "",
    assignToID: "",
    status: ""
  });

  const company = companiesData.find((c) => c.id === parseInt(companyId, 10));

  if (!company) {
    return <div>Company not found</div>;
  }

  const file = company.files.find((f) => f.id === parseInt(fileId, 10));

  if (!file) {
    return <div>File not found</div>;
  }

  // Function to handle the form submission and send the PUT request
  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make the PUT request to update the file's review details
      const response = await axios.put(`https://fileapp.onrender.com/user/review/file/${fileId}`, reviewData);

      // Handle the response as needed (e.g., show a success message)
      console.log('Review updated:', response.data);
    } catch (error) {
      console.error('Error updating review:', error);
    }
  };

  // Function to handle changes in the review form fields
  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReviewData({
      ...reviewData,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>File: {file.fileName}</h2>
      <p>Date: {file.date}</p>
      <p>Sender: {file.sender}</p>
      <form onSubmit={handleReviewSubmit}>
        <div>
          <label>Comment:</label>
          <textarea
            name="comment"
            value={reviewData.comment}
            onChange={handleReviewChange}
          />
        </div>
        <div>
          <label>AssignToID:</label>
          <input
            type="text"
            name="assignToID"
            value={reviewData.assignToID}
            onChange={handleReviewChange}
          />
        </div>
        <div>
          <label>Status:</label>
          <input
            type="text"
            name="status"
            value={reviewData.status}
            onChange={handleReviewChange}
          />
        </div>
        <div>
          <button type="submit">Submit Review</button>
        </div>
      </form>
    </div>
  );
};

export default FileDetail;
