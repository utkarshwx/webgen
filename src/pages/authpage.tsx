import { useState,useActionState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { FormStateLogin, login,register } from "../api/auth";

const AuthPage = () => {
  const [dark, setDark] = useState(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  const [isLogin, setIsLogin] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };
  const [loginState,LoginFrom,isPendingLogin]=useActionState<FormStateLogin,FormData>(
    (prevData: FormStateLogin,formData: FormData)=>login(prevData,formData,dispatch,navigate),
     {error: undefined, data: {}}
    ); 
  const [registerState,registerFrom,isPendingRegister]=useActionState<FormStateLogin,FormData>(
    (prevData: FormStateLogin,formData: FormData)=>register(prevData,formData,dispatch,navigate), 
    {error:undefined, data: {}});
  const { error, data } = isLogin ? loginState : registerState;
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-neutral-900">
      <div className="bg-white dark:bg-neutral-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          {isLogin ? "Login" : "Register"}
        </h2>
        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-100 p-2 rounded dark:bg-red-800 dark:text-red-300">
            {error}
          </div>
        )}
        <form action={isLogin?LoginFrom:registerFrom} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              defaultValue={data?.email}
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
              name="password"
              defaultValue={data?.password}
              className="mt-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-700 dark:text-gray-200 dark:border-neutral-600"
              required
            />
          </div>
          {!isLogin && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                defaultValue={data?.confirmPassword}
                className="mt-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-700 dark:text-gray-200 dark:border-neutral-600"
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none dark:focus:ring-blue-800"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={toggleAuthMode}
            className="text-blue-600 dark:text-blue-400 hover:underline focus:outline-none"
            disabled={isPendingLogin || isPendingRegister}
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
        <button onClick={darkModeHandler} className="mt-4">
          {dark ? (
            <IconSun className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
          ) : (
            <IconMoon className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
          )}
        </button>
      </div>
    </div>
  );
};

export default AuthPage;