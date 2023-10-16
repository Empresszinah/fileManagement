import axios from 'axios';

console.log(process.env.BASE_URL);

export const receiveFiles = async ({
  fileName,
  companyName,
  comment,
  assignToID,
  fileData,
}) => {
  let response = await axios.post(
    'https://fileapp.onrender.com/user/receive/file',
    {
      fileName,
      companyName,
      comment,
      assignToID,
      fileData,
    }
  );
  console.log(response.data);
};
