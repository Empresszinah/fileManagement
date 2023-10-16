import { useSelector } from 'react-redux';
import { selectToken } from '../redux/authSlice';

const useAuth = () => {
  const token = useSelector(selectToken);

  const isAuthenticated = !!token;

  return isAuthenticated;
};

export default useAuth;
