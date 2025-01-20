import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../store/auth-slice";
import { IconMoon, IconSun } from "@tabler/icons-react";

const LoginPage = () => {
  const [dark, setDark] = useState(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch=useDispatch()
  const navigate = useNavigate();

  const login = async () => {
    if (email === "user@example.com" && password === "password") {
      localStorage.setItem("isAuthenticated", "true");
      dispatch(authActions.login({token:"token",refreshtoken:"refreshtoken"}))  
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    login();
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-neutral-900">
      <div className="bg-white dark:bg-neutral-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Login</h2>
        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-100 p-2 rounded dark:bg-red-800 dark:text-red-300">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-700 dark:text-gray-200 dark:border-neutral-600"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-700 dark:text-gray-200 dark:border-neutral-600"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none dark:focus:ring-blue-800"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Don't have an account? <a href="/register" className="text-blue-600 dark:text-blue-400 hover:underline">Register</a>
        </p>
        <button onClick={()=> darkModeHandler()}>{dark ? 
              <IconSun className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />: 
              <IconMoon className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
