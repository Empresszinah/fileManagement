import React, { useState } from 'react';

export const LoginState = () => {
  const [loginUserResponse, setLoginUserResponse] = useState(null);

  return {
    loginUserResponse,
    setLoginUserResponse,
  };
};
