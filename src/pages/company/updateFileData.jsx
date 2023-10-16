import axios from 'axios';

// Function to update a file's data using PUT request
const updateFileData = async (fileId, dataToUpdate) => {
  try {
    // Replace 'https://your-api-url.com/files' with your actual API endpoint
    const response = await axios.put(`https://your-api-url.com/files/${fileId}`, dataToUpdate);

    // Handle the response as needed (e.g., show a success message)
    console.log('File data updated:', response.data);

    return response.data; // You can return the updated data if needed
  } catch (error) {
    console.error('Error updating file data:', error);
    throw error; // Throw the error to handle it in your component
  }
};

export default updateFileData;
