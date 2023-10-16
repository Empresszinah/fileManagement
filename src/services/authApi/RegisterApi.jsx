import axios from 'axios';

console.log(process.env.BASE_URL);

// export const registerUser = async ({
//   email,
//   firstName,
//   lastName,
//   password,
//   role,
// }) => {
//   let response = await axios.post(
//     'https://fileapp.onrender.com/user/register',
//     {
//       email,
//       firstName,
//       lastName,
//       password,
//       role,
//     }
//   );
//   console.log(response.data);
// };


export const registerUser = async ({ formData}) => {
  console.log(formData.email)
  console.log(formData.firstName)
  console.log(formData.lastName)
  console.log(formData.password)
  console.log(formData.role)



   try {let response = await axios.post(
    'https://fileapp.onrender.com/user/register',
    {
      email:formData.email,
      firstName:formData.firstName,
      lastName:formData.lastName,
      password:formData.password,
      role:formData.role
    }
  );

  return response;}
  catch (error) {console.log(error)}
};

