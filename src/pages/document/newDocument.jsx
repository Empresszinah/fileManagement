import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./newDocument.css"


const UploadDocument = () => {
  const [formData, setFormData] = useState({
    fileName: "",
    companyName: "",
    comment: "",
    assignToID: "",
    fileData: "",
});
   const [users, setUsers] = useState([]);
   const [data, setData] = useState([]);
   const { fileName, companyName, comment, assignToID, fileData } = formData;

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (fileName && companyName && comment && assignToID && fileData) {

      const authToken = 'YourAuthTokenHere';

      // Set up the headers with the authentication token
      const headers = {
        Authorization: `Bearer ${authToken}`,
      };

        const formData = new FormData(document.querySelector('form'));
        console.log('Upload button clicked!');

        axios.post('https://fileapp.onrender.com/user/receive/file', formData, { headers })
        .then(res => {
            setData([...data, res.data]);
            setFormData({ fileName: "", companyName: "", comment: "", assignToID: "", fileData: "" });

        })
        .catch(err => console.log(err))



    }
};

        useEffect(() => {

          axios.get('https://fileapp.onrender.com/user/all/users')
            .then(response => {
              
              setUsers(response.data);
            })
            .catch(error => {
              console.error('Error fetching users:', error);
            });
        }, []);


        const [uploadDocument, setUploadDocument] = useState([])

        useEffect(()=> {
          async function fetchUsers() {
          const response = await fetch('https://fileapp.onrender.com/user/all/users')
          const resData = await response.json();
          setUploadDocument(resData.users);
          }
          fetchUsers();
        }, []);



  

  return (
      <div className="flex flex-col items-center justify-center min-h-screen">
      <section className='bg-coolGray-50 py-4'>
        <div className='container px-4 mx-auto'>
          <form onSubmit={handleSubmit}>
            <div className='p-6 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard'>
              <div className='pb-6 border-b border-coolGray-100'>
                <div className='flex flex-wrap items-center justify-between -m-2'>
                  <div className='w-full md:w-auto p-2'>
                    <h2 className='text-coolGray-900 text-lg font-semibold'>
                      Document Details
                    </h2>
                    <p className='text-xs text-coolGray-500 font-medium'>
                      Lorem ipsum dolor sit amet
                    </p>
                  </div>
                  <div className='w-full md:w-auto p-2'>
                    <div className='flex flex-wrap justify-between -m-1.5'>
                      <div className='w-full md:w-auto p-1.5'>
                        <button className='flex flex-wrap justify-center w-full px-4 py-2 font-medium text-sm text-coolGray-500 hover:text-coolGray-600 border border-coolGray-200 hover:border-coolGray-300 bg-white rounded-md shadow-button'>
                          <p>Cancel</p>
                        </button>
                      </div>
                      <div className='w-full md:w-auto p-1.5'>
                        <button type="submit" className='flex flex-wrap justify-center w-full px-4 py-2 bg-green-500 hover:bg-green-600 font-medium text-sm text-white border border-green-500 rounded-md shadow-button'
                        >
                          <p>Upload</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='py-6 border-b border-coolGray-100'>
                <div className='w-full md:w-9/12'>
                  <div className='flex flex-wrap -m-3'>
                    <div className='w-full md:w-1/3 p-3'>
                      <p className='text-sm text-coolGray-800 font-semibold'>
                        Company's Name
                      </p>
                    </div>
                    <div className='w-full md:flex-1 p-3'>
                      <input
                        className='w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input'
                        type='text'
                        placeholder='company name'
                        name='companyName' // Add name attribute to the input
                        value={companyName} // Bind value to the state
                        onChange={handleChange} // Handle change event
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='py-6 border-b border-coolGray-100'>
                <div className='w-full md:w-9/12'>
                  <div className='flex flex-wrap -m-3'>
                    <div className='w-full md:w-1/3 p-3'>
                      <p className='text-sm text-coolGray-800 font-semibold'>
                        File Name
                      </p>
                    </div>
                    <div className='w-full md:flex-1 p-3'>
                      <input
                        className='w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input'
                        type='text'
                        placeholder='file name'
                        name='fileName'
                        value={fileName} 
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='py-6 border-b border-coolGray-100'>
                <div className='w-full md:w-9/12'>
                  <div className='flex flex-wrap -m-3'>
                    <div className='w-full md:w-1/3 p-3'>
                      <p className='text-sm text-coolGray-800 font-semibold'>
                        Email address
                      </p>
                    </div>
                    <div className='w-full md:flex-1 p-3'>
                      <input
                        className='w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input'
                        type='text'
                        placeholder='hello@huzinah.com'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='py-6 border-b border-coolGray-100'>
                <div className='w-full md:w-9/12'>
                  <div className='flex flex-wrap -m-3'>
                    <div className='w-full md:w-auto p-3'>
                      <img
                        src='file-assets/images/dashboard/forms/avatar.png'
                        alt=''
                      />
                    </div>
                    <div className='w-full md:flex-1 p-3'>
                      <p>Document</p>
                      <div className='relative flex flex-col items-center justify-center p-6 h-44 text-center text-green-500 focus-within:border-green-500 border border-dashed border-coolGray-200 rounded-lg'>
                        <p className='mb-1 text-sm text-coolGray-800 font-medium'>
                          <span className='text-green-500'>
                            Click to Upload a file
                          </span>
                          <span>or drag and drop</span>
                        </p>
                        <p className='text-xs text-coolGray-500 font-medium'>
                          PNG, JPG, GIF or up to 10MB
                        </p>
                        <input
                          className='absolute top-0 left-0 w-full h-full opacity-0'
                          type='file'
                          name='fileData' // Add name attribute to the input
                          value={fileData} // Bind value to the state
                          onChange={handleChange} // Handle change event
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='py-6 border-b border-coolGray-100'>
                <div className='w-full md:w-9/12'>
                  <div className='flex flex-wrap -m-3'>
                    <div className='w-full md:w-1/3 p-3'>
                      <p className='text-sm text-coolGray-800 font-semibold'>
                        Assigned To
                      </p>
                    </div>
                    <div className='w-full md:flex-1 p-3'>
                      <div className='relative'>
                      <label htmlFor="assignTo">Assign To:</label>
                      <select
                      className='appearance-none w-full py-2.5 px-4 text-coolGray-900 text-base font-normal bg-white border outline-none border-coolGray-200 focus:border-green-500 rounded-lg shadow-input'
                      id="assignTo" // Add an id for the label to reference
                      name='assignToID'
                      value={assignToID}
                      onChange={uploadDocument}
                    >
                      {/* Populate dropdown options with user data */}
                      <option value="">Select Assignee</option>
                      {users.map(user => (
                        <option key={user.id} value={user.id}>
                          {user.name}
                        </option>
                      ))}
                    </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='pt-6'>
                <div className='w-full md:w-9/12'>
                  <div className='flex flex-wrap -m-3'>
                    <div className='w-full md:w-1/3 p-3'>
                      <p className='text-sm text-coolGray-800 font-semibold'>
                        Comment
                      </p>
                      <p className='text-xs text-coolGray-500 font-medium'>
                        Lorem ipsum dolor sit amet
                      </p>
                    </div>
                    <div className='w-full md:flex-1 p-3'>
                        <textarea
                          name="comment" 
                          value={comment} 
                          onChange={handleChange} 
                          className='block w-full h-64 p-6 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input resize-none'
                          defaultValue={''}
                        />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
     </div> 
  );
};

export default UploadDocument;
