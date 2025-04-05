import { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';

/* interface AuthState {
  token: string | null;
  rtoken: string | null;
  isAuthenticated: boolean;
} */

const useAuth = () => {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const dispatch = useDispatch();

  const loadAuthState = useCallback(async () => {
    try {
      const token = localStorage.getItem('token');
      const rtoken = localStorage.getItem('rtoken');
      document.cookie = `jwt=${rtoken}; path=/; secure; samesite=strict`;
      const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

      if (token && rtoken) {
        dispatch(authActions.login({ 
          token, 
          rtoken,
          isAuthenticated: isAuthenticated 
        }));
      } else {
        dispatch(authActions.logout());
      }
      setStatus('success');
    } catch (error) {
      console.error("Auth state loading error:", error);
      dispatch(authActions.logout());
      setStatus('error');
    }
  }, [dispatch]);
  const logout = useCallback(() => {
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('rtoken');
      localStorage.removeItem('isAuthenticated');
      
      dispatch(authActions.logout());
      setStatus('success');
      window.location.href = '/login';
    } catch (error) {
      console.error("Logout error:", error);
      setStatus('error');
    }
  }, [dispatch]);
  useEffect(() => {
    loadAuthState();
  }, [loadAuthState]);

  return {status,logout};
};

export default useAuth;