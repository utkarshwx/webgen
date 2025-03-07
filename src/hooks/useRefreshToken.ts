import axios from '../api/axios';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';

const useRefreshToken = () => {
  const dispatch = useDispatch(); // Use useDispatch to get the dispatch function

  const refresh = async () => {
    try {
      const response = await axios.get('/users/refreshToken', {
        withCredentials: true,
      });

      // Dispatch the setToken action to update the Redux state
      dispatch(authActions.setToken(response.data.token));

      // Return the new access token
      return response.data.accessToken;
    } catch (error) {
      console.error('Failed to refresh token:', error);
      throw error; // Re-throw the error for handling in the calling code
    }
  };

  return refresh; // Return the refresh function
};

export default useRefreshToken;