import axios from 'axios';

console.log(process.env.BASE_URL);

export const LoginUser = async ({ formData}) => {
  console.log(formData.email)
  console.log(formData.password)

   try {let response = await axios.post(
    'https://fileapp.onrender.com/user/login',
    {
      email:formData.email,
      password:formData.password
    }
  );

  return response;}
  catch (error) {console.log(error)}
};
